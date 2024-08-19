import { ODataEntitiesAnnotations, ODataServiceFactory } from "angular-odata";
import { firstValueFrom } from "rxjs";
import { Airport, Person } from "../../trip-pin";
import { Injector } from "@angular/core";

async function usingODataServiceFactoryForQueryingAirports(injector: Injector) {
  const factory = injector.get(ODataServiceFactory);
  // Use OData Service Factory
  let airportsService = factory.entitySet<Airport>('Airports');
  let airports = airportsService.entities();

  let entities: Airport[] | null = null;
  let entity: Airport | null = null;
  let annots: ODataEntitiesAnnotations<Airport> | null = null;

  // Fetch airports
  ({ entities } = await firstValueFrom(airports.fetch()));
  console.log('Airports: ', entities);

  // Fetch airports with count
  ({ entities, annots } = await firstValueFrom(airports.fetch({ withCount: true })));
  console.log('Airports: ', entities, 'Annotations: ', annots, 'Count: ', annots.count);

  // Fetch airports count
  const count = await firstValueFrom(airports.count().fetch());
  console.log('Airports Count: ', count);

  // Fetch one airport
  ({ entity, annots } = await firstValueFrom(airports.fetchOne()));
  console.log('One Airport: ', entity);

  // Fetch four airports
  ({ entities, annots } = await firstValueFrom(airports.fetchMany(4)));
  console.log('Four Airports: ', entities);

  // Fetch all airports
  ({ entities, annots } = await firstValueFrom(airports.fetchAll()));
  console.log('All Airports: ', entities);
}

async function usingODataServiceFactoryForFilteringAirports(injector: Injector) {
  const factory = injector.get(ODataServiceFactory);
  // Use OData Service Factory
  let airportsService = factory.entitySet<Airport>('Airports');
  let airports = airportsService.entities();

  let entities: Airport[] | null = null;
  let entity: Airport | null = null;
  let annots: ODataEntitiesAnnotations<Airport> | null = null;
  // Clone airports resource and filter new resource
  const unitedStatesAirports = airports.clone()
    .query((q) => q.filter(({ e, t }) => e().eq(t.Location.City.CountryRegion, 'United States')));
  ({ entities, annots } = await firstValueFrom(unitedStatesAirports.fetchAll()));
  console.log('United States Airports: ', entities);

  // Change query definition of airports resource and fetch again
  airports.query((q) =>
    q.filter(({ e, t }) => e().eq(t.Location.City.Region, 'California'))
  );
  ({ entities, annots } = await firstValueFrom(airports.fetchAll()));
  console.log('Airports in California: ', entities);

  // Clear previous filter and fetch again
  airports.query((q) => q.filter().clear());
  ({ entities, annots } = await firstValueFrom(airports.fetchAll()));
  console.log('Airports: ', entities);
}

async function usingODataServiceFactoryForFilteringPeople(injector: Injector) {
  const factory = injector.get(ODataServiceFactory);
  let peopleService = factory.entitySet<Person>('People');
  let people = peopleService.entities();

  let entities: Person[] | null = null;
  let annots: ODataEntitiesAnnotations<Person> | null = null;

  const peopleWithNameJohn = people.clone()
    .query(
      (q) =>
        q.filter(({ e, t }) =>
          e()
          .any(t.Emails, ({e, t}) => e().eq(t, 'Javier@contoso.com')).or(
            e().contains(t.UserName, 'javier')
          )
      )
    );
  ({ entities, annots } = await firstValueFrom(peopleWithNameJohn.fetchAll()));
  console.log( 'People with Name John: ', entities, 'Annotations: ', annots);
}


async function usingODataServiceFactoryForExpandingPeople(injector: Injector) {
  const factory = injector.get(ODataServiceFactory);
  let peopleService = factory.entitySet<Person>('People');
  let people = peopleService.entities();

  let entities: Person[] | null = null;
  let annots: ODataEntitiesAnnotations<Person> | null = null;

  const peopleWithFriendsAndTrips = people.clone()
    .query(
      (q) =>
        q.expand(({ e, t }) => e()
          .field(t.Friends, (f) => f.expand(({ e, t }) => e().field(t.Friends)))
          .field(t.Trips, (f) => f.select(({ e, t }) => e().fields('Name', 'Tags'))))
    );
  ({ entities, annots } = await firstValueFrom(peopleWithFriendsAndTrips.fetchAll()));
  console.log( 'People with Friends and Trips: ', entities, 'Annotations: ', annots);
}

export default async (injector: Injector) => {
  console.log("Querying Airports...");
  await usingODataServiceFactoryForQueryingAirports(injector);
  console.log("Filtering Airports...");
  await usingODataServiceFactoryForFilteringAirports(injector);
  console.log("Filtering People...");
  await usingODataServiceFactoryForFilteringPeople(injector);
  console.log("Expanding People...");
  await usingODataServiceFactoryForExpandingPeople(injector);
}
