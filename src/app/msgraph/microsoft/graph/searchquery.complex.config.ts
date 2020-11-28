import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { SearchQuery } from './searchquery.complex';
import { SearchQueryModel } from './searchquery.model';
import { SearchQueryCollection } from './searchquery.collection';
//#endregion

export const SearchQueryConfig = {
  name: "searchQuery",
  model: SearchQueryModel,
  collection: SearchQueryCollection,
  annotations: [],
  fields: {
    queryString: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<SearchQuery>;