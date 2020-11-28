import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IdentificacionDocumento } from './identificaciondocumento.entity';
import { IdentificacionDocumentoCollection } from './identificaciondocumento.collection';
//#endregion

export class IdentificacionDocumentoModel<E extends IdentificacionDocumento> extends ODataModel<E> {
  //#region ODataApi Properties
  numero: number;
  anio: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}