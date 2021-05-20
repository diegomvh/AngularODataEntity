import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { TableInfosService } from './tableinfos.service';
//#endregion

//#region ODataApi EntitySetConfig
export const TableInfosServiceEntitySetConfig = {
  name: "TableInfos",
  entityType: "Cbs.OData.TableInfo",
  service: TableInfosService
} as EntitySetConfig;
//#endregion