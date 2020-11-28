import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DriveRecipient } from './driverecipient.entity';
import { DriveRecipientModel } from './driverecipient.model';
//#endregion

export class DriveRecipientCollection<E extends DriveRecipient, M extends DriveRecipientModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}