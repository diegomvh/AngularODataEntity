//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CategoriesService } from './categories.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const CategoriesServiceEntitySetConfig = {
  name: 'Categories',
  entityType: 'ODataDemo.Category',
  service: CategoriesService
} as EntitySetConfig;
//#endregion