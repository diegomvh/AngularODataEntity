import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntityService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { TableInfo } from './tableinfo.entity';
import { TableInfoModel } from './tableinfo.model';
import { TableInfoCollection } from './tableinfo.collection';
//#endregion

@Injectable()
export class TableInfosService extends ODataEntityService<TableInfo> {
  constructor(protected client: ODataClient) {
    super(client, 'TableInfos', 'Cbs.OData.TableInfo');
  }

  //#region ODataApi Model
  tableInfoModel(attrs?: Partial<TableInfo>): TableInfoModel<TableInfo> {
    return this.entity().asModel(attrs || {}) as TableInfoModel<TableInfo>;
  }
  //#endregion
  //#region ODataApi Collection
  tableInfoCollection(models?: Partial<TableInfo>[]): TableInfoCollection<TableInfo, TableInfoModel<TableInfo>> {
    return this.entities().asCollection(models || []) as TableInfoCollection<TableInfo, TableInfoModel<TableInfo>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
