import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationCollection } from './deviceconfiguration.collection';
import { AndroidWorkProfileCrossProfileDataSharingType } from './androidworkprofilecrossprofiledatasharingtype.enum';
import { AndroidWorkProfileDefaultAppPermissionPolicyType } from './androidworkprofiledefaultapppermissionpolicytype.enum';
import { AndroidWorkProfileRequiredPasswordType } from './androidworkprofilerequiredpasswordtype.enum';
import { AndroidWorkProfileGeneralDeviceConfiguration } from './androidworkprofilegeneraldeviceconfiguration.entity';
import { AndroidWorkProfileGeneralDeviceConfigurationModel } from './androidworkprofilegeneraldeviceconfiguration.model';
//#endregion

export class AndroidWorkProfileGeneralDeviceConfigurationCollection<E extends AndroidWorkProfileGeneralDeviceConfiguration, M extends AndroidWorkProfileGeneralDeviceConfigurationModel<E>> extends DeviceConfigurationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}