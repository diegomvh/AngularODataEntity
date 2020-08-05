import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DirectoryObject } from './directoryobject.entity';
//#endregion

export const DirectoryObjectConfig = {
  name: "DirectoryObject",
  base: "microsoft.graph.entity",
  open: true,
  annotations: [],
  fields: {
    deletedDateTime: {type: 'Edm.DateTimeOffset'}
  }
} as EntityConfig<DirectoryObject>;