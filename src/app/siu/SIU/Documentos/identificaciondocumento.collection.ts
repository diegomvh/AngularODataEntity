import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IdentificacionDocumento } from './identificaciondocumento.entity';
import { IdentificacionDocumentoModel } from './identificaciondocumento.model';
//#endregion

export class IdentificacionDocumentoCollection<E extends IdentificacionDocumento, M extends IdentificacionDocumentoModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}