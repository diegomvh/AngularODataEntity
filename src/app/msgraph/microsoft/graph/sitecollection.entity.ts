import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Root } from './root.entity';
//#endregion

export interface SiteCollection {
  //#region ODataApi Properties
  dataLocationCode?: string;
  hostname?: string;
  root?: Root;
  //#endregion
}