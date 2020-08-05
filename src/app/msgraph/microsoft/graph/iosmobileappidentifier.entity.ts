import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MobileAppIdentifier } from './mobileappidentifier.entity';
//#endregion

export interface IosMobileAppIdentifier extends MobileAppIdentifier {
  //#region ODataApi Properties
  bundleId: string;
  //#endregion
}