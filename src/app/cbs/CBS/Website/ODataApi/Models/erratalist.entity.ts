import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ErratumItem } from './erratumitem.entity';
//#endregion

export interface ErrataList {
  //#region ODataApi Properties
  Items?: ErratumItem[];
  //#endregion
}