import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MobileApp } from './mobileapp.entity';
import { MobileAppModel } from './mobileapp.model';
import { MobileAppCollection } from './mobileapp.collection';
//#endregion

export const MobileAppConfig = {
  name: "mobileApp",
  base: "microsoft.graph.entity",
  model: MobileAppModel,
  collection: MobileAppCollection,
  annotations: [],
  fields: {
    createdDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    description: {type: 'Edm.String'},
    developer: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    informationUrl: {type: 'Edm.String'},
    isFeatured: {type: 'Edm.Boolean', nullable: false},
    largeIcon: {type: 'graph.mimeContent'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    notes: {type: 'Edm.String'},
    owner: {type: 'Edm.String'},
    privacyInformationUrl: {type: 'Edm.String'},
    publisher: {type: 'Edm.String'},
    publishingState: {type: 'graph.mobileAppPublishingState', nullable: false},
    assignments: {type: 'graph.mobileAppAssignment', collection: true, navigation: true},
    categories: {type: 'graph.mobileAppCategory', collection: true, navigation: true}
  }
} as EntityConfig<MobileApp>;