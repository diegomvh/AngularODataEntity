import { Component, inject, model, signal } from '@angular/core';
import { PeopleService, Person, PhotosService } from '../../trip-pin';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'trip-person',
  standalone: true,
  imports: [CommonModule, DialogModule],
  template: `<p-dialog [(visible)]="display">
    <img [src]="image()"/>
    <pre>{{ person() | json }}</pre>
  </p-dialog>`,
})
export class PersonComponent {
  photosService = inject(PhotosService);
  peopleService = inject(PeopleService);

  person = signal<Person | null>(null);
  image = signal<string>("");
  display = model<boolean>(false);

  show(name: string) {
    this.peopleService
      .entity({ UserName: name })
      .query((q) =>
        q.expand(({e, t}) => e()
          .field(t.Photo)
          .field(t.Friends, f => {
            f.levels(10);
          })
          .field(t.Trips, f => {
            f.expand(({e, t}) => e().field(t.Photos).field(t.PlanItems));
          })
        )
      )
      .fetch()
      .subscribe(({ entity, annots }) => {
        console.log(entity, annots);
        this.person.set(entity);
        if (entity !== null && entity.Photo) {
          this.photosService
            .entity(entity.Photo)
            .media()
            .fetchBlob()
            .subscribe(blob => {
              const uri = URL.createObjectURL(blob);
              this.image.set(uri);
            });
        } else {
          this.image.set("");
        }
        this.display.set(true);
      });
  }
}
