import { PeopleService, PersonGender } from "../../trip-pin";
import { Injector } from "@angular/core";

async function usingPeopleServiceForGroupingByGenders(injector: Injector) {
  const peopleService = injector.get(PeopleService);

  const genders = peopleService.entities().transform<{ Gender: PersonGender }>(({ e, t }) => e().groupBy((e) => [t.Gender]));
  genders.fetch().subscribe(console.log);
}

export default async (injector: Injector) => {
  await usingPeopleServiceForGroupingByGenders(injector);
}
