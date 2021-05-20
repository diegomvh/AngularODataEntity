import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { SearchResultItem } from './searchresultitem.entity';
import { SearchResultItemModel } from './searchresultitem.model';
import { SearchResultItemCollection } from './searchresultitem.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const SearchResultItemEntityConfig = {
  name: "SearchResultItem",
  model: SearchResultItemModel,
  collection: SearchResultItemCollection,
  keys: [{ref: 'UniqueId'}],
  fields: {
    UniqueId: {type: 'Edm.String', nullable: false},
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
} as StructuredTypeConfig<SearchResultItem>;
//#endregion