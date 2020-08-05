import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MobileAppIdentifier } from './mobileappidentifier.entity';
//#endregion

export interface AndroidMobileAppIdentifier extends MobileAppIdentifier {
  //#region ODataApi Properties
  packageId: string;
  //#endregion
}