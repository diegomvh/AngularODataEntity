import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { ManagedAppRegistration } from './managedappregistration.entity';
import { MobileApp } from './mobileapp.entity';
import { DeviceAppManagement } from './deviceappmanagement.entity';
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
import { ManagedAppRegistrationCollection } from './managedappregistration.collection';
import { MobileAppCollection } from './mobileapp.collection';
import { DeviceAppManagementCollection } from './deviceappmanagement.collection';
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

export class DeviceAppManagementModel<E extends DeviceAppManagement> extends EntityModel<E> {
  //#region ODataApi Properties
  isEnabledForMicrosoftStoreForBusiness: boolean;
  microsoftStoreForBusinessLanguage?: string;
  microsoftStoreForBusinessLastCompletedApplicationSyncTime: Date;
  microsoftStoreForBusinessLastSuccessfulSyncDateTime: Date;
  managedEBooks?: ManagedEBookCollection<ManagedEBook, ManagedEBookModel<ManagedEBook>>;
  mobileAppCategories?: MobileAppCategoryCollection<MobileAppCategory, MobileAppCategoryModel<MobileAppCategory>>;
  mobileAppConfigurations?: ManagedDeviceMobileAppConfigurationCollection<ManagedDeviceMobileAppConfiguration, ManagedDeviceMobileAppConfigurationModel<ManagedDeviceMobileAppConfiguration>>;
  mobileApps?: MobileAppCollection<MobileApp, MobileAppModel<MobileApp>>;
  vppTokens?: VppTokenCollection<VppToken, VppTokenModel<VppToken>>;
  androidManagedAppProtections?: AndroidManagedAppProtectionCollection<AndroidManagedAppProtection, AndroidManagedAppProtectionModel<AndroidManagedAppProtection>>;
  defaultManagedAppProtections?: DefaultManagedAppProtectionCollection<DefaultManagedAppProtection, DefaultManagedAppProtectionModel<DefaultManagedAppProtection>>;
  iosManagedAppProtections?: IosManagedAppProtectionCollection<IosManagedAppProtection, IosManagedAppProtectionModel<IosManagedAppProtection>>;
  managedAppPolicies?: ManagedAppPolicyCollection<ManagedAppPolicy, ManagedAppPolicyModel<ManagedAppPolicy>>;
  managedAppRegistrations?: ManagedAppRegistrationCollection<ManagedAppRegistration, ManagedAppRegistrationModel<ManagedAppRegistration>>;
  managedAppStatuses?: ManagedAppStatusCollection<ManagedAppStatus, ManagedAppStatusModel<ManagedAppStatus>>;
  mdmWindowsInformationProtectionPolicies?: MdmWindowsInformationProtectionPolicyCollection<MdmWindowsInformationProtectionPolicy, MdmWindowsInformationProtectionPolicyModel<MdmWindowsInformationProtectionPolicy>>;
  targetedManagedAppConfigurations?: TargetedManagedAppConfigurationCollection<TargetedManagedAppConfiguration, TargetedManagedAppConfigurationModel<TargetedManagedAppConfiguration>>;
  windowsInformationProtectionPolicies?: WindowsInformationProtectionPolicyCollection<WindowsInformationProtectionPolicy, WindowsInformationProtectionPolicyModel<WindowsInformationProtectionPolicy>>;
  //#endregion
  //#region ODataApi Actions
  public syncMicrosoftStoreForBusinessApps(options?: HttpOptions): Observable<any> {
    var res = this._action<null, any>('microsoft.graph.syncMicrosoftStoreForBusinessApps');
    res.segment.entitySet('');
    return res.call(null, 'property', options) as Observable<any>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}