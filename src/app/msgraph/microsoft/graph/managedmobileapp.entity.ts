import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { MobileAppIdentifier } from './mobileappidentifier.entity';
//#endregion

export interface ManagedMobileApp extends Entity {
  //#region ODataApi Properties
  mobileAppIdentifier?: MobileAppIdentifier;
  version?: string;
  //#endregion
}