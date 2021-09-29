//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { UntypedDataSetService } from './untypeddataset.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const UntypedDataSetServiceEntitySetConfig = {
  name: "UntypedDataSet",
  entityType: "Cbs.OData.UData",
  service: UntypedDataSetService
} as EntitySetConfig;
//#endregion