import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RecursoEditadoMetadata } from './recursoeditadometadata.entity';
import { RecursoEditadoMetadataModel } from './recursoeditadometadata.model';
import { RecursoEditadoMetadataCollection } from './recursoeditadometadata.collection';
//#endregion

export const RecursoEditadoMetadataConfig = {
  name: "RecursoEditadoMetadata",
  base: "SIU.Recursos.RecursoEstadoMetadata",
  model: RecursoEditadoMetadataModel,
  collection: RecursoEditadoMetadataCollection,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<RecursoEditadoMetadata>;