import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ContentTypeOrder } from './contenttypeorder.entity';
//#endregion

export const ContentTypeOrderConfig = {
  name: "ContentTypeOrder",
  annotations: [],
  fields: {
    default: {type: 'Edm.Boolean'},
    position: {type: 'Edm.Int32'}
  }
} as EntityConfig<ContentTypeOrder>;