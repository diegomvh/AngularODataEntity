import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SiteCollection } from './sitecollection.entity';
//#endregion

export const SiteCollectionConfig = {
  name: "siteCollection",
  annotations: [],
  fields: {
    dataLocationCode: {type: 'Edm.String'},
    hostname: {type: 'Edm.String'},
    root: {type: 'graph.root'}
  }
} as EntityConfig<SiteCollection>;