//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TableInfosService } from './tableinfos.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const TableInfosServiceEntitySetConfig = {
  name: "TableInfos",
  entityType: "Cbs.OData.TableInfo",
  service: TableInfosService
} as EntitySetConfig;
//#endregion