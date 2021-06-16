import { Component } from '@angular/core';
import { ODataServiceFactory, ODataClient, ODataSettings } from 'angular-odata';
import { PeopleService, Airport, Person, PersonGender, Photo, PhotosService, PersonCollection, PersonModel, PersonGenderConfig } from './trippin';
import { OrdersService } from './northwind';
import { filter, switchMap } from 'rxjs/operators';
import { DefaultContainerService } from './trippin';
import { ProductsService } from './north3';
import { of } from 'rxjs';
import { PersonConfig } from 'projects/angular-odata/projects/angular-odata/src/lib/trippin.spec';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private odata: ODataClient,
    private odataSettings: ODataSettings,
    private factory: ODataServiceFactory,
    private api: DefaultContainerService,
    private people: PeopleService,
    private photos: PhotosService,
    private products: ProductsService,
    private orders: OrdersService
  ) {
    this.trippin();
    this.northwind();
  }

  //#region APIs
  trippin() {
    this.api.callResetDataSource().subscribe(() => {
      //this.queries();
      //this.mutate();
      this.trippinModels();
      //this.filterPeopleByGender();
    });
  }

  northwind() {
    this.northwindModels();
  }
  //#endregion

  queries() {
    this.entitiesWithoutTypes();
    this.entitiesWithTypes();
    this.navigation();
    this.property();
    this.batch();
  }

  entitiesWithoutTypes() {
    // Use OData Service Factory
    // Remove Schema from TripPin Config
    let airportsService = this.factory.entitySet<Airport>("Airports");
    let peopleService = this.factory.entitySet<Person>("People");

    let person = peopleService.entities();
    let airports = airportsService.entities();

    person.fetchAll().subscribe(console.log);
    airports.fetchAll().subscribe(console.log);
  }

  entitiesWithTypes() {
    // Use OData Service Factory
    let airportsService = this.factory.entitySet<Airport>("Airports", 'Microsoft.OData.SampleService.Models.TripPin.Airport');
    let peopleService = this.factory.entitySet<Person>("People", 'Microsoft.OData.SampleService.Models.TripPin.Person');

    let airports = airportsService.entities();

    console.log(airportsService.entities());

    // Fetch all airports
    airports
    .fetchAll()
    .subscribe(aports => console.log("All: ", aports));

    this.products.entities()
    .get({withCount: true, fetchPolicy: 'cache-only'})
    .subscribe(
      ({entities, annots}) => {console.log(entities)},
      (err) => console.log(err)
    );

    // Fetch airports with count
    airports
    .get({withCount: true})
    .subscribe(({entities, annots}) => console.log("Airports: ", entities, "Annotations: ", annots));

    // Fetch airport with key
    airports
    .entity("CYYZ").get()
    .pipe(switchMap(() => airports.entity("CYYZ").get({fetchPolicy: 'cache-first'}))) // From Cache!
    .subscribe(({entity, annots}) => console.log("Airport: ", entity, "Annotations: ", annots));

    // Filter airports (inmutable resource)
    airports
    .filter({Location: {City: {CountryRegion: "United States"}}})
    .get()
    .subscribe(({entities, annots}) => console.log("Airports of United States: ", entities, "Annotations: ", annots));

    // Add filter (mutable resource)
    airports.query.filter().push({Location: {City: {Region: "California"}}});
    airports
    .get()
    .subscribe(({entities, annots}) => console.log("Airports in California: ", entities, "Annotations: ", annots));

    console.log(airports.toJSON());
    console.log(this.odata.fromJSON(airports.toJSON()));

    // Remove filter (mutable resource)
    airports.query.filter().clear();
    airports
    .get()
    .subscribe(({entities, annots}) => console.log("Airports: ", entities, "Annotations: ", annots));

    let people = peopleService.entities();

    // Expand (inmutable resource)
    people.expand({
      Friends: {
        expand: { Friends: { select: ['AddressInfo']}}
      },
      Trips: { select: ['Name', 'Tags'] },
    })
    .get({withCount: true})
    .subscribe(({entities, annots}) => console.log("People with Friends and Trips: ", entities, "Annotations: ", annots));

    console.log(people.toJSON());
    console.log(this.odata.fromJSON(people.toJSON()));

    this.odata.batch("TripPin").post(batch => {
      console.log(batch);
      people.get().subscribe(console.log);
      airports.get().subscribe(console.log);
    }).subscribe();
  }

  filterPeopleByGender() {
    let personGenderType = this.odataSettings.enumTypeByName<PersonGender>(PersonGenderConfig.name);
    let female = personGenderType.encode(PersonGender.Female);
    let femaleQuery = this.people.entities().filter({Gender: female});
    console.log(`${femaleQuery}`);
    femaleQuery.fetchAll().subscribe(console.log);
  }

  navigation() {
    // Create service without Type for Person entity
    let peopleService = this.factory.entitySet<Person>("People", "TripPin");
    let person = peopleService.entity("scottketchum");
    person.get().subscribe(({entity, annots}) => console.log(annots.property('Emails')));

    let friends = person.navigationProperty<Person>("Friends");
    // Use TripPin config
    friends.get({responseType: 'entities'}).subscribe(console.log);
  }

  property() {
    // Create Service with Type
    let peopleService = this.factory.entitySet<Person>("People", 'Microsoft.OData.SampleService.Models.TripPin.Person');
    let person = peopleService.entity("scottketchum");
    person.property<string[]>("Emails").fetch().subscribe(console.log)
    person.property<Person[]>("Friends").fetch().subscribe(console.log)

    // Person locations
    let locations = person.property<Location[]>("AddressInfo");
    locations.fetch().subscribe(console.log);

    // Person gender
    let gender = person.property<PersonGender>("Gender");
    gender.fetch().subscribe(console.log);
    gender.value().fetch().subscribe(console.log);

    // Person name
    let name = person.property<string>("UserName");
    name.fetch().subscribe(console.log);
    name.value().fetch().subscribe(console.log);

    // Person photo
    let photo = person.navigationProperty<Photo>("Photo");
    photo.fetchEntity().subscribe(console.log);
    photo.value().fetchArraybuffer().subscribe(console.log);
    photo.value().fetchBlob().subscribe(console.log);
    let photoName = photo.property<string>("Name");
    photoName.fetch().subscribe(console.log);

    name.value().fetch().subscribe(console.log);
  }

  mutate() {
    this.createPerson();
    this.makeReferences();
  }

  createPerson() {
    const odata = this.people.api.options.helper;
    // Use Person Service
    this.people.create({
      Emails: ['some@email.com'],
      UserName: 'diegomvh',
      Gender: PersonGender.Male,
      FirstName: 'Diego',
      LastName: 'van Haaster'
    }).pipe(
      switchMap((person) => {
        // etag
        return (person !== null) ?
          this.people.assign(person, {UserName: person.UserName, Gender: PersonGender.Female}) : of(person)
      })
    ).subscribe((person) => {
      //New etag
      if (person !== null) {
        console.log(odata.etag(person))
      }
    });
  }

  makeReferences() {
    let photo = this.photos.entity(1); // Photo with id=1
    let scott = this.people.entity("scottketchum"); // Entity resource
    let photoOfScott = scott.navigationProperty<Photo>("Photo");
    // Set Reference
    photoOfScott.reference().set(photo).subscribe(console.log); // Set is a shortcut for .put()
    // Unset reference
    photoOfScott.reference().unset().subscribe(console.log); // Unset the foto of scott

    let diego = this.people.entity("diegomvh"); // Entity resource
    // Add Friend
    scott.navigationProperty<Person>("Friends")
      .reference()
      .add(diego)   // Add is a shortcut for .post()
      .subscribe(console.log);
    // Remove Friend
    scott.navigationProperty<Person>("Firends")
      .reference()
      .remove(diego)
      .subscribe(console.log);
  }

  batch() {
    let batch = this.odata.batch();
  }

  trippinModels() {
    const people = this.people.personCollection();
    people.fetch().pipe(switchMap(people => {
      const person = people.models()[2];
      person.Gender = PersonGender.Female;
      return person.save();
    }),
    switchMap(person => {
      return (person.Friends as PersonCollection<Person, PersonModel<Person>>).fetch();
    })
    ).subscribe(console.log);
  }

  trippinModelsEvents() {
    const gender = PersonModel.meta.fields().find(f => f.name === "Gender");
    const people = this.people.personCollection();

    people.events$.pipe(filter(e => e.name === "sync")).subscribe(e => console.log(people));
    people.events$.pipe(filter(e => e.name === "attach")).subscribe(e => people.fetch().toPromise());
    people.query(q => {
      q.filter({Gender: gender?.encode(PersonGender.Female)});
    });
  }

  northwindModels() {
    const orders = this.orders.orderCollection();
    orders.fetch().pipe(switchMap(orders => {
      const order = orders.models()[1];
      order.ShipPostalCode = "12345";
      return order.save();
    })).subscribe(console.log);
  }
}
