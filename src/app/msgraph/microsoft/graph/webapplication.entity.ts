import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ImplicitGrantSettings } from './implicitgrantsettings.entity';
//#endregion

export interface WebApplication {
  //#region ODataApi Properties
  homePageUrl?: string;
  redirectUris: string[];
  logoutUrl?: string;
  implicitGrantSettings?: ImplicitGrantSettings;
  //#endregion
}