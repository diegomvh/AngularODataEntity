import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ErratumItem } from './erratumitem.complex';
import { ErratumItemModel } from './erratumitem.model';
import { ErratumItemCollection } from './erratumitem.collection';
//#endregion

export interface ErrataList {
  //#region ODataApi Properties
  Items?: ErratumItem[];
  //#endregion
}