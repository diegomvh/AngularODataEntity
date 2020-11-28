import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RecursoDiligenciadoMetadata } from './recursodiligenciadometadata.entity';
import { RecursoDiligenciadoMetadataModel } from './recursodiligenciadometadata.model';
import { RecursoDiligenciadoMetadataCollection } from './recursodiligenciadometadata.collection';
//#endregion

export const RecursoDiligenciadoMetadataConfig = {
  name: "RecursoDiligenciadoMetadata",
  base: "SIU.Recursos.RecursoEstadoMetadata",
  model: RecursoDiligenciadoMetadataModel,
  collection: RecursoDiligenciadoMetadataCollection,
  annotations: [],
  fields: {
    fecha: {type: 'Edm.DateTimeOffset'}
  }
} as EntityConfig<RecursoDiligenciadoMetadata>;