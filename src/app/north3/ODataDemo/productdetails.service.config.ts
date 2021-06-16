//#region AngularOData Imports
import { 
  EntitySetConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { ProductDetailsService } from './productdetails.service';
//#endregion

//#region ODataApi EntitySetConfig
export const ProductDetailsServiceEntitySetConfig = {
  name: "ProductDetails",
  entityType: "ODataDemo.ProductDetail",
  service: ProductDetailsService
} as EntitySetConfig;
//#endregion