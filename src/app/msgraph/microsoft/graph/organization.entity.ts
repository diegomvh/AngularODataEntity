import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DirectoryObject } from './directoryobject.entity';
import { MdmAuthority } from './mdmauthority.enum';
import { AssignedPlan } from './assignedplan.entity';
import { ProvisionedPlan } from './provisionedplan.entity';
import { PrivacyProfile } from './privacyprofile.entity';
import { VerifiedDomain } from './verifieddomain.entity';
import { Extension } from './extension.entity';
import { CertificateBasedAuthConfiguration } from './certificatebasedauthconfiguration.entity';
//#endregion

export interface Organization extends DirectoryObject {
  //#region ODataApi Properties
  assignedPlans: AssignedPlan[];
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
  privacyProfile?: PrivacyProfile;
  provisionedPlans: ProvisionedPlan[];
  securityComplianceNotificationMails: string[];
  securityComplianceNotificationPhones: string[];
  state?: string;
  street?: string;
  technicalNotificationMails: string[];
  verifiedDomains: VerifiedDomain[];
  mobileDeviceManagementAuthority: MdmAuthority;
  certificateBasedAuthConfiguration?: CertificateBasedAuthConfiguration[];
  extensions?: Extension[];
  //#endregion
}