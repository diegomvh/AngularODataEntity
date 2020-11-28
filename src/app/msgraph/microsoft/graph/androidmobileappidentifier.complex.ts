import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MobileAppIdentifier } from './mobileappidentifier.complex';
import { MobileAppIdentifierModel } from './mobileappidentifier.model';
import { MobileAppIdentifierCollection } from './mobileappidentifier.collection';
//#endregion

export interface AndroidMobileAppIdentifier extends MobileAppIdentifier {
  //#region ODataApi Properties
  packageId: string;
  //#endregion
}