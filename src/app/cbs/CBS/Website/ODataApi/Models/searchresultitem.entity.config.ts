import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SearchResultItem } from './searchresultitem.entity';
//#endregion

export const SearchResultItemConfig = {
  name: "SearchResultItem",
  annotations: [],
  fields: {
    UniqueId: {type: 'Edm.String', key: true, ref: 'UniqueId', nullable: false},
    Type: {type: 'Edm.String'},
    Permalink: {type: 'Edm.String'},
    Title: {type: 'Edm.String'},
    ReleaseTime: {type: 'Edm.DateTimeOffset', nullable: false},
    Url: {type: 'Edm.String'},
    MetaDescription: {type: 'Edm.String'},
    Image: {type: 'Edm.String'},
    ImageAlt: {type: 'Edm.String'},
    Description: {type: 'Edm.String'},
    LeadText: {type: 'Edm.String'},
    Body: {type: 'Edm.String'},
    Snippet: {type: 'Edm.String'},
    Location: {type: 'Edm.String'},
    Language: {type: 'Edm.String'},
    Themes: {type: 'Edm.String', collection: true},
    TemplateName: {type: 'Edm.String'},
    ItemNameLowerCase: {type: 'Edm.String'},
    SortOrder: {type: 'Edm.Int32', nullable: false}
  }
} as EntityConfig<SearchResultItem>;