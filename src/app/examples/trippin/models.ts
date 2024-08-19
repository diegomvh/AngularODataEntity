import { PeopleService, PersonGender } from "../../trip-pin";
import { Injector } from "@angular/core";
import { firstValueFrom } from "rxjs";

export default async (injector: Injector) => {
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
