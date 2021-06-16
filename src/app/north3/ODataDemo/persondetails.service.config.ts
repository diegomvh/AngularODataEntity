//#region AngularOData Imports
import { 
  EntitySetConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { PersonDetailsService } from './persondetails.service';
//#endregion

//#region ODataApi EntitySetConfig
export const PersonDetailsServiceEntitySetConfig = {
  name: "PersonDetails",
  entityType: "ODataDemo.PersonDetail",
  service: PersonDetailsService
} as EntitySetConfig;
//#endregion