import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
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
  Expand, 
  Select,
  HttpOptions,
  HttpQueryOptions
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { TableInfo } from './tableinfo.entity';
import { TableInfoModel } from './tableinfo.model';
import { TableInfoCollection } from './tableinfo.collection';
//#endregion

@Injectable()
export class TableInfosService extends ODataEntitySetService<TableInfo> {
  constructor(protected client: ODataClient) {
    super(client, 'TableInfos', 'Cbs.OData.TableInfo');
  }
  //#region ODataApi Model
  tableInfoModel(attrs?: Partial<TableInfo>): TableInfoModel<TableInfo> {
    return this.entity().asModel<TableInfoModel<TableInfo>>(attrs || {});
  }//#endregion
  //#region ODataApi Collection
  tableInfoCollection(models?: Partial<TableInfo>[]): TableInfoCollection<TableInfo, TableInfoModel<TableInfo>> {
    return this.entities().asCollection<TableInfoModel<TableInfo>, TableInfoCollection<TableInfo, TableInfoModel<TableInfo>>>(models || []);
  }//#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
