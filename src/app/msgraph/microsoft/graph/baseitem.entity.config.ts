import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { BaseItem } from './baseitem.entity';
//#endregion

export const BaseItemConfig = {
  name: "BaseItem",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    createdBy: {type: 'graph.identitySet'},
    createdDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    description: {type: 'Edm.String'},
    eTag: {type: 'Edm.String'},
    lastModifiedBy: {type: 'graph.identitySet'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    name: {type: 'Edm.String'},
    parentReference: {type: 'graph.itemReference'},
    webUrl: {type: 'Edm.String'},
    createdByUser: {type: 'graph.user', navigation: true},
    lastModifiedByUser: {type: 'graph.user', navigation: true}
  }
} as EntityConfig<BaseItem>;