import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { CertificateAuthority } from './certificateauthority.complex';
import { CertificateBasedAuthConfiguration } from './certificatebasedauthconfiguration.entity';
import { CertificateAuthorityModel } from './certificateauthority.model';
import { CertificateAuthorityCollection } from './certificateauthority.collection';
import { CertificateBasedAuthConfigurationCollection } from './certificatebasedauthconfiguration.collection';
//#endregion

export class CertificateBasedAuthConfigurationModel<E extends CertificateBasedAuthConfiguration> extends EntityModel<E> {
  //#region ODataApi Properties
  certificateAuthorities: CertificateAuthorityCollection<CertificateAuthority, CertificateAuthorityModel<CertificateAuthority>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}