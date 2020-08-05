import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Flash } from './flash.entity';
//#endregion

export const FlashConfig = {
  name: "Flash",
  annotations: [],
  fields: {
    UniqueId: {type: 'Edm.String', key: true, ref: 'UniqueId', nullable: false},
    Title: {type: 'Edm.String'},
    ReleaseTime: {type: 'Edm.DateTimeOffset', nullable: false},
    Description: {type: 'Edm.String'},
    LeadText: {type: 'Edm.String'},
    Url: {type: 'Edm.String'},
    MetaDescription: {type: 'Edm.String'},
    Language: {type: 'Edm.String'},
    Version: {type: 'Edm.Int32', nullable: false},
    SortOrder: {type: 'Edm.Int32', nullable: false},
    ItemNameLowerCase: {type: 'Edm.String'},
    Updated: {type: 'Edm.DateTimeOffset', nullable: false},
    Created: {type: 'Edm.DateTimeOffset', nullable: false}
  }
} as EntityConfig<Flash>;