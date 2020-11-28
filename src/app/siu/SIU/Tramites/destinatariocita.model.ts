import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DestinatarioCita } from './destinatariocita.entity';
import { DestinatarioCitaCollection } from './destinatariocita.collection';
//#endregion

export class DestinatarioCitaModel<E extends DestinatarioCita> extends ODataModel<E> {
  //#region ODataApi Properties
  id: number;
  oper?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}