import { ODataClient, ODataEntityAnnotations, ODataServiceFactory } from "angular-odata";
import { firstValueFrom } from "rxjs";
import { Airport } from "../../trip-pin";
import { Injector } from "@angular/core";

export default async (injector: Injector) => {
    const client = injector.get(ODataClient);
    const factory = injector.get(ODataServiceFactory);
    // Use OData Service Factory
    let airportsService = factory.entitySet<Airport>('Airports');
    let airports = airportsService.entities();

    let entities: Airport[] | null = null;
    let entity: Airport | null = null;
    let annots: ODataEntityAnnotations<Airport> | null = null;

    const tripPinApi = client.apiFor("TripPin");
    tripPinApi.cache.flush();

    // Fetch airport with key CYYZ
    // Fetch from the network and store in cache
    ({entity, annots} = await firstValueFrom(airports.entity('CYYZ').fetch({ fetchPolicy: 'network-only' })));
    console.log('CYYZ Airport: ', entity, 'Annotations: ', annots);

    // Fetch airport with key CYYZ
    // Fetch from the cache only 
    ({entity, annots} = await firstValueFrom(airports.entity('CYYZ').fetch({ fetchPolicy: 'cache-only' })));
    console.log('CYYZ Airport: ', entity, 'Annotations: ', annots);

    // Clear cache
    tripPinApi.cache.flush();

    try {
      // Fetch airport with key CYYZ
      // Fetch from the cache only
      // If the entity is not in the cache it throws an error
      ({entity, annots} = await firstValueFrom(airports.entity('CYYZ').fetch({ fetchPolicy: 'cache-only' })));
      console.log('CYYZ Airport: ', entity, 'Annotations: ', annots);
    } catch (e) {
      console.log(e);
    }

    tripPinApi.cache.flush();

    // Fetch airport with key CYYZ
    // Fetch first from cache
    // If the entity is not in the cache it will be returned from network and store in cache
    ({entity, annots} = await firstValueFrom(airports.entity('CYYZ').fetch({ fetchPolicy: 'cache-first' })));
    console.log('CYYZ Airport: ', entity, 'Annotations: ', annots);

    tripPinApi.cache.flush();

    // Fetch airport with key CYYZ
    // Fetch from network only and not store in cache 
    ({entity, annots} = await firstValueFrom(airports.entity('CYYZ').fetch({ fetchPolicy: 'no-cache' })));
    console.log('CYYZ Airport: ', entity, 'Annotations: ', annots);
    console.log("Cache Size After Fetch: ", tripPinApi.cache.entries.size);

    // Fetch airport with key CYYZ
    // Fetch from cache and then from network, 
    // If the entity is in the cache it will be returned from cache and then from network, sending two entities to subscribe
    // if the entity is not in the cache it will be returned from network and store in cache
    airports.entity('CYYZ').fetch({ fetchPolicy: 'cache-and-network' }).subscribe(({ entity, annots }) => {
      console.log('CYYZ Airport: ', entity, 'Annotations: ', annots);
    });
  }
