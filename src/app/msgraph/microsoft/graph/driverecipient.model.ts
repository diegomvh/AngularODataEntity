import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DriveRecipient } from './driverecipient.entity';
import { DriveRecipientCollection } from './driverecipient.collection';
//#endregion

export class DriveRecipientModel<E extends DriveRecipient> extends ODataModel<E> {
  //#region ODataApi Properties
  alias?: string;
  email?: string;
  objectId?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}