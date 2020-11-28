import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CertificateAuthority } from './certificateauthority.complex';
import { CertificateAuthorityModel } from './certificateauthority.model';
//#endregion

export class CertificateAuthorityCollection<E extends CertificateAuthority, M extends CertificateAuthorityModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}