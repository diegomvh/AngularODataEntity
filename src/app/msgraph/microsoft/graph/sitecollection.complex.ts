import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Root } from './root.complex';
import { RootModel } from './root.model';
import { RootCollection } from './root.collection';
//#endregion

export interface SiteCollection {
  //#region ODataApi Properties
  dataLocationCode?: string;
  hostname?: string;
  root?: Root;
  //#endregion
}