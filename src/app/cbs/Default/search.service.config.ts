//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SearchService } from './search.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const SearchServiceEntitySetConfig = {
  name: 'Search',
  entityType: 'CBS.Website.ODataApi.Models.SearchResultItem',
  service: SearchService
} as EntitySetConfig;
//#endregion