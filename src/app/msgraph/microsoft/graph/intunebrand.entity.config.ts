import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IntuneBrand } from './intunebrand.entity';
import { IntuneBrandModel } from './intunebrand.model';
import { IntuneBrandCollection } from './intunebrand.collection';
//#endregion

export const IntuneBrandConfig = {
  name: "intuneBrand",
  model: IntuneBrandModel,
  collection: IntuneBrandCollection,
  annotations: [],
  fields: {
    contactITEmailAddress: {type: 'Edm.String'},
    contactITName: {type: 'Edm.String'},
    contactITNotes: {type: 'Edm.String'},
    contactITPhoneNumber: {type: 'Edm.String'},
    darkBackgroundLogo: {type: 'graph.mimeContent'},
    displayName: {type: 'Edm.String'},
    lightBackgroundLogo: {type: 'graph.mimeContent'},
    onlineSupportSiteName: {type: 'Edm.String'},
    onlineSupportSiteUrl: {type: 'Edm.String'},
    privacyUrl: {type: 'Edm.String'},
    showDisplayNameNextToLogo: {type: 'Edm.Boolean', nullable: false},
    showLogo: {type: 'Edm.Boolean', nullable: false},
    showNameNextToLogo: {type: 'Edm.Boolean', nullable: false},
    themeColor: {type: 'graph.rgbColor'}
  }
} as EntityConfig<IntuneBrand>;