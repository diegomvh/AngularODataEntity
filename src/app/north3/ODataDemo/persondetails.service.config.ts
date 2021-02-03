import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { PersonDetailsService } from './persondetails.service';
//#endregion

//#region ODataApi EntitySetConfig
export const PersonDetailsServiceEntitySetConfig = {
  name: "PersonDetails",
  entityType: "ODataDemo.PersonDetail",
  service: PersonDetailsService,
  annotations: []
} as EntitySetConfig;
//#endregion