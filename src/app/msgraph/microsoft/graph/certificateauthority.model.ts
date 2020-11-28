import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CertificateAuthority } from './certificateauthority.entity';
import { CertificateAuthorityCollection } from './certificateauthority.collection';
//#endregion

export class CertificateAuthorityModel<E extends CertificateAuthority> extends ODataModel<E> {
  //#region ODataApi Properties
  certificate: ArrayBuffer;
  certificateRevocationListUrl?: string;
  deltaCertificateRevocationListUrl?: string;
  isRootAuthority: boolean;
  issuer: string;
  issuerSki: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}