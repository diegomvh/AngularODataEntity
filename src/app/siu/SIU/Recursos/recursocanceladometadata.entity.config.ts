import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RecursoCanceladoMetadata } from './recursocanceladometadata.entity';
import { RecursoCanceladoMetadataModel } from './recursocanceladometadata.model';
import { RecursoCanceladoMetadataCollection } from './recursocanceladometadata.collection';
//#endregion

export const RecursoCanceladoMetadataConfig = {
  name: "RecursoCanceladoMetadata",
  base: "SIU.Recursos.RecursoEstadoMetadata",
  model: RecursoCanceladoMetadataModel,
  collection: RecursoCanceladoMetadataCollection,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<RecursoCanceladoMetadata>;