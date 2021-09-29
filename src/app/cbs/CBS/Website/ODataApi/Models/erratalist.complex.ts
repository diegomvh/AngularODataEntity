//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ErratumItem } from './erratumitem.complex';
import { ErratumItemModel } from './erratumitem.model';
import { ErratumItemCollection } from './erratumitem.collection';
//#endregion

export interface ErrataList {
  //#region ODataApiGen Properties
  Items?: ErratumItem[];
  //#endregion
}