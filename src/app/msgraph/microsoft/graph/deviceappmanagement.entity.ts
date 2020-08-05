import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ManagedAppRegistration } from './managedappregistration.entity';
import { ManagedEBook } from './managedebook.entity';
import { MobileApp } from './mobileapp.entity';
import { MobileAppCategory } from './mobileappcategory.entity';
import { ManagedDeviceMobileAppConfiguration } from './manageddevicemobileappconfiguration.entity';
import { VppToken } from './vpptoken.entity';
import { ManagedAppPolicy } from './managedapppolicy.entity';
import { IosManagedAppProtection } from './iosmanagedappprotection.entity';
import { AndroidManagedAppProtection } from './androidmanagedappprotection.entity';
import { DefaultManagedAppProtection } from './defaultmanagedappprotection.entity';
import { TargetedManagedAppConfiguration } from './targetedmanagedappconfiguration.entity';
import { MdmWindowsInformationProtectionPolicy } from './mdmwindowsinformationprotectionpolicy.entity';
import { WindowsInformationProtectionPolicy } from './windowsinformationprotectionpolicy.entity';
import { ManagedAppStatus } from './managedappstatus.entity';
//#endregion

export interface DeviceAppManagement extends Entity {
  //#region ODataApi Properties
  microsoftStoreForBusinessLastSuccessfulSyncDateTime: Date;
  isEnabledForMicrosoftStoreForBusiness: boolean;
  microsoftStoreForBusinessLanguage?: string;
  microsoftStoreForBusinessLastCompletedApplicationSyncTime: Date;
  managedEBooks?: ManagedEBook[];
  mobileApps?: MobileApp[];
  mobileAppCategories?: MobileAppCategory[];
  mobileAppConfigurations?: ManagedDeviceMobileAppConfiguration[];
  vppTokens?: VppToken[];
  managedAppPolicies?: ManagedAppPolicy[];
  iosManagedAppProtections?: IosManagedAppProtection[];
  androidManagedAppProtections?: AndroidManagedAppProtection[];
  defaultManagedAppProtections?: DefaultManagedAppProtection[];
  targetedManagedAppConfigurations?: TargetedManagedAppConfiguration[];
  mdmWindowsInformationProtectionPolicies?: MdmWindowsInformationProtectionPolicy[];
  windowsInformationProtectionPolicies?: WindowsInformationProtectionPolicy[];
  managedAppRegistrations?: ManagedAppRegistration[];
  managedAppStatuses?: ManagedAppStatus[];
  //#endregion
}