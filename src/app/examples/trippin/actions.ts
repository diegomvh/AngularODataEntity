import { ODataClient } from "angular-odata";
import { firstValueFrom } from "rxjs";
import { PeopleService, Trip } from "../../trip-pin";
import { Injector } from "@angular/core";

const NAMESPACE = 'Microsoft.OData.SampleService.Models.TripPin';

async function usingPeopleServiceForCallingBoundAction(injector: Injector) {
  const peopleService = injector.get(PeopleService);
  const russell = peopleService.entity('russellwhyte');

  // Action bound to a Person: POST /People('russellwhyte')/NS.ShareTrip { userName, tripId }
  await firstValueFrom(
    russell
      .action<{ userName: string; tripId: number }, null>(`${NAMESPACE}.ShareTrip`)
      .call({ userName: 'scottketchum', tripId: 0 }, { responseType: 'none' })
  );

  // The shared trip is now part of Scott's trips
  const trips = await firstValueFrom(
    peopleService.entity('scottketchum').navigationProperty<Trip>('Trips').fetchEntities()
  );
  console.log('Scott Trips: ', trips);
}

async function usingClientForCallingUnboundAction(injector: Injector) {
  const client = injector.get(ODataClient);

  // Action import declared in the entity container: POST /ResetDataSource
  // Restores the TripPin session data to its original state
  await firstValueFrom(client.action<null, null>('ResetDataSource', 'TripPin').call(null, { responseType: 'none' }));
  console.log('Data source reset');
}

export default async (injector: Injector) => {
  await usingPeopleServiceForCallingBoundAction(injector);
  await usingClientForCallingUnboundAction(injector);
}
