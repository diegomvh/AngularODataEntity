import { Component } from '@angular/core';
import { PeopleService, Person, PhotosService } from '../../trippin';

@Component({
  selector: 'trip-person',
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
        q.expand({
          Photo: {},
          Friends: { expand: { Emails: {} }, levels: 10 },
          Trips: {
            orderBy: ['Photos'],
            //orderBy: [['Name', 'desc']],
            expand: { Photos: {}, PlanItems: {} },
          },
        })
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
