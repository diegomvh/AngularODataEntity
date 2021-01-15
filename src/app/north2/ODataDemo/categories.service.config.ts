import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { CategoriesService } from './categories.service';
//#endregion

//#region ODataApi EntitySetConfig
export const CategoriesConfig = {
  name: "Categories",
  entityType: "ODataDemo.Category",
  service: CategoriesService,
  annotations: []
} as EntitySetConfig;
//#endregion