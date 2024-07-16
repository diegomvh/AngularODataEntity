//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Address } from './address.complex';
import { Person } from './person.entity';
import { AddressModel } from './address.model';
import { PersonModel } from './person.model';
import { AddressCollection } from './address.collection';
import { PersonCollection } from './person.collection';
//#endregion

//#region ODataApiGen Type
export const PersonDetailType = 'ODataDemo.PersonDetail';//#endregion
export interface PersonDetail {
  //#region ODataApiGen Properties
  PersonID: number;
  Age: number;
  Gender: boolean;
  Phone?: string;
  Address?: Address;
  Photo: any;
  Person?: Person;
  //#endregion
}