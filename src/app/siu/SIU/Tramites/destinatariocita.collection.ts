import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DestinatarioCita } from './destinatariocita.entity';
import { DestinatarioCitaModel } from './destinatariocita.model';
//#endregion

export class DestinatarioCitaCollection<E extends DestinatarioCita, M extends DestinatarioCitaModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}