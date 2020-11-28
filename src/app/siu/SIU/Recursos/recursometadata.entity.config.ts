import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RecursoMetadata } from './recursometadata.entity';
import { RecursoMetadataModel } from './recursometadata.model';
import { RecursoMetadataCollection } from './recursometadata.collection';
//#endregion

export const RecursoMetadataConfig = {
  name: "RecursoMetadata",
  model: RecursoMetadataModel,
  collection: RecursoMetadataCollection,
  annotations: [],
  fields: {
    thumbnail: {type: 'Edm.String'}
  }
} as EntityConfig<RecursoMetadata>;