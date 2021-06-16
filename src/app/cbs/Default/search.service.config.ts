//#region AngularOData Imports
import { 
  EntitySetConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { SearchService } from './search.service';
//#endregion

//#region ODataApi EntitySetConfig
export const SearchServiceEntitySetConfig = {
  name: "Search",
  entityType: "CBS.Website.ODataApi.Models.SearchResultItem",
  service: SearchService
} as EntitySetConfig;
//#endregion