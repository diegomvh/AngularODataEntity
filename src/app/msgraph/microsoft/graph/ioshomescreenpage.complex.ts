import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { IosHomeScreenItem } from './ioshomescreenitem.complex';
import { IosHomeScreenItemModel } from './ioshomescreenitem.model';
import { IosHomeScreenItemCollection } from './ioshomescreenitem.collection';
//#endregion

export interface IosHomeScreenPage {
  //#region ODataApi Properties
  displayName?: string;
  icons: IosHomeScreenItem[];
  //#endregion
}