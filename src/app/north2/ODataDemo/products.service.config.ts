//#region AngularOData Imports
import { 
  EntitySetConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { ProductsService } from './products.service';
//#endregion

//#region ODataApi EntitySetConfig
export const ProductsServiceEntitySetConfig = {
  name: "Products",
  entityType: "ODataDemo.Product",
  service: ProductsService
} as EntitySetConfig;
//#endregion