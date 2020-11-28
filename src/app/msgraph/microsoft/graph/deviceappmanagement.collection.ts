import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
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
import { DeviceAppManagementModel } from './deviceappmanagement.model';
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

export class DeviceAppManagementCollection<E extends DeviceAppManagement, M extends DeviceAppManagementModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}