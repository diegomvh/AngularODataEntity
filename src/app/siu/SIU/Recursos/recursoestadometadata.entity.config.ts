import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RecursoEstadoMetadata } from './recursoestadometadata.entity';
import { RecursoEstadoMetadataModel } from './recursoestadometadata.model';
import { RecursoEstadoMetadataCollection } from './recursoestadometadata.collection';
//#endregion

export const RecursoEstadoMetadataConfig = {
  name: "RecursoEstadoMetadata",
  model: RecursoEstadoMetadataModel,
  collection: RecursoEstadoMetadataCollection,
  annotations: [],
  fields: {
    version: {type: 'Edm.String'},
    key: {type: 'Edm.String'},
    accion: {type: 'SIU.Recursos.RecursoTipoAccion'},
    observacion: {type: 'Edm.String'}
  }
} as EntityConfig<RecursoEstadoMetadata>;