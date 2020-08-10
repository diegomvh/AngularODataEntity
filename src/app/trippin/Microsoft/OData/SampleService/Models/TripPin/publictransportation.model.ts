import { ODataModel, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PlanItemModel } from './planitem.model';
import { PublicTransportation } from './publictransportation.entity';
import { PublicTransportationCollection } from './publictransportation.collection';
//#endregion

export class PublicTransportationModel<E extends PublicTransportation> extends PlanItemModel<E> {
  //#region ODataApi Properties
  SeatNumber?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}