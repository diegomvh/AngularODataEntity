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
import { AssignedPlan } from './assignedplan.complex';
import { ProvisionedPlan } from './provisionedplan.complex';
import { PrivacyProfile } from './privacyprofile.complex';
import { VerifiedDomain } from './verifieddomain.complex';
import { CertificateBasedAuthConfiguration } from './certificatebasedauthconfiguration.entity';
import { Organization } from './organization.entity';
import { AssignedPlanModel } from './assignedplan.model';
import { ProvisionedPlanModel } from './provisionedplan.model';
import { PrivacyProfileModel } from './privacyprofile.model';
import { VerifiedDomainModel } from './verifieddomain.model';
import { CertificateBasedAuthConfigurationModel } from './certificatebasedauthconfiguration.model';
import { OrganizationModel } from './organization.model';
import { AssignedPlanCollection } from './assignedplan.collection';
import { ProvisionedPlanCollection } from './provisionedplan.collection';
import { PrivacyProfileCollection } from './privacyprofile.collection';
import { VerifiedDomainCollection } from './verifieddomain.collection';
import { CertificateBasedAuthConfigurationCollection } from './certificatebasedauthconfiguration.collection';
import { OrganizationCollection } from './organization.collection';
//#endregion

@Injectable()
export class OrganizationService extends ODataEntityService<Organization> {
  constructor(protected client: ODataClient) {
    super(client, 'organization', 'microsoft.graph.organization');
  }

  //#region ODataApi Model
  organizationModel(): OrganizationModel<Organization> {
    return this.entity().asModel() as OrganizationModel<Organization>;
  }
  //#endregion
  //#region ODataApi Collection
  organizationCollection(): OrganizationCollection<Organization, OrganizationModel<Organization>> {
    return this.entities().asCollection() as OrganizationCollection<Organization, OrganizationModel<Organization>>;
  }
  //#endregion
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
