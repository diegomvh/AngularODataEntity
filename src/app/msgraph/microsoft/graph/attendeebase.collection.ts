import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecipientCollection } from './recipient.collection';
import { AttendeeType } from './attendeetype.enum';
import { AttendeeBase } from './attendeebase.complex';
import { AttendeeBaseModel } from './attendeebase.model';
//#endregion

export class AttendeeBaseCollection<E extends AttendeeBase, M extends AttendeeBaseModel<E>> extends RecipientCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}