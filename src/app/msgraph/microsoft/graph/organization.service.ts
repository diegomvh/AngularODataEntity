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
import { MdmAuthority } from './mdmauthority.enum';
import { AssignedPlan } from './assignedplan.entity';
import { ProvisionedPlan } from './provisionedplan.entity';
import { PrivacyProfile } from './privacyprofile.entity';
import { VerifiedDomain } from './verifieddomain.entity';
import { CertificateBasedAuthConfiguration } from './certificatebasedauthconfiguration.entity';
import { Organization } from './organization.entity';
//#endregion

@Injectable()
export class OrganizationService extends ODataEntityService<Organization> {
  constructor(protected client: ODataClient) {
    super(client, 'organization', 'microsoft.graph.organization');
  }

  //#region ODataApi Actions
  public setMobileDeviceManagementAuthority(entity: EntityKey<Organization>): ODataActionResource<null, number> {
    const resource = this.entity(entity).action<null, number>('microsoft.graph.setMobileDeviceManagementAuthority');
    return resource;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public certificateBasedAuthConfiguration(entity: EntityKey<Organization>): ODataNavigationPropertyResource<CertificateBasedAuthConfiguration> {
    return this.entity(entity).navigationProperty<CertificateBasedAuthConfiguration>('certificateBasedAuthConfiguration');
  }
  //#endregion
}
