import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Link } from './link.entity';
//#endregion

export interface LinkList {
  //#region ODataApi Properties
  Items?: Link[];
  //#endregion
}