import { Component } from '@angular/core';
import { PeopleService, Person, PhotosService } from '../trippin';
import { ODataClient, ODataEntityAnnotations } from 'angular-odata';

@Component({
  selector: 'trip-person',
  template: `<p-dialog [visible]="display">
  </p-dialog>`,
})
export class PersonComponent {
  person: Person;
  display: boolean;

  constructor(
    private odata: ODataClient,
    private photos: PhotosService,
    private people: PeopleService
  ) { 
  }

  show(name: string) {
    let person = this.people.entity({UserName: name});
    person.expand({Friends: {}, Trips: {expand: {Photos: {}, PlanItems: {}}}, Photo: {}});
    person.get()
      .subscribe(([person, annots]) => {
        this.person = person;
        if (person.Photo) {
          let pannots = ODataEntityAnnotations.factory(person.Photo);
          let media = this.photos.entity(person.Photo).media();
          media.blob().subscribe(console.log);
        }
        this.display = true;
      });
  }
}