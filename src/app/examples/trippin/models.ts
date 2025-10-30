import { AirportCollection, AirportsService, PeopleService, PersonGender, PersonModel } from "../../trip-pin";
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

async function usingAirportsCollectionForFetching(injector: Injector) {
  const airports = new AirportCollection();
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

async function usingPersonModelForFetchingWithFriendsAndChangeGender(injector: Injector) {
  const scott = new PersonModel({UserName: 'scottketchum'});
  scott.query(q => q.expand(({e, t}) => e().field(t.Friends)));
  await firstValueFrom(scott.fetch());
  const friend = scott.Friends?.first();
  if (friend) {
    // Change friend gender
    friend.Gender = PersonGender.Female;
    // Save changes
    // The friend is referred to through Scott
    console.log(friend.resource()?.toString());
    // Change the reference using the `asEntity` method
    await firstValueFrom(friend.asEntity(f => {
      console.log(f.resource()?.toString());
      return f.save(); 
    }));
  }
}

export default async (injector: Injector) => {
  await usingPeopleServiceForChangingGender(injector);
  await usingAirportsServiceForFetching(injector);
  await usingPeopleServiceForFetchingWithFriends(injector);
  await usingPersonModelForFetchingWithFriendsAndChangeGender(injector);
  await usingAirportsCollectionForFetching(injector);
}
