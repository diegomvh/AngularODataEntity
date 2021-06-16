//#region AngularOData Imports
import { 
  EntitySetConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { UntypedDataSetService } from './untypeddataset.service';
//#endregion

//#region ODataApi EntitySetConfig
export const UntypedDataSetServiceEntitySetConfig = {
  name: "UntypedDataSet",
  entityType: "Cbs.OData.UData",
  service: UntypedDataSetService
} as EntitySetConfig;
//#endregion