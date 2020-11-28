import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MobileAppIdentifier } from './mobileappidentifier.entity';
import { MobileAppIdentifierModel } from './mobileappidentifier.model';
import { MobileAppIdentifierCollection } from './mobileappidentifier.collection';
//#endregion

export interface IosMobileAppIdentifier extends MobileAppIdentifier {
  //#region ODataApi Properties
  bundleId: string;
  //#endregion
}