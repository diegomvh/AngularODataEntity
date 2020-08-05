import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DirectoryObject } from './directoryobject.entity';
//#endregion

export interface Endpoint extends DirectoryObject {
  //#region ODataApi Properties
  capability: string;
  providerId?: string;
  providerName?: string;
  uri: string;
  providerResourceId?: string;
  //#endregion
}