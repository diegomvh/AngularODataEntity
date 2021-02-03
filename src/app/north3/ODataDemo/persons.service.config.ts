import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { PersonsService } from './persons.service';
//#endregion

//#region ODataApi EntitySetConfig
export const PersonsServiceEntitySetConfig = {
  name: "Persons",
  entityType: "ODataDemo.Person",
  service: PersonsService,
  annotations: []
} as EntitySetConfig;
//#endregion