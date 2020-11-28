import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RecursoCreadoMetadata } from './recursocreadometadata.entity';
import { RecursoCreadoMetadataModel } from './recursocreadometadata.model';
import { RecursoCreadoMetadataCollection } from './recursocreadometadata.collection';
//#endregion

export const RecursoCreadoMetadataConfig = {
  name: "RecursoCreadoMetadata",
  base: "SIU.Recursos.RecursoEstadoMetadata",
  model: RecursoCreadoMetadataModel,
  collection: RecursoCreadoMetadataCollection,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<RecursoCreadoMetadata>;