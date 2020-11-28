import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { ComplianceState } from './compliancestate.enum';
import { DeviceEnrollmentType } from './deviceenrollmenttype.enum';
import { DeviceManagementExchangeAccessState } from './devicemanagementexchangeaccessstate.enum';
import { DeviceManagementExchangeAccessStateReason } from './devicemanagementexchangeaccessstatereason.enum';
import { DeviceRegistrationState } from './deviceregistrationstate.enum';
import { ManagedDeviceOwnerType } from './manageddeviceownertype.enum';
import { ManagedDevicePartnerReportedHealthState } from './manageddevicepartnerreportedhealthstate.enum';
import { ManagementAgentType } from './managementagenttype.enum';
import { ConfigurationManagerClientEnabledFeatures } from './configurationmanagerclientenabledfeatures.complex';
import { DeviceActionResult } from './deviceactionresult.complex';
import { DeviceHealthAttestationState } from './devicehealthattestationstate.complex';
import { UpdateWindowsDeviceAccountActionParameter } from './updatewindowsdeviceaccountactionparameter.complex';
import { ManagedDevice } from './manageddevice.entity';
import { DeviceCategory } from './devicecategory.entity';
import { DeviceCompliancePolicyState } from './devicecompliancepolicystate.entity';
import { DeviceConfigurationState } from './deviceconfigurationstate.entity';
import { ConfigurationManagerClientEnabledFeaturesModel } from './configurationmanagerclientenabledfeatures.model';
import { DeviceActionResultModel } from './deviceactionresult.model';
import { DeviceHealthAttestationStateModel } from './devicehealthattestationstate.model';
import { UpdateWindowsDeviceAccountActionParameterModel } from './updatewindowsdeviceaccountactionparameter.model';
import { ManagedDeviceModel } from './manageddevice.model';
import { DeviceCategoryModel } from './devicecategory.model';
import { DeviceCompliancePolicyStateModel } from './devicecompliancepolicystate.model';
import { DeviceConfigurationStateModel } from './deviceconfigurationstate.model';
import { ConfigurationManagerClientEnabledFeaturesCollection } from './configurationmanagerclientenabledfeatures.collection';
import { DeviceActionResultCollection } from './deviceactionresult.collection';
import { DeviceHealthAttestationStateCollection } from './devicehealthattestationstate.collection';
import { UpdateWindowsDeviceAccountActionParameterCollection } from './updatewindowsdeviceaccountactionparameter.collection';
import { DeviceCategoryCollection } from './devicecategory.collection';
import { DeviceCompliancePolicyStateCollection } from './devicecompliancepolicystate.collection';
import { DeviceConfigurationStateCollection } from './deviceconfigurationstate.collection';
//#endregion

export class ManagedDeviceCollection<E extends ManagedDevice, M extends ManagedDeviceModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}