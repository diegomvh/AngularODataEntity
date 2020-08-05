import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DirectoryObject } from './directoryobject.entity';
//#endregion

export interface Contract extends DirectoryObject {
  //#region ODataApi Properties
  contractType?: string;
  customerId?: string;
  defaultDomainName?: string;
  displayName?: string;
  //#endregion
}