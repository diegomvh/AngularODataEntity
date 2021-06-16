//#region AngularOData Imports
import { 
  EntitySetConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { PersonsService } from './persons.service';
//#endregion

//#region ODataApi EntitySetConfig
export const PersonsServiceEntitySetConfig = {
  name: "Persons",
  entityType: "ODataDemo.Person",
  service: PersonsService
} as EntitySetConfig;
//#endregion