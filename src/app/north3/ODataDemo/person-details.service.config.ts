﻿//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PersonDetailsService } from './person-details.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const PersonDetailsServiceEntitySetConfig = {
  name: 'PersonDetails',
  entityType: 'ODataDemo.PersonDetail',
  service: PersonDetailsService
} as EntitySetConfig;
//#endregion