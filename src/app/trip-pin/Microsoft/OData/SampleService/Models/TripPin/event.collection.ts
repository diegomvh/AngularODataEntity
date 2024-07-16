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
import { PlanItemCollection } from './plan-item.collection';
import { EventLocation } from './event-location.complex';
import { Event } from './event.entity';
import { EventLocationModel } from './event-location.model';
import { EventModel } from './event.model';
import { EventLocationCollection } from './event-location.collection';
//#endregion

export class EventCollection<E extends Event, M extends EventModel<E>> extends PlanItemCollection<E, M> {
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
}