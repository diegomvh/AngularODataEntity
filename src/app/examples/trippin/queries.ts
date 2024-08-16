import { ODataEntitiesAnnotations, ODataServiceFactory } from "angular-odata";
import { firstValueFrom, switchMap } from "rxjs";
import { Airport, Person } from "../../trip-pin";
import { Injector } from "@angular/core";

export default async (injector: Injector) => {
    const factory = injector.get(ODataServiceFactory);
    // Use OData Service Factory
    let airportsService = factory.entitySet<Airport>('Airports');
    let airports = airportsService.entities();

    let entities: Airport[] | null = null;
    let entity: Airport | null = null;
    let annots: ODataEntitiesAnnotations<Airport> | null = null;

    // Fetch airports
    ({entities} = await firstValueFrom(airports.fetch()));
    console.log('Airports: ', entities);

    // Fetch airports with count
    ({entities, annots} = await firstValueFrom(airports.fetch({ withCount: true })));
    console.log('Airports: ', entities, 'Annotations: ', annots, 'Count: ', annots.count);

    // Fetch airports count
    const count = await firstValueFrom(airports.count().fetch());
    console.log('Airports Count: ', count);

    // Fetch one airport
    ({entity, annots} = await firstValueFrom(airports.fetchOne()));
    console.log('One Airport: ', entity);

    // Fetch four airports
    ({entities, annots} = await firstValueFrom(airports.fetchMany(4)));
    console.log('Four Airports: ', entities);

    // Fetch all airports
    ({entities, annots} = await firstValueFrom(airports.fetchAll()));
    console.log('All Airports: ', entities);

    // Clone airports resource and filter new resource
    const unitedStatesAirports = airports.clone()
      .query((q) => q.filter(({e, t}) => e().eq(t.Location.City.CountryRegion, 'United States')));
    ({entities, annots} = await firstValueFrom(unitedStatesAirports.fetchAll()));
    console.log('United States Airports: ', entities);

    // Change query definition of airports resource and fetch again
    const californiaAirports = airports.query((q) =>
      q.filter(({e, t}) => e().eq(t.Location.City.Region, 'California'))
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

    // Change query definition of airports resource and fetch again
    airports.query((q) => q.filter().clear());
    airports
      .fetch()
      .subscribe(({ entities, annots }) =>
        console.log('Airports: ', entities, 'Annotations: ', annots)
      );

    let peopleService = factory.entitySet<Person>('People');
    let people = peopleService.entities();

    // Clone people resource and expand and fetch
    people
      .clone()
      .query((q) =>
        q.expand(({e, t}) => 
          e()
            .field(t.Friends, (f) => {
              f.expand(({e, t}) => e().field(t.Friends));
            })
            .field(t.Trips, (f) => {
              f.select(({e, t}) => e().fields('Name', 'Tags'));
            })
      ))
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
        q.filter(({ e, t }) =>
          e()
            .contains(t.Emails, 'john@example.com').or(
              e().eq(t.UserName, 'john')
            )
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
  }
