import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RecursoPreparadoMetadata } from './recursopreparadometadata.entity';
import { RecursoPreparadoMetadataModel } from './recursopreparadometadata.model';
import { RecursoPreparadoMetadataCollection } from './recursopreparadometadata.collection';
//#endregion

export const RecursoPreparadoMetadataConfig = {
  name: "RecursoPreparadoMetadata",
  base: "SIU.Recursos.RecursoEstadoMetadata",
  model: RecursoPreparadoMetadataModel,
  collection: RecursoPreparadoMetadataCollection,
  annotations: [],
  fields: {
    fecha: {type: 'Edm.DateTimeOffset'},
    identificador: {type: 'Edm.String'},
    firmanteId: {type: 'Edm.Int32'},
    firmante: {type: 'Edm.String'}
  }
} as EntityConfig<RecursoPreparadoMetadata>;