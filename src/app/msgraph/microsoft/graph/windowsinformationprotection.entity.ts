import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAppPolicy } from './managedapppolicy.entity';
import { WindowsInformationProtectionEnforcementLevel } from './windowsinformationprotectionenforcementlevel.enum';
import { WindowsInformationProtectionResourceCollection } from './windowsinformationprotectionresourcecollection.entity';
import { WindowsInformationProtectionDataRecoveryCertificate } from './windowsinformationprotectiondatarecoverycertificate.entity';
import { WindowsInformationProtectionApp } from './windowsinformationprotectionapp.entity';
import { WindowsInformationProtectionProxiedDomainCollection } from './windowsinformationprotectionproxieddomaincollection.entity';
import { WindowsInformationProtectionIPRangeCollection } from './windowsinformationprotectioniprangecollection.entity';
import { TargetedManagedAppPolicyAssignment } from './targetedmanagedapppolicyassignment.entity';
import { WindowsInformationProtectionAppLockerFile } from './windowsinformationprotectionapplockerfile.entity';
//#endregion

export interface WindowsInformationProtection extends ManagedAppPolicy {
  //#region ODataApi Properties
  enforcementLevel: WindowsInformationProtectionEnforcementLevel;
  enterpriseDomain?: string;
  enterpriseProtectedDomainNames?: WindowsInformationProtectionResourceCollection[];
  protectionUnderLockConfigRequired: boolean;
  dataRecoveryCertificate?: WindowsInformationProtectionDataRecoveryCertificate;
  revokeOnUnenrollDisabled: boolean;
  rightsManagementServicesTemplateId?: string;
  azureRightsManagementServicesAllowed: boolean;
  iconsVisible: boolean;
  protectedApps?: WindowsInformationProtectionApp[];
  exemptApps?: WindowsInformationProtectionApp[];
  enterpriseNetworkDomainNames?: WindowsInformationProtectionResourceCollection[];
  enterpriseProxiedDomains?: WindowsInformationProtectionProxiedDomainCollection[];
  enterpriseIPRanges?: WindowsInformationProtectionIPRangeCollection[];
  enterpriseIPRangesAreAuthoritative: boolean;
  enterpriseProxyServers?: WindowsInformationProtectionResourceCollection[];
  enterpriseInternalProxyServers?: WindowsInformationProtectionResourceCollection[];
  enterpriseProxyServersAreAuthoritative: boolean;
  neutralDomainResources?: WindowsInformationProtectionResourceCollection[];
  indexingEncryptedStoresOrItemsBlocked: boolean;
  smbAutoEncryptedFileExtensions?: WindowsInformationProtectionResourceCollection[];
  isAssigned: boolean;
  protectedAppLockerFiles?: WindowsInformationProtectionAppLockerFile[];
  exemptAppLockerFiles?: WindowsInformationProtectionAppLockerFile[];
  assignments?: TargetedManagedAppPolicyAssignment[];
  //#endregion
}