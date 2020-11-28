import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { SearchRequest } from './searchrequest.complex';
import { SearchRequestModel } from './searchrequest.model';
import { SearchRequestCollection } from './searchrequest.collection';
//#endregion

export const SearchRequestConfig = {
  name: "searchRequest",
  model: SearchRequestModel,
  collection: SearchRequestCollection,
  annotations: [],
  fields: {
    contentSources: {type: 'Edm.String', collection: true},
    enableTopResults: {type: 'Edm.Boolean'},
    entityTypes: {type: 'graph.entityType', collection: true},
    fields: {type: 'Edm.String', collection: true},
    from: {type: 'Edm.Int32', nullable: false},
    query: {type: 'graph.searchQuery', nullable: false},
    size: {type: 'Edm.Int32', nullable: false}
  }
} as StructuredTypeConfig<SearchRequest>;