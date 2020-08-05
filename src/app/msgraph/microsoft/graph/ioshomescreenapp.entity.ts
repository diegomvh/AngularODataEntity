import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { IosHomeScreenItem } from './ioshomescreenitem.entity';
//#endregion

export interface IosHomeScreenApp extends IosHomeScreenItem {
  //#region ODataApi Properties
  bundleID: string;
  //#endregion
}