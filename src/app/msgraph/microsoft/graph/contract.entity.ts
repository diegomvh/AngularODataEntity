import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DirectoryObject } from './directoryobject.entity';
import { DirectoryObjectModel } from './directoryobject.model';
import { DirectoryObjectCollection } from './directoryobject.collection';
//#endregion

export interface Contract extends DirectoryObject {
  //#region ODataApi Properties
  contractType?: string;
  customerId?: string;
  defaultDomainName?: string;
  displayName?: string;
  //#endregion
}