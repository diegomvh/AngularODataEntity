import { Component } from '@angular/core';
import {
  ODataServiceFactory,
  ODataClient,
  ODataSettings,
  ODataEntitySetResource,
  ODataModel,
  QueryOptionNames,
} from 'angular-odata';
import {
  PeopleService,
  Airport,
  Person,
  PersonGender,
  Photo,
  PhotosService,
  PersonGenderConfig,
  PersonCollection,
  PersonModel,
} from './trippin';
import { OrdersService, ProductCollection } from './northwind';
import { filter, switchMap, map } from 'rxjs/operators';
import { firstValueFrom, forkJoin } from 'rxjs';
import { DefaultContainerService } from './trippin';
import { ProductsService } from './north3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private odata: ODataClient,
    private odataSettings: ODataSettings,
    private factory: ODataServiceFactory,
    private api: DefaultContainerService,
    private peopleService: PeopleService,
    private photosService: PhotosService,
    private productsService: ProductsService,
    private ordersService: OrdersService
  ) {
    //this.encode();
    this.trippin();
    //this.northwind();
    //this.queries();
  }

  //#region APIs
  trippin() {
    //this.mutate();
    this.api.callResetDataSource().subscribe(() => {
      //this.queries();
      //this.query();
      this.trippinModels();
      //this.mutate();
      //this.northwindTypeModels();
      //this.uploadPhotos();
      //this.filterPeopleByGender();
    });
  }

  northwind() {
    this.northwindModels();
  }
  //#endregion

  encode() {
    // Edm Parser
    var guidParser = this.odataSettings.parserForType('Edm.Guid');
    var guid = guidParser.encode('12345678-1234-1234-1234-123456789012');
    console.log(guid);
    // Enum Parser
    let personGenderType = this.odataSettings.enumTypeByName<PersonGender>(
      PersonGenderConfig.name
    );
    let female = personGenderType.encode(PersonGender.Female);
    console.log(female);
    // Structured Parser
    let personSchema = this.peopleService.structuredTypeSchema;
    let male = personSchema
      ?.field('Gender')
      ?.enum()
      .encode(PersonGender.Male);
    console.log(male);
  }

  queries() {
    this.entitiesWithoutTypes();
    this.entitiesWithTypes();
    this.navigation();
    this.property();
    this.mediaEntity();
    this.batch();
  }

  entitiesWithoutTypes() {
    // Use OData Service Factory
    // Remove Schema from TripPin Config
    let airportsService = this.factory.entitySet<Airport>('Airports');
    let peopleService = this.factory.entitySet<Person>('People');

    let person = peopleService.entities();
    let airports = airportsService.entities();

    person.fetchAll().subscribe(console.log);
    airports.fetchAll().subscribe(console.log);
  }

  entitiesWithTypes() {
    // Use OData Service Factory
    let airportsService = this.factory.entitySet<Airport>(
      'Airports',
      'Microsoft.OData.SampleService.Models.TripPin.Airport'
    );
    let airports = airportsService.entities();

    // Fetch airports
    airports.fetch().subscribe(({ entities }) => {
      console.log('Airports: ', entities);
    });

    // Fetch airports with count
    airports
      .fetch({ withCount: true })
      .subscribe(({ entities, annots }) =>
        console.log('Airports: ', entities, 'Annotations: ', annots)
      );

    // Fetch all airports
    airports
      .fetchAll()
      .subscribe((airports) => console.log('All Airports: ', airports));

    // Fetch airport with key and fetch again from cache
    airports
      .entity('CYYZ')
      .fetch()
      .pipe(
        switchMap(() =>
          // From Cache!
          airports.entity('CYYZ').fetch({ fetchPolicy: 'cache-first' })
        )
      )
      .subscribe(({ entity, annots }) =>
        console.log('Airport: ', entity, 'Annotations: ', annots)
      );

    // Clone airports resource and filter new resource
    airports
      .clone()
      .query((q) =>
        q.filter({ Location: { City: { CountryRegion: 'United States' } } })
      )
      .fetch()
      .subscribe(({ entities, annots }) =>
        console.log(
          'Airports of United States: ',
          entities,
          'Annotations: ',
          annots
        )
      );

    // Change query definition of airports resource and fetch again
    airports.query((q) =>
      q.filter().push({ Location: { City: { Region: 'California' } } })
    );
    airports
      .fetch()
      .subscribe(({ entities, annots }) =>
        console.log(
          'Airports in California: ',
          entities,
          'Annotations: ',
          annots
        )
      );

    // Store airports resource
    var json = airports.toJSON();
    // Load airports resource
    airports = this.odata.fromJSON(json) as ODataEntitySetResource<Airport>;

    // Change query definition of airports resource and fetch again
    airports.query((q) => q.filter().clear());
    airports
      .fetch()
      .subscribe(({ entities, annots }) =>
        console.log('Airports: ', entities, 'Annotations: ', annots)
      );

    let peopleService = this.factory.entitySet<Person>(
      'People',
      'Microsoft.OData.SampleService.Models.TripPin.Person'
    );
    let people = peopleService.entities();

    // Clone people resource and expand and fetch
    people
      .clone()
      .query((q) =>
        q.expand({
          Friends: {
            expand: { Friends: { select: ['AddressInfo'] } },
          },
          Trips: { select: ['Name', 'Tags'] },
        })
      )
      .fetch({ withCount: true })
      .subscribe(({ entities, annots }) =>
        console.log(
          'People with Friends and Trips: ',
          entities,
          'Annotations: ',
          annots
        )
      );

    // Clone people resource and filter with expressions
    people
      .clone()
      .query((q) =>
        q.filter(({ e }) =>
          e().eq('Emails', 'john@example.com').or(e().eq('UserName', 'john'))
        )
      )
      .fetch()
      .subscribe(({ entities, annots }) =>
        console.log(
          'People with Friends and Trips: ',
          entities,
          'Annotations: ',
          annots
        )
      );

    this.odata
      .batch('TripPin')
      .exec(() =>
        forkJoin({
          airports: airports.fetch(),
          people: people.fetch({ withCount: true }),
        })
      )
      .subscribe();
  }

  filterPeopleByGender() {
    let personGenderType = this.odataSettings.enumTypeByName<PersonGender>(
      PersonGenderConfig.name
    );
    let female = personGenderType.encode(PersonGender.Female);
    let femaleQuery = this.peopleService
      .entities()
      .query((q) => q.filter({ Gender: female }));
    console.log(`${femaleQuery}`);
    femaleQuery.fetchAll().subscribe(console.log);
  }

  navigation() {
    // Create service without Type for Person entity
    let peopleService = this.factory.entitySet<Person>('People', 'TripPin');
    let person = peopleService.entity('scottketchum');
    person
      .fetch()
      .subscribe(({ entity, annots }) =>
        console.log(annots.property('Emails'))
      );

    let friends = person.navigationProperty<Person>('Friends');
    // Use TripPin config
    friends.fetch({ responseType: 'entities' }).subscribe(console.log);
  }

  property() {
    // Create Service with Type
    let peopleService = this.factory.entitySet<Person>(
      'People',
      'Microsoft.OData.SampleService.Models.TripPin.Person'
    );
    let person = peopleService.entity('scottketchum');
    person.property<string[]>('Emails').fetch().subscribe(console.log);
    person.property<Person[]>('Friends').fetch().subscribe(console.log);

    // Person locations
    let locations = person.property<Location[]>('AddressInfo');
    locations.fetch().subscribe(console.log);

    // Person gender
    let gender = person.property<PersonGender>('Gender');
    gender.fetch().subscribe(console.log);
    gender.value().fetch().subscribe(console.log);

    // Person name
    let name = person.property<string>('UserName');
    name.fetch().subscribe(console.log);
    name.value().fetch().subscribe(console.log);

    // Person photo
    let photo = person.navigationProperty<Photo>('Photo');
    photo.fetchEntity().subscribe(console.log);
    photo.media().fetchArraybuffer().subscribe(console.log);
    photo.media().fetchBlob().subscribe(console.log);
    let photoName = photo.property<string>('Name');
    photoName.fetch().subscribe(console.log);

    name.value().fetch().subscribe(console.log);
  }

  async mediaEntity() {
    let photos = this.factory.entitySet<Photo>(
      'Photos',
      'Microsoft.OData.SampleService.Models.TripPin.Photo'
    );
    for (var photo of await firstValueFrom(photos.entities().fetchAll())) {
      photos.entity(photo).media().fetchArraybuffer().subscribe(console.log);
      photos.entity(photo).media().fetchBlob().subscribe(console.log);
    }
  }

  async uploadPhotos() {
    let photos = this.factory.entitySet<Photo>(
      'Photos',
      'Microsoft.OData.SampleService.Models.TripPin.Photo'
    );
    for (var photo of await firstValueFrom(photos.entities().fetchAll())) {
      let image = await firstValueFrom(photos.entity(photo).media().fetchBlob());
      console.log(image.type);
      let res = await firstValueFrom(photos.entity(photo).media().upload(image));
      console.log(res);
    }
  }

  mutate() {
    this.personCRUD();
    //this.makeReferences();
  }

  async personCRUD() {
    let etag;

    // Service With Parser From Factory
    const serviceWithParser = this.factory.entitySet<Person>(
      'People',
      'TripPin'
    );
    //Or Use PersonsService Injected
    //const serviceWithParser = this.peopleService;

    // Use Person Typed Service
    // Create Person
    let person = await firstValueFrom(serviceWithParser
      .create({
        Emails: ['some@email.com'],
        UserName: 'someuser',
        Gender: PersonGender.Male,
        FirstName: 'Some',
        LastName: 'User',
      })
      .pipe(
        map(({ entity, annots }) => {
          etag = annots.etag;
          return entity;
        })
      ));
    console.log(person, etag);

    // Retrieve Person
    person = await firstValueFrom(serviceWithParser
      .fetchOne('someuser')
      .pipe(
        map(({ entity, annots }) => {
          etag = annots.etag;
          return entity;
        })
      ));
    console.log(person, etag);

    if (person !== null) {
      // Update Person
      person.Emails?.push('other@email.com');
      await firstValueFrom(serviceWithParser
        .update('someuser', person, { etag })
        .pipe(
          map(({ entity, annots }) => {
            etag = annots.etag;
            return entity;
          })
        ));
    }
    console.log(person, etag);

    if (person !== null) {
      // Patch Person
      await firstValueFrom(serviceWithParser
        .modify('someuser', { LastName: 'LastName' }, { etag })
        .pipe(
          map(({ entity, annots }) => {
            etag = annots.etag;
            return entity;
          })
        ));
    }
    console.log(person, etag);

    // Retrieve Person
    person = await firstValueFrom(serviceWithParser
      .fetchOne('someuser', { etag })
      .pipe(
        map(({ entity, annots }) => {
          etag = annots.etag;
          return entity;
        })
      ));
    console.log('Fetch', person, etag);

    // Delete Person
    person = await firstValueFrom(serviceWithParser.destroy('someuser', { etag }));
    console.log(person);
  }

  makeReferences() {
    let photo = this.photosService.entity(1); // Photo with id=1
    let scott = this.peopleService.entity('scottketchum'); // Entity resource
    let photoOfScott = scott.navigationProperty<Photo>('Photo');
    // Set Reference
    photoOfScott.reference().set(photo).subscribe(console.log); // Set is a shortcut for .put()
    // Unset reference
    photoOfScott.reference().unset().subscribe(console.log); // Unset the foto of scott

    let diego = this.peopleService.entity('diegomvh'); // Entity resource
    // Add Friend
    scott
      .navigationProperty<Person>('Friends')
      .reference()
      .add(diego) // Add is a shortcut for .post()
      .subscribe(console.log);
    // Remove Friend
    scott
      .navigationProperty<Person>('Firends')
      .reference()
      .remove(diego)
      .subscribe(console.log);
  }

  batch() {
    let batch = this.odata.batch();
  }

  query() {
    this.peopleService
      .entities()
      .query(q => q.select('Emails'))
      .fetchAll()
      .subscribe(console.log);
  }

  trippinModels() {
    const people = this.peopleService.entities().asCollection<PersonModel<Person>, PersonCollection<Person, PersonModel<Person>>>();
    //const people = this.peopleService.personCollection();
    people.query((q) => q.expand({ Friends: {}, Trips: {} }));
    people
      .fetch()
      .pipe(
        switchMap((people: any) => {
          const person = people.models()[2];
          person.Gender = PersonGender.Female;
          return person.save();
        }),
        switchMap((person: any) => {
          return person.Friends.fetch();
        })
      )
      .subscribe(console.log);
  }
  
  northwindTypeModels() {
    const collection = new ProductCollection();
    collection.query((q) => q.expand({ Category: {} }));
    collection
      .fetch()
      .subscribe((collection) => {
        const product1 = collection.models()[1];
        const product2 = collection.models()[2];
        product1.events$.subscribe(console.log);
        product2.events$.subscribe(console.log);
        console.log(product1);
        console.log(product2);
        product1.Category = product2.Category;
      });
  }

  trippinModelsEvents() {
    //const gender = PersonModel.meta.fields().find((f) => f.name === 'Gender');
    const people = this.peopleService.entities().asCollection();

    people.events$
      .pipe(filter((e) => e.name === 'sync'))
      .subscribe((e) => console.log(people));
    people.events$
      .pipe(filter((e) => e.name === 'attach'))
      .subscribe((e) => firstValueFrom(people.fetch()));
    people.query((q: any) => {
      q.filter({ Gender: PersonGender.Female });
    });
  }

  northwindModels() {
    const orders = this.ordersService.orderCollection();
    orders
      .fetch()
      .pipe(
        switchMap((orders) => {
          const order = orders.models()[1];
          order.ShipPostalCode = '12345';
          return order.save();
        })
      )
      .subscribe(console.log);
  }
}
