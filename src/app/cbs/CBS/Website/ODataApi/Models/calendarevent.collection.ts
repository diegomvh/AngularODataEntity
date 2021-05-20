﻿import { ODataModel, ODataCollection, HttpOptions, Expand, Select } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CalendarEvent } from './calendarevent.entity';
import { CalendarEventModel } from './calendarevent.model';
//#endregion

export class CalendarEventCollection<E extends CalendarEvent, M extends CalendarEventModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}