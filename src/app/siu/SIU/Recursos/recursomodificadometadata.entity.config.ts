import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RecursoModificadoMetadata } from './recursomodificadometadata.entity';
import { RecursoModificadoMetadataModel } from './recursomodificadometadata.model';
import { RecursoModificadoMetadataCollection } from './recursomodificadometadata.collection';
//#endregion

export const RecursoModificadoMetadataConfig = {
  name: "RecursoModificadoMetadata",
  base: "SIU.Recursos.RecursoEstadoMetadata",
  model: RecursoModificadoMetadataModel,
  collection: RecursoModificadoMetadataCollection,
  annotations: [],
  fields: {
    changes: {type: 'SIU.Recursos.RecursoChange', collection: true},
    url: {type: 'Edm.String'},
    changesUrl: {type: 'Edm.String'},
    serverVersion: {type: 'Edm.String'}
  }
} as EntityConfig<RecursoModificadoMetadata>;