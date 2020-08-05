import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { IosHomeScreenItem } from './ioshomescreenitem.entity';
//#endregion

export interface IosHomeScreenPage {
  //#region ODataApi Properties
  displayName?: string;
  icons: IosHomeScreenItem[];
  //#endregion
}