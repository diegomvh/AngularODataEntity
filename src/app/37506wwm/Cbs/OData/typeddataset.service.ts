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
import { TData } from './tdata.entity';
import { TDataModel } from './tdata.model';
import { TDataCollection } from './tdata.collection';
//#endregion

@Injectable()
export class TypedDataSetService extends ODataEntitySetService<TData> {
  constructor(protected client: ODataClient) {
    super(client, 'TypedDataSet', 'Cbs.OData.TData');
  }
  //#region ODataApiGen Model
  tDataModel(attrs?: Partial<TData>): TDataModel<TData> {
    return this.entity().asModel<TDataModel<TData>>(attrs || {});
  }//#endregion
  //#region ODataApiGen Collection
  tDataCollection(models?: Partial<TData>[]): TDataCollection<TData, TDataModel<TData>> {
    return this.entities().asCollection<TDataModel<TData>, TDataCollection<TData, TDataModel<TData>>>(models || []);
  }//#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}
