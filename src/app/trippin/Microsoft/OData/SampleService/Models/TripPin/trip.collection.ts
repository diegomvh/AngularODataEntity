import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Photo } from './photo.entity';
import { PlanItem } from './planitem.entity';
import { Trip } from './trip.entity';
import { PhotoModel } from './photo.model';
import { PlanItemModel } from './planitem.model';
import { TripModel } from './trip.model';
import { PhotoCollection } from './photo.collection';
import { PlanItemCollection } from './planitem.collection';
//#endregion

export class TripCollection<E extends Trip, M extends TripModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}