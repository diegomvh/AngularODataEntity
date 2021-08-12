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
import { TData } from './tdata.entity';
import { TDataModel } from './tdata.model';
import { TDataCollection } from './tdata.collection';
//#endregion

@Injectable()
export class TypedDataSetService extends ODataEntitySetService<TData> {
  constructor(protected client: ODataClient) {
    super(client, 'TypedDataSet', 'Cbs.OData.TData');
  }
  //#region ODataApi Model
  tDataModel(attrs?: Partial<TData>): TDataModel<TData> {
    return this.entity().asModel<TDataModel<TData>>(attrs || {});
  }//#endregion
  //#region ODataApi Collection
  tDataCollection(models?: Partial<TData>[]): TDataCollection<TData, TDataModel<TData>> {
    return this.entities().asCollection<TDataModel<TData>, TDataCollection<TData, TDataModel<TData>>>(models || []);
  }//#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
