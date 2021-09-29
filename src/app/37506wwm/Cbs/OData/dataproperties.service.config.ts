//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DataPropertiesService } from './dataproperties.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const DataPropertiesServiceEntitySetConfig = {
  name: "DataProperties",
  entityType: "Cbs.OData.DimensionOrTopic",
  service: DataPropertiesService
} as EntitySetConfig;
//#endregion