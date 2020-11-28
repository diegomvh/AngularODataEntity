import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ImplicitGrantSettings } from './implicitgrantsettings.complex';
import { ImplicitGrantSettingsModel } from './implicitgrantsettings.model';
import { ImplicitGrantSettingsCollection } from './implicitgrantsettings.collection';
//#endregion

export interface WebApplication {
  //#region ODataApi Properties
  homePageUrl?: string;
  implicitGrantSettings?: ImplicitGrantSettings;
  logoutUrl?: string;
  redirectUris: string[];
  //#endregion
}