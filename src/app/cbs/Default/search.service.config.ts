import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { SearchService } from './search.service';
//#endregion

//#region ODataApi EntitySetConfig
export const SearchServiceEntitySetConfig = {
  name: "Search",
  entityType: "CBS.Website.ODataApi.Models.SearchResultItem",
  service: SearchService,
  annotations: []
} as EntitySetConfig;
//#endregion