import { ODataClient, ODataFunctionResource } from "angular-odata";
import { firstValueFrom } from "rxjs";
import { Airline, Airport, PeopleService, Person, Trip } from "../../trip-pin";
import { Injector } from "@angular/core";

const NAMESPACE = 'Microsoft.OData.SampleService.Models.TripPin';

async function usingClientForCallingUnboundFunction(injector: Injector) {
  const client = injector.get(ODataClient);

  // Function import declared in the entity container: GET /GetNearestAirport(lat=...,lon=...)
  const getNearestAirport = client.function<{ lat: number; lon: number }, Airport>('GetNearestAirport', 'TripPin');
  const airport = await firstValueFrom(getNearestAirport.callEntity({ lat: 33, lon: -118 }));
  console.log('Nearest Airport: ', airport);
}

async function usingPeopleServiceForCallingBoundFunctions(injector: Injector) {
  const peopleService = injector.get(PeopleService);
  const russell = peopleService.entity('russellwhyte');

  // Function bound to a Person: GET /People('russellwhyte')/NS.GetFavoriteAirline()
  const airline = await firstValueFrom(
    russell.function<null, Airline>(`${NAMESPACE}.GetFavoriteAirline`).callEntity(null)
  );
  console.log('Favorite Airline: ', airline);

  // Function with parameters returning a collection: GET /People('russellwhyte')/NS.GetFriendsTrips(userName='...')
  const trips = await firstValueFrom(
    russell
      .function<{ userName: string }, Trip>(`${NAMESPACE}.GetFriendsTrips`)
      .callEntities({ userName: 'ronaldmundy' })
  );
  console.log('Friends Trips: ', trips);
}

async function usingNavigationForCallingFunctionBoundToTrip(injector: Injector) {
  const peopleService = injector.get(PeopleService);

  // Navigate to a trip and call a function bound to it: GET /People('russellwhyte')/Trips(0)/NS.GetInvolvedPeople()
  const trip = peopleService.entity('russellwhyte').navigationProperty<Trip>('Trips').key(0);
  const involved = await firstValueFrom(
    ODataFunctionResource.fromResource<null, Person>(trip, `${NAMESPACE}.GetInvolvedPeople`).callEntities(null)
  );
  console.log('People Involved in Trip: ', involved);
}

export default async (injector: Injector) => {
  await usingClientForCallingUnboundFunction(injector);
  await usingPeopleServiceForCallingBoundFunctions(injector);
  await usingNavigationForCallingFunctionBoundToTrip(injector);
}
