import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { TypedDataSetService } from './typeddataset.service';
//#endregion

//#region ODataApi EntitySetConfig
export const TypedDataSetServiceEntitySetConfig = {
  name: "TypedDataSet",
  entityType: "Cbs.OData.TData",
  service: TypedDataSetService
} as EntitySetConfig;
//#endregion