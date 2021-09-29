import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  ODataClient,
  ODataEntitySetService,
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
  ODataOptions,
  ODataQueryArgumentsOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TableInfo } from './tableinfo.entity';
import { TableInfoModel } from './tableinfo.model';
import { TableInfoCollection } from './tableinfo.collection';
//#endregion

@Injectable()
export class TableInfosService extends ODataEntitySetService<TableInfo> {
  constructor(protected client: ODataClient) {
    super(client, 'TableInfos', 'Cbs.OData.TableInfo');
  }
  //#region ODataApiGen Model
  tableInfoModel(attrs?: Partial<TableInfo>): TableInfoModel<TableInfo> {
    return this.entity().asModel<TableInfoModel<TableInfo>>(attrs || {});
  }//#endregion
  //#region ODataApiGen Collection
  tableInfoCollection(models?: Partial<TableInfo>[]): TableInfoCollection<TableInfo, TableInfoModel<TableInfo>> {
    return this.entities().asCollection<TableInfoModel<TableInfo>, TableInfoCollection<TableInfo, TableInfoModel<TableInfo>>>(models || []);
  }//#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}
