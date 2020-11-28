import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { CertificateAuthority } from './certificateauthority.entity';
import { CertificateBasedAuthConfiguration } from './certificatebasedauthconfiguration.entity';
import { CertificateAuthorityModel } from './certificateauthority.model';
import { CertificateBasedAuthConfigurationModel } from './certificatebasedauthconfiguration.model';
import { CertificateAuthorityCollection } from './certificateauthority.collection';
//#endregion

export class CertificateBasedAuthConfigurationCollection<E extends CertificateBasedAuthConfiguration, M extends CertificateBasedAuthConfigurationModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}