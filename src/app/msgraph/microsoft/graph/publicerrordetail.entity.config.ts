import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PublicErrorDetail } from './publicerrordetail.entity';
//#endregion

export const PublicErrorDetailConfig = {
  name: "PublicErrorDetail",
  annotations: [],
  fields: {
    code: {type: 'Edm.String'},
    message: {type: 'Edm.String'},
    target: {type: 'Edm.String'}
  }
} as EntityConfig<PublicErrorDetail>;