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
  Duration,
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PlanItemModel } from './planitem.model';
import { PublicTransportation } from './publictransportation.entity';
import { PublicTransportationCollection } from './publictransportation.collection';
//#endregion

@Model()
export class PublicTransportationModel<E extends PublicTransportation> extends PlanItemModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  SeatNumber?: string;
  public $SeatNumber() {
    return this.property<string>('SeatNumber');
  }
  public getSeatNumber(options?: ODataOptions) {
    return this.getValue<string>('SeatNumber', options) as Observable<string>;
  }
  
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}