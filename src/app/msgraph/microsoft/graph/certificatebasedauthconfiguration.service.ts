import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntityService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { CertificateAuthority } from './certificateauthority.entity';
import { CertificateBasedAuthConfiguration } from './certificatebasedauthconfiguration.entity';
import { CertificateAuthorityModel } from './certificateauthority.model';
import { CertificateBasedAuthConfigurationModel } from './certificatebasedauthconfiguration.model';
import { CertificateAuthorityCollection } from './certificateauthority.collection';
import { CertificateBasedAuthConfigurationCollection } from './certificatebasedauthconfiguration.collection';
//#endregion

@Injectable()
export class CertificateBasedAuthConfigurationService extends ODataEntityService<CertificateBasedAuthConfiguration> {
  constructor(protected client: ODataClient) {
    super(client, 'certificateBasedAuthConfiguration', 'microsoft.graph.certificateBasedAuthConfiguration');
  }

  //#region ODataApi Model
  certificateBasedAuthConfigurationModel(): CertificateBasedAuthConfigurationModel<CertificateBasedAuthConfiguration> {
    return super.model() as CertificateBasedAuthConfigurationModel<CertificateBasedAuthConfiguration>;
  }
  //#endregion
  //#region ODataApi Collection
  certificateBasedAuthConfigurationCollection(): CertificateBasedAuthConfigurationCollection<CertificateBasedAuthConfiguration, CertificateBasedAuthConfigurationModel<CertificateBasedAuthConfiguration>> {
    return super.collection() as CertificateBasedAuthConfigurationCollection<CertificateBasedAuthConfiguration, CertificateBasedAuthConfigurationModel<CertificateBasedAuthConfiguration>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
