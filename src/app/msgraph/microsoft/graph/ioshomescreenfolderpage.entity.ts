import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { IosHomeScreenApp } from './ioshomescreenapp.entity';
//#endregion

export interface IosHomeScreenFolderPage {
  //#region ODataApi Properties
  displayName?: string;
  apps: IosHomeScreenApp[];
  //#endregion
}