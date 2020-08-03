import { Component } from '@angular/core';
import { PeopleService, Person, PhotosService } from '../../trippin';

@Component({
  selector: 'trip-person',
  template: `<p-dialog [(visible)]="display">
    {{person | json}}
  </p-dialog>`,
})
export class PersonComponent {
  person: Person;
  display: boolean;

  constructor(
    private photos: PhotosService,
    private people: PeopleService
  ) { }

  show(name: string) {
    let person = this.people.entity({UserName: name})
    .expand({
      Friends: {orderBy: [["UserName", 'asc']]}, 
      Trips: {
        orderBy: ['StartsAt', ['Name', 'desc'], ['Description', 'asc']],
        expand: {
          Photos: {}, 
          PlanItems: {}
        }
      }, 
      Photo: {}
    })
    .get()
    .subscribe(({entity, meta}) => {
      console.log(entity, meta);
      this.person = entity;
      if (this.person.Photo) {
        this.photos
        .entity(this.person.Photo)
        .value()
        .blob()
        .subscribe(console.log);
      }
      this.display = true;
    });
  }
}