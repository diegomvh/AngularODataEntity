import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PublicErrorDetail } from './publicerrordetail.entity';
import { PublicErrorDetailModel } from './publicerrordetail.model';
import { PublicErrorDetailCollection } from './publicerrordetail.collection';
//#endregion

export const PublicErrorDetailConfig = {
  name: "publicErrorDetail",
  model: PublicErrorDetailModel,
  collection: PublicErrorDetailCollection,
  annotations: [],
  fields: {
    code: {type: 'Edm.String'},
    message: {type: 'Edm.String'},
    target: {type: 'Edm.String'}
  }
} as EntityConfig<PublicErrorDetail>;