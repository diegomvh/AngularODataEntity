import { Component } from '@angular/core';
import { PeopleService, Person, PhotosService } from '../../trippin';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'trip-person',
  standalone: true,
  imports: [CommonModule, DialogModule],
  template: `<p-dialog [(visible)]="display">
    {{ person | json }}
  </p-dialog>`,
})
export class PersonComponent {
  person: Person | null = null;
  display: boolean = false;

  constructor(private photos: PhotosService, private people: PeopleService) {}

  show(name: string) {
    this.people
      .entity({ UserName: name })
      .query((q) =>
        q.expand(({e, t}) => e()
          .field(t.Photo)
          .field(t.Friends, f => {
            f.expand(({e, t}) => e().field(t.Emails)); 
            f.levels(10);
          })
          .field(t.Trips, f => {
            f.expand(({e, t}) => e().field(t.Photos).field(t.PlanItems));
            f.orderBy(({e, t}) => e().ascending(t.Photos))
          })
        )
      )
      .fetch()
      .subscribe(({ entity, annots }) => {
        console.log(entity, annots);
        this.person = entity || null;
        if (this.person !== null && this.person.Photo) {
          this.photos
            .entity(this.person.Photo)
            .media()
            .fetchBlob()
            .subscribe(console.log);
        }
        this.display = true;
      });
  }
}
