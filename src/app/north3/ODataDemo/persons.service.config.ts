//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PersonsService } from './persons.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const PersonsServiceEntitySetConfig = {
  name: 'Persons',
  entityType: 'ODataDemo.Person',
  service: PersonsService
} as EntitySetConfig;
//#endregion