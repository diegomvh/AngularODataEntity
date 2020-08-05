import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SharingDetail } from './sharingdetail.entity';
//#endregion

export const SharingDetailConfig = {
  name: "sharingDetail",
  annotations: [],
  fields: {
    sharedBy: {type: 'graph.insightIdentity'},
    sharedDateTime: {type: 'Edm.DateTimeOffset'},
    sharingSubject: {type: 'Edm.String'},
    sharingType: {type: 'Edm.String'},
    sharingReference: {type: 'graph.resourceReference'}
  }
} as EntityConfig<SharingDetail>;