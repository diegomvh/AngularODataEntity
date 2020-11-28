import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { ComplianceState } from './compliancestate.enum';
import { DeviceEnrollmentType } from './deviceenrollmenttype.enum';
import { DeviceManagementExchangeAccessState } from './devicemanagementexchangeaccessstate.enum';
import { DeviceManagementExchangeAccessStateReason } from './devicemanagementexchangeaccessstatereason.enum';
import { DeviceRegistrationState } from './deviceregistrationstate.enum';
import { ManagedDeviceOwnerType } from './manageddeviceownertype.enum';
import { ManagedDevicePartnerReportedHealthState } from './manageddevicepartnerreportedhealthstate.enum';
import { ManagementAgentType } from './managementagenttype.enum';
import { ConfigurationManagerClientEnabledFeatures } from './configurationmanagerclientenabledfeatures.entity';
import { DeviceActionResult } from './deviceactionresult.entity';
import { DeviceHealthAttestationState } from './devicehealthattestationstate.entity';
import { UpdateWindowsDeviceAccountActionParameter } from './updatewindowsdeviceaccountactionparameter.entity';
import { ManagedDevice } from './manageddevice.entity';
import { DeviceCategory } from './devicecategory.entity';
import { DeviceCompliancePolicyState } from './devicecompliancepolicystate.entity';
import { DeviceConfigurationState } from './deviceconfigurationstate.entity';
import { ConfigurationManagerClientEnabledFeaturesModel } from './configurationmanagerclientenabledfeatures.model';
import { DeviceActionResultModel } from './deviceactionresult.model';
import { DeviceHealthAttestationStateModel } from './devicehealthattestationstate.model';
import { UpdateWindowsDeviceAccountActionParameterModel } from './updatewindowsdeviceaccountactionparameter.model';
import { DeviceCategoryModel } from './devicecategory.model';
import { DeviceCompliancePolicyStateModel } from './devicecompliancepolicystate.model';
import { DeviceConfigurationStateModel } from './deviceconfigurationstate.model';
import { ConfigurationManagerClientEnabledFeaturesCollection } from './configurationmanagerclientenabledfeatures.collection';
import { DeviceActionResultCollection } from './deviceactionresult.collection';
import { DeviceHealthAttestationStateCollection } from './devicehealthattestationstate.collection';
import { UpdateWindowsDeviceAccountActionParameterCollection } from './updatewindowsdeviceaccountactionparameter.collection';
import { ManagedDeviceCollection } from './manageddevice.collection';
import { DeviceCategoryCollection } from './devicecategory.collection';
import { DeviceCompliancePolicyStateCollection } from './devicecompliancepolicystate.collection';
import { DeviceConfigurationStateCollection } from './deviceconfigurationstate.collection';
//#endregion

