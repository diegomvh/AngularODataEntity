import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DirectoryObject } from './directoryobject.entity';
import { DirectoryObjectModel } from './directoryobject.model';
import { DirectoryObjectCollection } from './directoryobject.collection';
//#endregion

export const DirectoryObjectConfig = {
  name: "directoryObject",
  base: "microsoft.graph.entity",
  open: true,
  model: DirectoryObjectModel,
  collection: DirectoryObjectCollection,
  annotations: [],
  fields: {
    deletedDateTime: {type: 'Edm.DateTimeOffset'}
  }
} as StructuredTypeConfig<DirectoryObject>;