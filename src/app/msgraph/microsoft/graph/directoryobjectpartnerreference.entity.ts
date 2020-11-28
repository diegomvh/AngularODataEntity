import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DirectoryObject } from './directoryobject.entity';
import { DirectoryObjectModel } from './directoryobject.model';
import { DirectoryObjectCollection } from './directoryobject.collection';
//#endregion

export interface DirectoryObjectPartnerReference extends DirectoryObject {
  //#region ODataApi Properties
  description?: string;
  displayName?: string;
  externalPartnerTenantId?: string;
  objectType?: string;
  //#endregion
}