export class ManagedDeviceModel<E extends ManagedDevice> extends EntityModel<E> {
  //#region ODataApi Properties
  activationLockBypassCode?: string;
  androidSecurityPatchLevel?: string;
  azureADDeviceId?: string;
  azureADRegistered?: boolean;
  complianceGracePeriodExpirationDateTime: Date;
  complianceState: ComplianceState;
  configurationManagerClientEnabledFeatures?: ConfigurationManagerClientEnabledFeaturesModel<ConfigurationManagerClientEnabledFeatures>;
  deviceActionResults?: DeviceActionResultCollection<DeviceActionResult, DeviceActionResultModel<DeviceActionResult>>;
  deviceCategoryDisplayName?: string;
  deviceEnrollmentType: DeviceEnrollmentType;
  deviceHealthAttestationState?: DeviceHealthAttestationStateModel<DeviceHealthAttestationState>;
  deviceName?: string;
  deviceRegistrationState: DeviceRegistrationState;
  easActivated: boolean;
  easActivationDateTime: Date;
  easDeviceId?: string;
  emailAddress?: string;
  enrolledDateTime: Date;
  exchangeAccessState: DeviceManagementExchangeAccessState;
  exchangeAccessStateReason: DeviceManagementExchangeAccessStateReason;
  exchangeLastSuccessfulSyncDateTime: Date;
  freeStorageSpaceInBytes: number;
  imei?: string;
  isEncrypted: boolean;
  isSupervised: boolean;
  jailBroken?: string;
  lastSyncDateTime: Date;
  managedDeviceName?: string;
  managedDeviceOwnerType: ManagedDeviceOwnerType;
  managementAgent: ManagementAgentType;
  manufacturer?: string;
  meid?: string;
  model?: string;
  operatingSystem?: string;
  osVersion?: string;
  partnerReportedThreatState: ManagedDevicePartnerReportedHealthState;
  phoneNumber?: string;
  remoteAssistanceSessionErrorDetails?: string;
  remoteAssistanceSessionUrl?: string;
  serialNumber?: string;
  subscriberCarrier?: string;
  totalStorageSpaceInBytes: number;
  userDisplayName?: string;
  userId?: string;
  userPrincipalName?: string;
  wiFiMacAddress?: string;
  deviceCompliancePolicyStates?: DeviceCompliancePolicyStateCollection<DeviceCompliancePolicyState, DeviceCompliancePolicyStateModel<DeviceCompliancePolicyState>>;
  deviceConfigurationStates?: DeviceConfigurationStateCollection<DeviceConfigurationState, DeviceConfigurationStateModel<DeviceConfigurationState>>;
  deviceCategory?: DeviceCategoryModel<DeviceCategory>;
  //#endregion
  //#region ODataApi Actions
  public bypassActivationLock(options?: HttpOptions): Observable<any> {
    var res = this._action<null, any>('microsoft.graph.bypassActivationLock');
    res.segment.entitySet('');
    return res.call(null, 'property', options) as Observable<any>;
  }
  public cleanWindowsDevice(keepUserData: boolean, options?: HttpOptions): Observable<any> {
    var res = this._action<{keepUserData: boolean}, any>('microsoft.graph.cleanWindowsDevice');
    res.segment.entitySet('');
    return res.call({keepUserData}, 'property', options) as Observable<any>;
  }
  public deleteUserFromSharedAppleDevice(userPrincipalName: string, options?: HttpOptions): Observable<any> {
    var res = this._action<{userPrincipalName: string}, any>('microsoft.graph.deleteUserFromSharedAppleDevice');
    res.segment.entitySet('');
    return res.call({userPrincipalName}, 'property', options) as Observable<any>;
  }
  public disableLostMode(options?: HttpOptions): Observable<any> {
    var res = this._action<null, any>('microsoft.graph.disableLostMode');
    res.segment.entitySet('');
    return res.call(null, 'property', options) as Observable<any>;
  }
  public locateDevice(options?: HttpOptions): Observable<any> {
    var res = this._action<null, any>('microsoft.graph.locateDevice');
    res.segment.entitySet('');
    return res.call(null, 'property', options) as Observable<any>;
  }
  public logoutSharedAppleDeviceActiveUser(options?: HttpOptions): Observable<any> {
    var res = this._action<null, any>('microsoft.graph.logoutSharedAppleDeviceActiveUser');
    res.segment.entitySet('');
    return res.call(null, 'property', options) as Observable<any>;
  }
  public rebootNow(options?: HttpOptions): Observable<any> {
    var res = this._action<null, any>('microsoft.graph.rebootNow');
    res.segment.entitySet('');
    return res.call(null, 'property', options) as Observable<any>;
  }
  public recoverPasscode(options?: HttpOptions): Observable<any> {
    var res = this._action<null, any>('microsoft.graph.recoverPasscode');
    res.segment.entitySet('');
    return res.call(null, 'property', options) as Observable<any>;
  }
  public remoteLock(options?: HttpOptions): Observable<any> {
    var res = this._action<null, any>('microsoft.graph.remoteLock');
    res.segment.entitySet('');
    return res.call(null, 'property', options) as Observable<any>;
  }
  public requestRemoteAssistance(options?: HttpOptions): Observable<any> {
    var res = this._action<null, any>('microsoft.graph.requestRemoteAssistance');
    res.segment.entitySet('');
    return res.call(null, 'property', options) as Observable<any>;
  }
  public resetPasscode(options?: HttpOptions): Observable<any> {
    var res = this._action<null, any>('microsoft.graph.resetPasscode');
    res.segment.entitySet('');
    return res.call(null, 'property', options) as Observable<any>;
  }
  public retire(options?: HttpOptions): Observable<any> {
    var res = this._action<null, any>('microsoft.graph.retire');
    res.segment.entitySet('');
    return res.call(null, 'property', options) as Observable<any>;
  }
  public shutDown(options?: HttpOptions): Observable<any> {
    var res = this._action<null, any>('microsoft.graph.shutDown');
    res.segment.entitySet('');
    return res.call(null, 'property', options) as Observable<any>;
  }
  public syncDevice(options?: HttpOptions): Observable<any> {
    var res = this._action<null, any>('microsoft.graph.syncDevice');
    res.segment.entitySet('');
    return res.call(null, 'property', options) as Observable<any>;
  }
  public updateWindowsDeviceAccount(updateWindowsDeviceAccountActionParameter: UpdateWindowsDeviceAccountActionParameter, options?: HttpOptions): Observable<any> {
    var res = this._action<{updateWindowsDeviceAccountActionParameter: UpdateWindowsDeviceAccountActionParameter}, any>('microsoft.graph.updateWindowsDeviceAccount');
    res.segment.entitySet('');
    return res.call({updateWindowsDeviceAccountActionParameter}, 'property', options) as Observable<any>;
  }
  public windowsDefenderScan(quickScan: boolean, options?: HttpOptions): Observable<any> {
    var res = this._action<{quickScan: boolean}, any>('microsoft.graph.windowsDefenderScan');
    res.segment.entitySet('');
    return res.call({quickScan}, 'property', options) as Observable<any>;
  }
  public windowsDefenderUpdateSignatures(options?: HttpOptions): Observable<any> {
    var res = this._action<null, any>('microsoft.graph.windowsDefenderUpdateSignatures');
    res.segment.entitySet('');
    return res.call(null, 'property', options) as Observable<any>;
  }
  public wipe(keepEnrollmentData: boolean, keepUserData: boolean, macOsUnlockCode: string, options?: HttpOptions): Observable<any> {
    var res = this._action<{keepEnrollmentData: boolean, keepUserData: boolean, macOsUnlockCode: string}, any>('microsoft.graph.wipe');
    res.segment.entitySet('');
    return res.call({keepEnrollmentData, keepUserData, macOsUnlockCode}, 'property', options) as Observable<any>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}