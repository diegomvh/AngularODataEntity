import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { DeviceConfiguration } from './deviceconfiguration.entity';
import { SettingStateDeviceSummary } from './settingstatedevicesummary.entity';
import { DeviceConfigurationAssignment } from './deviceconfigurationassignment.entity';
import { DeviceConfigurationDeviceStatus } from './deviceconfigurationdevicestatus.entity';
import { DeviceConfigurationDeviceOverview } from './deviceconfigurationdeviceoverview.entity';
import { DeviceConfigurationUserStatus } from './deviceconfigurationuserstatus.entity';
import { DeviceConfigurationUserOverview } from './deviceconfigurationuseroverview.entity';
import { DeviceConfigurationModel } from './deviceconfiguration.model';
import { SettingStateDeviceSummaryModel } from './settingstatedevicesummary.model';
import { DeviceConfigurationAssignmentModel } from './deviceconfigurationassignment.model';
import { DeviceConfigurationDeviceStatusModel } from './deviceconfigurationdevicestatus.model';
import { DeviceConfigurationDeviceOverviewModel } from './deviceconfigurationdeviceoverview.model';
import { DeviceConfigurationUserStatusModel } from './deviceconfigurationuserstatus.model';
import { DeviceConfigurationUserOverviewModel } from './deviceconfigurationuseroverview.model';
import { SettingStateDeviceSummaryCollection } from './settingstatedevicesummary.collection';
import { DeviceConfigurationAssignmentCollection } from './deviceconfigurationassignment.collection';
import { DeviceConfigurationDeviceStatusCollection } from './deviceconfigurationdevicestatus.collection';
import { DeviceConfigurationDeviceOverviewCollection } from './deviceconfigurationdeviceoverview.collection';
import { DeviceConfigurationUserStatusCollection } from './deviceconfigurationuserstatus.collection';
import { DeviceConfigurationUserOverviewCollection } from './deviceconfigurationuseroverview.collection';
//#endregion

export class DeviceConfigurationCollection<E extends DeviceConfiguration, M extends DeviceConfigurationModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}