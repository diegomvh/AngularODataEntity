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
import { UData } from './udata.entity';
import { UDataModel } from './udata.model';
import { UDataCollection } from './udata.collection';
//#endregion

@Injectable()
export class UntypedDataSetService extends ODataEntitySetService<UData> {
  constructor(protected client: ODataClient) {
    super(client, 'UntypedDataSet', 'Cbs.OData.UData');
  }
  //#region ODataApiGen Model
  uDataModel(attrs?: Partial<UData>): UDataModel<UData> {
    return this.entity().asModel<UDataModel<UData>>(attrs || {});
  }//#endregion
  //#region ODataApiGen Collection
  uDataCollection(models?: Partial<UData>[]): UDataCollection<UData, UDataModel<UData>> {
    return this.entities().asCollection<UDataModel<UData>, UDataCollection<UData, UDataModel<UData>>>(models || []);
  }//#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}
