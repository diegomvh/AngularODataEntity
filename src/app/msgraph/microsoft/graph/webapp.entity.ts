import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MobileApp } from './mobileapp.entity';
import { MobileAppModel } from './mobileapp.model';
import { MobileAppCollection } from './mobileapp.collection';
//#endregion

export interface WebApp extends MobileApp {
  //#region ODataApi Properties
  appUrl?: string;
  useManagedBrowser: boolean;
  //#endregion
}