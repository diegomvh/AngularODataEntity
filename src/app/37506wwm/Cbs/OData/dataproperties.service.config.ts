//#region AngularOData Imports
import { 
  EntitySetConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { DataPropertiesService } from './dataproperties.service';
//#endregion

//#region ODataApi EntitySetConfig
export const DataPropertiesServiceEntitySetConfig = {
  name: "DataProperties",
  entityType: "Cbs.OData.DimensionOrTopic",
  service: DataPropertiesService
} as EntitySetConfig;
//#endregion