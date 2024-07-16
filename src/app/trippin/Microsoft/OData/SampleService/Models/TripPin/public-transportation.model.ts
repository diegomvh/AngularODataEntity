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
import { PlanItemModel } from './plan-item.model';
import { PublicTransportation } from './public-transportation.entity';
import { PublicTransportationCollection } from './public-transportation.collection';
//#endregion

@Model()
export class PublicTransportationModel<E extends PublicTransportation> extends PlanItemModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  SeatNumber?: string;
  public $$SeatNumber() {
    return this.property<string>('SeatNumber');
  }
  public $SeatNumber() {
    return this.getAttribute<string>('SeatNumber') as string;
  }
  
  public SeatNumber$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('SeatNumber', options) as Observable<string>;
  }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}