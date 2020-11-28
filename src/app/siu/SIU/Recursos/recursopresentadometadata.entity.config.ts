import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RecursoPresentadoMetadata } from './recursopresentadometadata.entity';
import { RecursoPresentadoMetadataModel } from './recursopresentadometadata.model';
import { RecursoPresentadoMetadataCollection } from './recursopresentadometadata.collection';
//#endregion

export const RecursoPresentadoMetadataConfig = {
  name: "RecursoPresentadoMetadata",
  base: "SIU.Recursos.RecursoEstadoMetadata",
  model: RecursoPresentadoMetadataModel,
  collection: RecursoPresentadoMetadataCollection,
  annotations: [],
  fields: {
    fecha: {type: 'Edm.DateTimeOffset'},
    destinatarioId: {type: 'Edm.Int32'},
    destinatario: {type: 'Edm.String'},
    seguimiento: {type: 'Edm.String'}
  }
} as EntityConfig<RecursoPresentadoMetadata>;