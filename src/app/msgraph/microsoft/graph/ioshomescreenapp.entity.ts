import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { IosHomeScreenItem } from './ioshomescreenitem.entity';
import { IosHomeScreenItemModel } from './ioshomescreenitem.model';
import { IosHomeScreenItemCollection } from './ioshomescreenitem.collection';
//#endregion

export interface IosHomeScreenApp extends IosHomeScreenItem {
  //#region ODataApi Properties
  bundleID: string;
  //#endregion
}