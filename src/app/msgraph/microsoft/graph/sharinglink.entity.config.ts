import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SharingLink } from './sharinglink.entity';
//#endregion

export const SharingLinkConfig = {
  name: "SharingLink",
  annotations: [],
  fields: {
    application: {type: 'graph.identity'},
    preventsDownload: {type: 'Edm.Boolean'},
    scope: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    webHtml: {type: 'Edm.String'},
    webUrl: {type: 'Edm.String'}
  }
} as EntityConfig<SharingLink>;