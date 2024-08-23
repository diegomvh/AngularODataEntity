import { AirportsService, PeopleService, PersonGender } from "../../trip-pin";
import { Injector } from "@angular/core";
import { firstValueFrom } from "rxjs";

async function usingPeopleServiceForChangingGender(injector: Injector) {
  const peopleService = injector.get(PeopleService);

  const scott = peopleService.model({UserName: 'scottketchum'});
  await firstValueFrom(scott.fetch());
  console.log('Scott: ', scott.Gender);
  // Change gender
  scott.Gender = PersonGender.Female;
  // Save changes
  await firstValueFrom(scott.save());
  console.log('Scott: ', scott.Gender);
}

async function usingAirportsServiceForFetching(injector: Injector) {
  const airportsService = injector.get(AirportsService);

  const airports = airportsService.collection();
  await firstValueFrom(airports.fetch());
  console.log('Airports: ', airports.models());
}

async function usingPeopleServiceForFetchingWithFriends(injector: Injector) {
  const peopleService = injector.get(PeopleService);

  const scott = peopleService.model({UserName: 'scottketchum'});
  scott.query(q => q.expand(({e, t}) => e().field(t.Friends)));
  await firstValueFrom(scott.fetch());
  console.log('Scott Friends: ', scott.Friends);
}

export default async (injector: Injector) => {
  await usingPeopleServiceForChangingGender(injector);
  await usingAirportsServiceForFetching(injector);
  await usingPeopleServiceForFetchingWithFriends(injector);
}
