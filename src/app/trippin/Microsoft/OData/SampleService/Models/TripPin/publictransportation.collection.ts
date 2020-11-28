﻿import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PlanItemCollection } from './planitem.collection';
import { PublicTransportation } from './publictransportation.entity';
import { PublicTransportationModel } from './publictransportation.model';
//#endregion

export class PublicTransportationCollection<E extends PublicTransportation, M extends PublicTransportationModel<E>> extends PlanItemCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}