import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ContentTypeInfo } from './contenttypeinfo.entity';
//#endregion

export const ContentTypeInfoConfig = {
  name: "ContentTypeInfo",
  annotations: [],
  fields: {
    id: {type: 'Edm.String'},
    name: {type: 'Edm.String'}
  }
} as EntityConfig<ContentTypeInfo>;