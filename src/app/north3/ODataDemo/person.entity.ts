//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PersonDetail } from './person-detail.entity';
import { PersonDetailModel } from './person-detail.model';
import { PersonDetailCollection } from './person-detail.collection';
//#endregion

//#region ODataApiGen Type
export const PersonType = 'ODataDemo.Person';//#endregion
export interface Person {
  //#region ODataApiGen Properties
  ID: number;
  Name?: string;
  PersonDetail?: PersonDetail;
  //#endregion
}