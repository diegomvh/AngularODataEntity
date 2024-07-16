import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryArgumentsOptions,
  ODataFunctionOptions,
  ODataActionOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Photo } from './photo.entity';
import { PlanItem } from './plan-item.entity';
import { Trip } from './trip.entity';
import { PhotoModel } from './photo.model';
import { PlanItemModel } from './plan-item.model';
import { TripModel } from './trip.model';
import { PhotoCollection } from './photo.collection';
import { PlanItemCollection } from './plan-item.collection';
//#endregion

export class TripCollection<E extends Trip, M extends TripModel<E>> extends ODataCollection<E, M> {
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
}