import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SharingDetail } from './sharingdetail.entity';
import { SharingDetailModel } from './sharingdetail.model';
import { SharingDetailCollection } from './sharingdetail.collection';
//#endregion

export const SharingDetailConfig = {
  name: "sharingDetail",
  model: SharingDetailModel,
  collection: SharingDetailCollection,
  annotations: [],
  fields: {
    sharedBy: {type: 'graph.insightIdentity'},
    sharedDateTime: {type: 'Edm.DateTimeOffset'},
    sharingReference: {type: 'graph.resourceReference'},
    sharingSubject: {type: 'Edm.String'},
    sharingType: {type: 'Edm.String'}
  }
} as EntityConfig<SharingDetail>;