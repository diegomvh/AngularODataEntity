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
import { TData } from './tdata.entity';
import { TDataModel } from './tdata.model';
import { TDataCollection } from './tdata.collection';
//#endregion

@Injectable()
export class TypedDataSetService extends ODataEntityService<TData> {
  constructor(protected client: ODataClient) {
    super(client, 'TypedDataSet', 'Cbs.OData.TData');
  }

  //#region ODataApi Model
  tDataModel(attrs?: Partial<TData>): TDataModel<TData> {
    return this.entity().asModel(attrs || {}) as TDataModel<TData>;
  }
  //#endregion
  //#region ODataApi Collection
  tDataCollection(models?: Partial<TData>[]): TDataCollection<TData, TDataModel<TData>> {
    return this.entities().asCollection(models || []) as TDataCollection<TData, TDataModel<TData>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
