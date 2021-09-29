//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PersonDetail } from './persondetail.entity';
import { PersonDetailModel } from './persondetail.model';
import { PersonDetailCollection } from './persondetail.collection';
//#endregion

export interface Person {
  //#region ODataApiGen Properties
  ID: number;
  Name?: string;
  PersonDetail?: PersonDetail;
  //#endregion
}