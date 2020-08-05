import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Website } from './website.entity';
//#endregion

export const WebsiteConfig = {
  name: "website",
  annotations: [],
  fields: {
    type: {type: 'graph.websiteType'},
    address: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'}
  }
} as EntityConfig<Website>;