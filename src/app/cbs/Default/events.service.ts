import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  ODataClient,
  ODataEntitySetService,
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
  ODataOptions,
  ODataQueryArgumentsOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CalendarEvent } from '../CBS/Website/ODataApi/Models/calendarevent.entity';
import { CalendarEventModel } from '../CBS/Website/ODataApi/Models/calendarevent.model';
import { CalendarEventCollection } from '../CBS/Website/ODataApi/Models/calendarevent.collection';
//#endregion

@Injectable()
export class EventsService extends ODataEntitySetService<CalendarEvent> {
  constructor(client: ODataClient) {
    super(client, 'Events', 'CBS.Website.ODataApi.Models.CalendarEvent');
  }
  //#region ODataApiGen Model
  calendarEventModel(attrs?: Partial<CalendarEvent>): CalendarEventModel<CalendarEvent> {
    return this.entity().asModel<CalendarEventModel<CalendarEvent>>(attrs || {});
  }//#endregion
  //#region ODataApiGen Collection
  calendarEventCollection(models?: Partial<CalendarEvent>[]): CalendarEventCollection<CalendarEvent, CalendarEventModel<CalendarEvent>> {
    return this.entities().asCollection<CalendarEventModel<CalendarEvent>, CalendarEventCollection<CalendarEvent, CalendarEventModel<CalendarEvent>>>(models || []);
  }//#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}
