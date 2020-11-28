import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { SecurityResourceType } from './securityresourcetype.enum';
//#endregion

export interface SecurityResource {
  //#region ODataApi Properties
  resource?: string;
  resourceType?: SecurityResourceType;
  //#endregion
}