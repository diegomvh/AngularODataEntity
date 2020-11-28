import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Address } from './address.entity';
import { Person } from './person.entity';
import { AddressModel } from './address.model';
import { PersonModel } from './person.model';
import { AddressCollection } from './address.collection';
import { PersonCollection } from './person.collection';
//#endregion

export interface PersonDetail {
  //#region ODataApi Properties
  PersonID: number;
  Age: number;
  Gender: boolean;
  Phone?: string;
  Address?: Address;
  Photo: any;
  Person?: Person;
  //#endregion
}