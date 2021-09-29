//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TypedDataSetService } from './typeddataset.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const TypedDataSetServiceEntitySetConfig = {
  name: "TypedDataSet",
  entityType: "Cbs.OData.TData",
  service: TypedDataSetService
} as EntitySetConfig;
//#endregion