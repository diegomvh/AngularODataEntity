import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { SearchHit } from './searchhit.complex';
import { SearchHitModel } from './searchhit.model';
import { SearchHitCollection } from './searchhit.collection';
//#endregion

export const SearchHitConfig = {
  name: "searchHit",
  model: SearchHitModel,
  collection: SearchHitCollection,
  annotations: [],
  fields: {
    contentSource: {type: 'Edm.String'},
    hitId: {type: 'Edm.String'},
    rank: {type: 'Edm.Int32'},
    summary: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<SearchHit>;