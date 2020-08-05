import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DirectoryObject } from './directoryobject.entity';
//#endregion

export interface DirectoryObjectPartnerReference extends DirectoryObject {
  //#region ODataApi Properties
  description?: string;
  displayName?: string;
  externalPartnerTenantId?: string;
  objectType?: string;
  //#endregion
}