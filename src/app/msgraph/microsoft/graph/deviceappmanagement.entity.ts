import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ManagedAppRegistration } from './managedappregistration.entity';
import { MobileApp } from './mobileapp.entity';
import { ManagedEBook } from './managedebook.entity';
import { MobileAppCategory } from './mobileappcategory.entity';
import { ManagedDeviceMobileAppConfiguration } from './manageddevicemobileappconfiguration.entity';
import { VppToken } from './vpptoken.entity';
import { ManagedAppPolicy } from './managedapppolicy.entity';
import { AndroidManagedAppProtection } from './androidmanagedappprotection.entity';
import { DefaultManagedAppProtection } from './defaultmanagedappprotection.entity';
import { IosManagedAppProtection } from './iosmanagedappprotection.entity';
import { ManagedAppStatus } from './managedappstatus.entity';
import { MdmWindowsInformationProtectionPolicy } from './mdmwindowsinformationprotectionpolicy.entity';
import { TargetedManagedAppConfiguration } from './targetedmanagedappconfiguration.entity';
import { WindowsInformationProtectionPolicy } from './windowsinformationprotectionpolicy.entity';
import { EntityModel } from './entity.model';
import { ManagedAppRegistrationModel } from './managedappregistration.model';
import { MobileAppModel } from './mobileapp.model';
import { ManagedEBookModel } from './managedebook.model';
import { MobileAppCategoryModel } from './mobileappcategory.model';
import { ManagedDeviceMobileAppConfigurationModel } from './manageddevicemobileappconfiguration.model';
import { VppTokenModel } from './vpptoken.model';
import { ManagedAppPolicyModel } from './managedapppolicy.model';
import { AndroidManagedAppProtectionModel } from './androidmanagedappprotection.model';
import { DefaultManagedAppProtectionModel } from './defaultmanagedappprotection.model';
import { IosManagedAppProtectionModel } from './iosmanagedappprotection.model';
import { ManagedAppStatusModel } from './managedappstatus.model';
import { MdmWindowsInformationProtectionPolicyModel } from './mdmwindowsinformationprotectionpolicy.model';
import { TargetedManagedAppConfigurationModel } from './targetedmanagedappconfiguration.model';
import { WindowsInformationProtectionPolicyModel } from './windowsinformationprotectionpolicy.model';
import { EntityCollection } from './entity.collection';
import { ManagedAppRegistrationCollection } from './managedappregistration.collection';
import { MobileAppCollection } from './mobileapp.collection';
import { ManagedEBookCollection } from './managedebook.collection';
import { MobileAppCategoryCollection } from './mobileappcategory.collection';
import { ManagedDeviceMobileAppConfigurationCollection } from './manageddevicemobileappconfiguration.collection';
import { VppTokenCollection } from './vpptoken.collection';
import { ManagedAppPolicyCollection } from './managedapppolicy.collection';
import { AndroidManagedAppProtectionCollection } from './androidmanagedappprotection.collection';
import { DefaultManagedAppProtectionCollection } from './defaultmanagedappprotection.collection';
import { IosManagedAppProtectionCollection } from './iosmanagedappprotection.collection';
import { ManagedAppStatusCollection } from './managedappstatus.collection';
import { MdmWindowsInformationProtectionPolicyCollection } from './mdmwindowsinformationprotectionpolicy.collection';
import { TargetedManagedAppConfigurationCollection } from './targetedmanagedappconfiguration.collection';
import { WindowsInformationProtectionPolicyCollection } from './windowsinformationprotectionpolicy.collection';
//#endregion

export interface DeviceAppManagement extends Entity {
  //#region ODataApi Properties
  isEnabledForMicrosoftStoreForBusiness: boolean;
  microsoftStoreForBusinessLanguage?: string;
  microsoftStoreForBusinessLastCompletedApplicationSyncTime: Date;
  microsoftStoreForBusinessLastSuccessfulSyncDateTime: Date;
  managedEBooks?: ManagedEBook[];
  mobileAppCategories?: MobileAppCategory[];
  mobileAppConfigurations?: ManagedDeviceMobileAppConfiguration[];
  mobileApps?: MobileApp[];
  vppTokens?: VppToken[];
  androidManagedAppProtections?: AndroidManagedAppProtection[];
  defaultManagedAppProtections?: DefaultManagedAppProtection[];
  iosManagedAppProtections?: IosManagedAppProtection[];
  managedAppPolicies?: ManagedAppPolicy[];
  managedAppRegistrations?: ManagedAppRegistration[];
  managedAppStatuses?: ManagedAppStatus[];
  mdmWindowsInformationProtectionPolicies?: MdmWindowsInformationProtectionPolicy[];
  targetedManagedAppConfigurations?: TargetedManagedAppConfiguration[];
  windowsInformationProtectionPolicies?: WindowsInformationProtectionPolicy[];
  //#endregion
}