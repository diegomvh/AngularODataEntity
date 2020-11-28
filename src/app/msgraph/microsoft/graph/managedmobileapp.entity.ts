import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { MobileAppIdentifier } from './mobileappidentifier.complex';
import { MobileAppIdentifierModel } from './mobileappidentifier.model';
import { EntityModel } from './entity.model';
import { MobileAppIdentifierCollection } from './mobileappidentifier.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface ManagedMobileApp extends Entity {
  //#region ODataApi Properties
  mobileAppIdentifier?: MobileAppIdentifier;
  version?: string;
  //#endregion
}