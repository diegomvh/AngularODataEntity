import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { SearchHitsContainer } from './searchhitscontainer.complex';
import { SearchHitsContainerModel } from './searchhitscontainer.model';
import { SearchHitsContainerCollection } from './searchhitscontainer.collection';
//#endregion

export const SearchHitsContainerConfig = {
  name: "searchHitsContainer",
  model: SearchHitsContainerModel,
  collection: SearchHitsContainerCollection,
  annotations: [],
  fields: {
    hits: {type: 'graph.searchHit', collection: true},
    moreResultsAvailable: {type: 'Edm.Boolean'},
    total: {type: 'Edm.Int32'}
  }
} as StructuredTypeConfig<SearchHitsContainer>;