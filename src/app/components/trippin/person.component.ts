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
    let person = this.people.entity({UserName: name});
    person.expand({
      Friends: {orderBy: [["UserName", 'asc']]}, 
      Trips: {
        orderBy: ['StartsAt', ['Name', 'desc'], ['Description', 'asc']],
        expand: {
          Photos: {}, 
          PlanItems: {}
        }
      }, 
      Photo: {}
    });
    person.get()
      .subscribe(([person, annots]) => {
        console.log(person, annots);
        this.person = person;
        if (person.Photo) {
          let media = this.photos.entity(person.Photo).value();
          media.blob().subscribe(console.log);
        }
        this.display = true;
      });
  }
}