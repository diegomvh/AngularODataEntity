import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Photo } from './photo.entity';
import { PlanItem } from './planitem.entity';
import { Trip } from './trip.entity';
import { PhotoModel } from './photo.model';
import { PlanItemModel } from './planitem.model';
import { PhotoCollection } from './photo.collection';
import { PlanItemCollection } from './planitem.collection';
import { TripCollection } from './trip.collection';
//#endregion

export class TripModel<E extends Trip> extends ODataModel<E> {
  //#region ODataApi Properties
  TripId!: number;
  ShareId?: string;
  Description?: string;
  Name!: string;
  Budget!: number;
  StartsAt!: Date;
  EndsAt!: Date;
  Tags!: string[];
  Photos?: PhotoCollection<Photo, PhotoModel<Photo>>;
  PlanItems?: PlanItemCollection<PlanItem, PlanItemModel<PlanItem>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}