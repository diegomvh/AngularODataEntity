import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  Model,
  ModelField,
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryArgumentsOptions,
  ODataFunctionOptions,
  ODataActionOptions,
  Duration,
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { LocationModel } from './location.model';
import { EventLocation } from './eventlocation.complex';
import { EventLocationCollection } from './eventlocation.collection';
//#endregion

@Model()
export class EventLocationModel<E extends EventLocation> extends LocationModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  BuildingInfo?: string;
  public $$BuildingInfo() {
    return this.property<string>('BuildingInfo');
  }
  public $BuildingInfo() {
    return this.getAttribute<string>('BuildingInfo') as string;
  }
  
  public BuildingInfo$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('BuildingInfo', options) as Observable<string>;
  }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}