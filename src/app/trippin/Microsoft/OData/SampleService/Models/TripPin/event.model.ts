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
  public $$Description() {
    return this.property<string>('Description');
  }
  public $Description() {
    return this.getAttribute<string>('Description') as string;
  }
  
  public Description$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('Description', options) as Observable<string>;
  }
  @ModelField()
  OccursAt!: EventLocationModel<EventLocation>;
  public $$OccursAt() {
    return this.property<EventLocationModel<EventLocation>>('OccursAt');
  }
  public $OccursAt() {
    return this.getAttribute<EventLocationModel<EventLocation>>('OccursAt') as EventLocationModel<EventLocation>;
  }
  
  public OccursAt$(options?: ODataQueryArgumentsOptions<EventLocationModel<EventLocation>>) {
    return this.fetchAttribute<EventLocationModel<EventLocation>>('OccursAt', options) as Observable<EventLocationModel<EventLocation>>;
  }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}