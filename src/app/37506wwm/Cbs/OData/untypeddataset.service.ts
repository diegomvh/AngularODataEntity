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
  HttpActionOptions,
  HttpFunctionOptions,
  HttpNavigationPropertyOptions
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { UData } from './udata.entity';
import { UDataModel } from './udata.model';
import { UDataCollection } from './udata.collection';
//#endregion

@Injectable()
export class UntypedDataSetService extends ODataEntitySetService<UData> {
  constructor(protected client: ODataClient) {
    super(client, 'UntypedDataSet', 'Cbs.OData.UData');
  }
  //#region ODataApi Model
  uDataModel(attrs?: Partial<UData>): UDataModel<UData> {
    return this.entity().asModel<UDataModel<UData>>(attrs || {});
  }//#endregion
  //#region ODataApi Collection
  uDataCollection(models?: Partial<UData>[]): UDataCollection<UData, UDataModel<UData>> {
    return this.entities().asCollection<UDataModel<UData>, UDataCollection<UData, UDataModel<UData>>>(models || []);
  }//#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
