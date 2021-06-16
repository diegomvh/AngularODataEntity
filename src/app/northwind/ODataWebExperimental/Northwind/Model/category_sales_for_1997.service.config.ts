//#region AngularOData Imports
import { 
  EntitySetConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { CategorySalesFor1997Service } from './category_sales_for_1997.service';
//#endregion

//#region ODataApi EntitySetConfig
export const CategorySalesFor1997ServiceEntitySetConfig = {
  name: "Category_Sales_for_1997",
  entityType: "NorthwindModel.Category_Sales_for_1997",
  service: CategorySalesFor1997Service
} as EntitySetConfig;
//#endregion