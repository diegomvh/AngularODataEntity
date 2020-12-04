import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntityService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { CalendarEvent } from '../CBS/Website/ODataApi/Models/calendarevent.entity';
import { CalendarEventModel } from '../CBS/Website/ODataApi/Models/calendarevent.model';
import { CalendarEventCollection } from '../CBS/Website/ODataApi/Models/calendarevent.collection';
//#endregion

@Injectable()
export class EventsService extends ODataEntityService<CalendarEvent> {
  constructor(protected client: ODataClient) {
    super(client, 'Events', 'CBS.Website.ODataApi.Models.CalendarEvent');
  }

  //#region ODataApi Model
  calendarEventModel(attrs?: Partial<CalendarEvent>): CalendarEventModel<CalendarEvent> {
    return this.entity().asModel(attrs || {}) as CalendarEventModel<CalendarEvent>;
  }
  //#endregion
  //#region ODataApi Collection
  calendarEventCollection(models?: Partial<CalendarEvent>[]): CalendarEventCollection<CalendarEvent, CalendarEventModel<CalendarEvent>> {
    return this.entities().asCollection(models || []) as CalendarEventCollection<CalendarEvent, CalendarEventModel<CalendarEvent>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
