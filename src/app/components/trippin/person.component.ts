import { Component, inject, signal } from '@angular/core';
import { PeopleService, Person, PhotosService } from '../../trip-pin';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'trip-person',
  standalone: true,
  imports: [CommonModule, DialogModule],
  template: `<p-dialog [visible]="display()">
    {{ person() | json }}
  </p-dialog>`,
})
export class PersonComponent {
  photosService = inject(PhotosService);
  peopleService = inject(PeopleService);
  person = signal<Person | null>(null);
  display = signal<boolean>(false);

  show(name: string) {
    this.peopleService
      .entity({ UserName: name })
      .query((q) =>
        q.expand(({ e, t }) =>
          e()
            .field(t.Photo)
            .field(t.Trips)
            .field(t.Friends, (f) => {
              f.levels(2);
            })
        ),
      )
      .fetch()
      .subscribe(({ entity, annots }) => {
        console.log(entity, annots);
        this.person.set(entity ?? null);
        if (entity !== null && entity.Photo) {
          this.photosService.entity(entity.Photo).media().fetchBlob().subscribe(console.log);
        }
        this.display.set(true);
      });
  }
}
