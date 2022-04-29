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
import { EventLocation } from './eventlocation.complex';
import { Event } from './event.entity';
import { EventLocationModel } from './eventlocation.model';
import { EventLocationCollection } from './eventlocation.collection';
import { EventCollection } from './event.collection';
//#endregion

@Model()
export class EventModel<E extends Event> extends PlanItemModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  Description?: string;
  public $Description() {
    return this.property<string>('Description');
  }
  public getDescription(options?: ODataOptions) {
    return this.getValue<string>('Description', options) as Observable<string>;
  }
  
  @ModelField()
  OccursAt!: EventLocationModel<EventLocation>;
  public $OccursAt() {
    return this.property<EventLocationModel<EventLocation>>('OccursAt');
  }
  public getOccursAt(options?: ODataOptions) {
    return this.getValue<EventLocationModel<EventLocation>>('OccursAt', options) as Observable<EventLocationModel<EventLocation>>;
  }
  
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}