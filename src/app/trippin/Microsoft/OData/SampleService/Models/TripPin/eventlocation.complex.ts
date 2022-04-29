//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Location } from './location.complex';
import { LocationModel } from './location.model';
import { LocationCollection } from './location.collection';
//#endregion

export interface EventLocation extends Location {
  //#region ODataApiGen Properties
  BuildingInfo?: string;
  //#endregion
}