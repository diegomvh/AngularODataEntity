import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecipientModel } from './recipient.model';
import { AttendeeType } from './attendeetype.enum';
import { AttendeeBase } from './attendeebase.entity';
import { AttendeeBaseCollection } from './attendeebase.collection';
//#endregion

export class AttendeeBaseModel<E extends AttendeeBase> extends RecipientModel<E> {
  //#region ODataApi Properties
  type?: AttendeeType;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}