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
//#endregion

@Injectable()
export class CertificateBasedAuthConfigurationService extends ODataEntityService<CertificateBasedAuthConfiguration> {
  constructor(protected client: ODataClient) {
    super(client, 'certificateBasedAuthConfiguration', 'microsoft.graph.certificateBasedAuthConfiguration');
  }

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
