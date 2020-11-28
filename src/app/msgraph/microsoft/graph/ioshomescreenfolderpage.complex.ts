import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { IosHomeScreenApp } from './ioshomescreenapp.complex';
import { IosHomeScreenAppModel } from './ioshomescreenapp.model';
import { IosHomeScreenAppCollection } from './ioshomescreenapp.collection';
//#endregion

export interface IosHomeScreenFolderPage {
  //#region ODataApi Properties
  apps: IosHomeScreenApp[];
  displayName?: string;
  //#endregion
}