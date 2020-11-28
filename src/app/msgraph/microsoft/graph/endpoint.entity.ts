import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DirectoryObject } from './directoryobject.entity';
import { DirectoryObjectModel } from './directoryobject.model';
import { DirectoryObjectCollection } from './directoryobject.collection';
//#endregion

export interface Endpoint extends DirectoryObject {
  //#region ODataApi Properties
  capability: string;
  providerId?: string;
  providerName?: string;
  providerResourceId?: string;
  uri: string;
  //#endregion
}