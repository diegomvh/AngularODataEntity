import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SearchResult } from './searchresult.entity';
//#endregion

export const SearchResultConfig = {
  name: "searchResult",
  annotations: [],
  fields: {
    onClickTelemetryUrl: {type: 'Edm.String'}
  }
} as EntityConfig<SearchResult>;