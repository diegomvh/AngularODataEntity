import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAppPolicy } from './managedapppolicy.entity';
import { WindowsInformationProtectionEnforcementLevel } from './windowsinformationprotectionenforcementlevel.enum';
import { WindowsInformationProtectionApp } from './windowsinformationprotectionapp.complex';
import { WindowsInformationProtectionDataRecoveryCertificate } from './windowsinformationprotectiondatarecoverycertificate.complex';
import { WindowsInformationProtectionIPRangeCollection } from './windowsinformationprotectioniprangecollection.complex';
import { WindowsInformationProtectionProxiedDomainCollection } from './windowsinformationprotectionproxieddomaincollection.complex';
import { WindowsInformationProtectionResourceCollection } from './windowsinformationprotectionresourcecollection.complex';
import { TargetedManagedAppPolicyAssignment } from './targetedmanagedapppolicyassignment.entity';
import { WindowsInformationProtectionAppLockerFile } from './windowsinformationprotectionapplockerfile.entity';
import { WindowsInformationProtectionAppModel } from './windowsinformationprotectionapp.model';
import { WindowsInformationProtectionDataRecoveryCertificateModel } from './windowsinformationprotectiondatarecoverycertificate.model';
import { WindowsInformationProtectionIPRangeCollectionModel } from './windowsinformationprotectioniprangecollection.model';
import { WindowsInformationProtectionProxiedDomainCollectionModel } from './windowsinformationprotectionproxieddomaincollection.model';
import { WindowsInformationProtectionResourceCollectionModel } from './windowsinformationprotectionresourcecollection.model';
import { ManagedAppPolicyModel } from './managedapppolicy.model';
import { TargetedManagedAppPolicyAssignmentModel } from './targetedmanagedapppolicyassignment.model';
import { WindowsInformationProtectionAppLockerFileModel } from './windowsinformationprotectionapplockerfile.model';
import { WindowsInformationProtectionAppCollection } from './windowsinformationprotectionapp.collection';
import { WindowsInformationProtectionDataRecoveryCertificateCollection } from './windowsinformationprotectiondatarecoverycertificate.collection';
import { WindowsInformationProtectionIPRangeCollectionCollection } from './windowsinformationprotectioniprangecollection.collection';
import { WindowsInformationProtectionProxiedDomainCollectionCollection } from './windowsinformationprotectionproxieddomaincollection.collection';
import { WindowsInformationProtectionResourceCollectionCollection } from './windowsinformationprotectionresourcecollection.collection';
import { ManagedAppPolicyCollection } from './managedapppolicy.collection';
import { TargetedManagedAppPolicyAssignmentCollection } from './targetedmanagedapppolicyassignment.collection';
import { WindowsInformationProtectionAppLockerFileCollection } from './windowsinformationprotectionapplockerfile.collection';
//#endregion

export interface WindowsInformationProtection extends ManagedAppPolicy {
  //#region ODataApi Properties
  azureRightsManagementServicesAllowed: boolean;
  dataRecoveryCertificate?: WindowsInformationProtectionDataRecoveryCertificate;
  enforcementLevel: WindowsInformationProtectionEnforcementLevel;
  enterpriseDomain?: string;
  enterpriseInternalProxyServers?: WindowsInformationProtectionResourceCollection[];
  enterpriseIPRanges?: WindowsInformationProtectionIPRangeCollection[];
  enterpriseIPRangesAreAuthoritative: boolean;
  enterpriseNetworkDomainNames?: WindowsInformationProtectionResourceCollection[];
  enterpriseProtectedDomainNames?: WindowsInformationProtectionResourceCollection[];
  enterpriseProxiedDomains?: WindowsInformationProtectionProxiedDomainCollection[];
  enterpriseProxyServers?: WindowsInformationProtectionResourceCollection[];
  enterpriseProxyServersAreAuthoritative: boolean;
  exemptApps?: WindowsInformationProtectionApp[];
  iconsVisible: boolean;
  indexingEncryptedStoresOrItemsBlocked: boolean;
  isAssigned: boolean;
  neutralDomainResources?: WindowsInformationProtectionResourceCollection[];
  protectedApps?: WindowsInformationProtectionApp[];
  protectionUnderLockConfigRequired: boolean;
  revokeOnUnenrollDisabled: boolean;
  rightsManagementServicesTemplateId?: string;
  smbAutoEncryptedFileExtensions?: WindowsInformationProtectionResourceCollection[];
  assignments?: TargetedManagedAppPolicyAssignment[];
  exemptAppLockerFiles?: WindowsInformationProtectionAppLockerFile[];
  protectedAppLockerFiles?: WindowsInformationProtectionAppLockerFile[];
  //#endregion
}