import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MobileApp } from './mobileapp.entity';
//#endregion

export interface WebApp extends MobileApp {
  //#region ODataApi Properties
  appUrl?: string;
  useManagedBrowser: boolean;
  //#endregion
}