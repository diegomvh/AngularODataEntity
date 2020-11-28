import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Site } from './site.entity';
import { SiteModel } from './site.model';
import { SiteCollection } from './site.collection';
//#endregion

export const SiteConfig = {
  name: "site",
  base: "microsoft.graph.baseItem",
  model: SiteModel,
  collection: SiteCollection,
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    error: {type: 'graph.publicError'},
    root: {type: 'graph.root'},
    sharepointIds: {type: 'graph.sharepointIds'},
    siteCollection: {type: 'graph.siteCollection'},
    analytics: {type: 'graph.itemAnalytics', navigation: true},
    columns: {type: 'graph.columnDefinition', collection: true, navigation: true},
    contentTypes: {type: 'graph.contentType', collection: true, navigation: true},
    drive: {type: 'graph.drive', navigation: true},
    drives: {type: 'graph.drive', collection: true, navigation: true},
    items: {type: 'graph.baseItem', collection: true, navigation: true},
    lists: {type: 'graph.list', collection: true, navigation: true},
    sites: {type: 'graph.site', collection: true, navigation: true},
    onenote: {type: 'graph.onenote', navigation: true}
  }
} as StructuredTypeConfig<Site>;