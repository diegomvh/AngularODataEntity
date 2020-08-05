import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MobileApp } from './mobileapp.entity';
//#endregion

export const MobileAppConfig = {
  name: "MobileApp",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    description: {type: 'Edm.String'},
    publisher: {type: 'Edm.String'},
    largeIcon: {type: 'graph.mimeContent'},
    createdDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    isFeatured: {type: 'Edm.Boolean', nullable: false},
    privacyInformationUrl: {type: 'Edm.String'},
    informationUrl: {type: 'Edm.String'},
    owner: {type: 'Edm.String'},
    developer: {type: 'Edm.String'},
    notes: {type: 'Edm.String'},
    publishingState: {type: 'graph.mobileAppPublishingState', nullable: false},
    categories: {type: 'graph.mobileAppCategory', collection: true, navigation: true},
    assignments: {type: 'graph.mobileAppAssignment', collection: true, navigation: true}
  }
} as EntityConfig<MobileApp>;