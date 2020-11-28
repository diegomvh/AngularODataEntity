import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DirectoryObjectModel } from './directoryobject.model';
import { MdmAuthority } from './mdmauthority.enum';
import { AssignedPlan } from './assignedplan.entity';
import { ProvisionedPlan } from './provisionedplan.entity';
import { PrivacyProfile } from './privacyprofile.entity';
import { VerifiedDomain } from './verifieddomain.entity';
import { Extension } from './extension.entity';
import { CertificateBasedAuthConfiguration } from './certificatebasedauthconfiguration.entity';
import { Organization } from './organization.entity';
import { AssignedPlanModel } from './assignedplan.model';
import { ProvisionedPlanModel } from './provisionedplan.model';
import { PrivacyProfileModel } from './privacyprofile.model';
import { VerifiedDomainModel } from './verifieddomain.model';
import { ExtensionModel } from './extension.model';
import { CertificateBasedAuthConfigurationModel } from './certificatebasedauthconfiguration.model';
import { AssignedPlanCollection } from './assignedplan.collection';
import { ProvisionedPlanCollection } from './provisionedplan.collection';
import { PrivacyProfileCollection } from './privacyprofile.collection';
import { VerifiedDomainCollection } from './verifieddomain.collection';
import { ExtensionCollection } from './extension.collection';
import { CertificateBasedAuthConfigurationCollection } from './certificatebasedauthconfiguration.collection';
import { OrganizationCollection } from './organization.collection';
//#endregion

export class OrganizationModel<E extends Organization> extends DirectoryObjectModel<E> {
  //#region ODataApi Properties
  assignedPlans: AssignedPlanCollection<AssignedPlan, AssignedPlanModel<AssignedPlan>>;
  businessPhones: string[];
  city?: string;
  country?: string;
  countryLetterCode?: string;
  createdDateTime?: Date;
  displayName?: string;
  marketingNotificationEmails: string[];
  onPremisesLastSyncDateTime?: Date;
  onPremisesSyncEnabled?: boolean;
  postalCode?: string;
  preferredLanguage?: string;
  privacyProfile?: PrivacyProfileModel<PrivacyProfile>;
  provisionedPlans: ProvisionedPlanCollection<ProvisionedPlan, ProvisionedPlanModel<ProvisionedPlan>>;
  securityComplianceNotificationMails: string[];
  securityComplianceNotificationPhones: string[];
  state?: string;
  street?: string;
  technicalNotificationMails: string[];
  tenantType?: string;
  verifiedDomains: VerifiedDomainCollection<VerifiedDomain, VerifiedDomainModel<VerifiedDomain>>;
  mobileDeviceManagementAuthority: MdmAuthority;
  certificateBasedAuthConfiguration?: CertificateBasedAuthConfigurationCollection<CertificateBasedAuthConfiguration, CertificateBasedAuthConfigurationModel<CertificateBasedAuthConfiguration>>;
  extensions?: ExtensionCollection<Extension, ExtensionModel<Extension>>;
  //#endregion
  //#region ODataApi Actions
  public setMobileDeviceManagementAuthority(options?: HttpOptions): Observable<number> {
    var res = this._action<null, number>('microsoft.graph.setMobileDeviceManagementAuthority');
    res.segment.entitySet('organization');
    return res.call(null, 'property', options) as Observable<number>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}