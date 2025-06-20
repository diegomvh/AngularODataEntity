import { Component, Inject, Injector, INJECTOR } from "@angular/core";
import { EdmType, ODataClient, ODataServiceFactory } from "angular-odata";
import {
  Airport,
  DefaultContainerService,
  PeopleService,
  Person,
  PersonGender,
  PersonGenderEnumType,
  Photo,
  PhotosService,
  TripPinModule,
} from "./trip-pin";
import { NorthwindModule, OrdersService, ProductsService } from "./northwind";
import { filter, firstValueFrom, map, switchMap } from "rxjs";
import { TabViewModule } from "primeng/tabview";
import {
  AirlinesComponent,
  AirportsComponent,
  PeopleComponent,
} from "./components/trippin";
import {
  CategoriesComponent,
  EmployeesComponent,
  OrdersComponent,
  ProductsComponent,
} from "./components/northwind";
import { TableModule } from "primeng/table";
import trippinQueries from "./examples/trippin/queries";
import trippinCache from "./examples/trippin/cache";
import trippinJson from "./examples/trippin/json";
import trippinModels from "./examples/trippin/models";
import northwindCompute from "./examples/northwind/compute";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    TableModule,
    TabViewModule,
    TripPinModule,
    NorthwindModule,
    AirlinesComponent,
    AirportsComponent,
    PeopleComponent,
    CategoriesComponent,
    ProductsComponent,
    OrdersComponent,
    EmployeesComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  constructor(
    @Inject(INJECTOR) private injector: Injector,
    private client: ODataClient,
    private factory: ODataServiceFactory,
    private tripPinContainer: DefaultContainerService,
    private peopleService: PeopleService,
    private photosService: PhotosService,
    private productsService: ProductsService,
    private ordersService: OrdersService,
  ) {
    this.queries();
    //this.encode();
    //this.northwind();
    //this.queries();
  }

  //#region APIs
  trippin() {
    //this.mutate();
    //this.query();
    //this.trippinModels();
    //this.mutate();
    //this.northwindTypeModels();
    //this.uploadPhotos();
    //this.filterPeopleByGender();
  }

  northwind() {
    this.northwindModels();
  }
  //#endregion

  encode() {
    // Edm Parser
    var guidParser = this.client.parserForType(EdmType.Guid);
    var guid = guidParser.encode("12345678-1234-1234-1234-123456789012");
    console.log(guid);
    // Enum Parser
    let personGenderType =
      this.client.enumTypeForType<PersonGender>(PersonGenderEnumType);
    let female = personGenderType.encode(PersonGender.Female);
    console.log(female);
    // Structured Parser
    let personSchema = this.peopleService.structuredTypeSchema;
    let male = personSchema
      ?.field("Gender")
      ?.enumType()
      .encode(PersonGender.Male);
    console.log(male);
  }

  queries() {
    //this.entitiesWithoutTypes();
    //trippinCache(this.injector);
    //trippinJson(this.injector);
    //trippinQueries(this.injector);
    //trippinModels(this.injector);
    northwindCompute(this.injector);
    //this.navigation();
    //this.property();
    //this.mediaEntity();
    //this.aggregations();
    //this.batch();
    //this.microsoftGraph();
    //this.tripPinDynamic();
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

  filterPeopleByGender() {
    let personGenderType =
      this.client.enumTypeForType<PersonGender>(PersonGenderEnumType);
    let female = personGenderType.encode(PersonGender.Female);
    let femaleQuery = this.peopleService
      .entities()
      .query((q) => q.filter({ Gender: female }));
    console.log(`${femaleQuery}`);
    femaleQuery.fetchAll().subscribe(console.log);
  }

  navigation() {
    // Create service without Type for Person entity
    let peopleService = this.factory.entitySet<Person>("People", "TripPin");
    let person = peopleService.entity("scottketchum");
    person
      .fetch()
      .subscribe(({ entity, annots }) =>
        console.log(annots.property<Person>("Emails", "collection")),
      );

    let friends = person.navigationProperty<Person>("Friends");
    // Use TripPin config
    friends.fetch({ responseType: "entities" }).subscribe(console.log);
  }

  property() {
    // Create Service with Type
    let peopleService = this.factory.entitySet<Person>(
      "People",
      "Microsoft.OData.SampleService.Models.TripPin.Person",
    );
    let person = peopleService.entity("scottketchum");
    person.property<string[]>("Emails").fetch().subscribe(console.log);
    person.property<Person[]>("Friends").fetch().subscribe(console.log);

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
    photo.media().fetchArraybuffer().subscribe(console.log);
    photo.media().fetchBlob().subscribe(console.log);
    let photoName = photo.property<string>("Name");
    photoName.fetch().subscribe(console.log);

    name.value().fetch().subscribe(console.log);
  }

  async mediaEntity() {
    let photos = this.factory.entitySet<Photo>(
      "Photos",
      "Microsoft.OData.SampleService.Models.TripPin.Photo",
    );
    for (var photo of await firstValueFrom(
      photos
        .entities()
        .fetchAll()
        .pipe(map(({ entities }) => entities)),
    )) {
      photos.entity(photo).media().fetchArraybuffer().subscribe(console.log);
      photos.entity(photo).media().fetchBlob().subscribe(console.log);
    }
  }

  async uploadPhotos() {
    let photos = this.factory.entitySet<Photo>(
      "Photos",
      "Microsoft.OData.SampleService.Models.TripPin.Photo",
    );
    for (var photo of await firstValueFrom(
      photos
        .entities()
        .fetchAll()
        .pipe(map(({ entities }) => entities)),
    )) {
      let image = await firstValueFrom(
        photos.entity(photo).media().fetchBlob(),
      );
      console.log(image.type);
      let res = await firstValueFrom(
        photos.entity(photo).media().upload(image),
      );
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
      "People",
      "TripPin",
    );
    //Or Use PersonsService Injected
    //const serviceWithParser = this.peopleService;

    // Use Person Typed Service
    // Create Person
    let person = await firstValueFrom(
      serviceWithParser
        .create({
          Emails: ["some@email.com"],
          UserName: "someuser",
          Gender: PersonGender.Male,
          FirstName: "Some",
          LastName: "User",
        })
        .pipe(
          map(({ entity, annots }) => {
            etag = annots.etag;
            return entity;
          }),
        ),
    );
    console.log(person, etag);

    // Retrieve Person
    person = await firstValueFrom(
      serviceWithParser
        .entity("someuser")
        .fetch()
        .pipe(
          map(({ entity, annots }) => {
            etag = annots.etag;
            return entity;
          }),
        ),
    );
    console.log(person, etag);

    if (person !== null) {
      // Update Person
      person.Emails?.push("other@email.com");
      await firstValueFrom(
        serviceWithParser.update("someuser", person, { etag }).pipe(
          map(({ entity, annots }) => {
            etag = annots.etag;
            return entity;
          }),
        ),
      );
    }
    console.log(person, etag);

    if (person !== null) {
      // Patch Person
      await firstValueFrom(
        serviceWithParser
          .modify("someuser", { LastName: "LastName" }, { etag })
          .pipe(
            map(({ entity, annots }) => {
              etag = annots.etag;
              return entity;
            }),
          ),
      );
    }
    console.log(person, etag);

    // Retrieve Person
    person = await firstValueFrom(
      serviceWithParser
        .entity("someuser")
        .fetch({ etag })
        .pipe(
          map(({ entity, annots }) => {
            etag = annots.etag;
            return entity;
          }),
        ),
    );
    console.log("Fetch", person, etag);

    // Delete Person
    person = await firstValueFrom(
      serviceWithParser.destroy("someuser", { etag }),
    );
    console.log(person);
  }

  makeReferences() {
    let photo = this.photosService.entity(1); // Photo with id=1
    let scott = this.peopleService.entity("scottketchum"); // Entity resource
    let photoOfScott = scott.navigationProperty<Photo>("Photo");
    // Set Reference
    photoOfScott.reference().set(photo).subscribe(console.log); // Set is a shortcut for .put()
    // Unset reference
    photoOfScott.reference().unset().subscribe(console.log); // Unset the foto of scott

    let diego = this.peopleService.entity("diegomvh"); // Entity resource
    // Add Friend
    scott
      .navigationProperty<Person>("Friends")
      .reference()
      .add(diego) // Add is a shortcut for .post()
      .subscribe(console.log);
    // Remove Friend
    scott
      .navigationProperty<Person>("Firends")
      .reference()
      .remove(diego)
      .subscribe(console.log);
  }

  aggregations() {
    var genders = this.peopleService
      .entities()
      .transform<{
        Gender: PersonGender;
      }>(({ e, t }) => e().groupBy((e) => [t.Gender]));
    genders.fetch().subscribe(console.log);
  }

  batch() {
    let batch = this.client.batch();
  }

  microsoftGraph() {
    const api = this.client.apiFor("MicrosoftGraph");
    api
      .metadata()
      .fetch()
      .subscribe((metadata) => {
        console.log("ready");
        api.populate(metadata);
        (<any>window).METADATA = metadata;
        (<any>window).API = api;
      });
  }

  tripPinDynamic() {
    const api = this.client.apiFor("TripPinDynamic");
    api
      .metadata()
      .fetch()
      .subscribe((metadata) => {
        const username = metadata.Schemas.find(
          (s) => s.Namespace === "Microsoft.OData.SampleService.Models.TripPin",
        )
          ?.EntityType?.find((e) => e.Name === "Person")
          ?.Property?.find((p) => p.Name === "UserName");
        console.log(
          username?.Annotation?.find(
            (a) => a.Term === "Org.OData.Core.V1.Permissions",
          )?.EnumMember?.map((m: any) => m.text),
        );
        api.populate(metadata);
        const entitySet = api.entitySet<Person>("People");
        const schema = api.structuredType("Person");
        const person = entitySet.entity("scottketchum");
        person.query((q) =>
          q.expand(({ e, t }) =>
            e()
              .field(t.Trips, (f) =>
                f.expand(({ e, t }) => e().field(t.Photos)),
              )
              .field(t.Friends, (f) =>
                f.expand(({ e, t }) => e().field(t.Friends)),
              ),
          ),
        );
        person.fetchModel().subscribe(console.log);
      });
  }

  query() {
    this.peopleService
      .entities()
      .query((q) => q.select("Emails"))
      .fetchAll()
      .subscribe(console.log);
  }

  trippinModels() {
    const people = this.peopleService.entities().asCollection();
    //const people = this.peopleService.personCollection();
    people.query((q) => q.expand({ Friends: {}, Trips: {} }));
    people
      .fetch()
      .pipe(
        switchMap((models) => {
          const person = models[2];
          person.Gender = PersonGender.Female;
          return person.save();
        }),
        switchMap((person: any) => {
          return person.Friends.fetch();
        }),
      )
      .subscribe(console.log);
  }

  northwindTypeModels() {
    const collection = this.productsService.collection();
    collection.query((q) => q.expand({ Category: {} }));
    collection.fetch().subscribe((models) => {
      const product1 = models[1];
      const product2 = models[2];
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
      .pipe(filter((e) => e.type === "sync"))
      .subscribe((e) => console.log(people));
    people.events$
      .pipe(filter((e) => e.type === "attach"))
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
        switchMap((models) => {
          const order = models[1];
          order.ShipPostalCode = "12345";
          return order.save();
        }),
      )
      .subscribe(console.log);
  }
}
