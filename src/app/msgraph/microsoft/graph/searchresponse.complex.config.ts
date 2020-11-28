import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { SearchResponse } from './searchresponse.complex';
import { SearchResponseModel } from './searchresponse.model';
import { SearchResponseCollection } from './searchresponse.collection';
//#endregion

export const SearchResponseConfig = {
  name: "searchResponse",
  model: SearchResponseModel,
  collection: SearchResponseCollection,
  annotations: [],
  fields: {
    hitsContainers: {type: 'graph.searchHitsContainer', collection: true},
    searchTerms: {type: 'Edm.String', collection: true}
  }
} as StructuredTypeConfig<SearchResponse>;