import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { DeviceConfiguration } from './deviceconfiguration.entity';
import { SettingStateDeviceSummary } from './settingstatedevicesummary.entity';
import { DeviceConfigurationAssignment } from './deviceconfigurationassignment.entity';
import { DeviceConfigurationDeviceStatus } from './deviceconfigurationdevicestatus.entity';
import { DeviceConfigurationDeviceOverview } from './deviceconfigurationdeviceoverview.entity';
import { DeviceConfigurationUserStatus } from './deviceconfigurationuserstatus.entity';
import { DeviceConfigurationUserOverview } from './deviceconfigurationuseroverview.entity';
import { SettingStateDeviceSummaryModel } from './settingstatedevicesummary.model';
import { DeviceConfigurationAssignmentModel } from './deviceconfigurationassignment.model';
import { DeviceConfigurationDeviceStatusModel } from './deviceconfigurationdevicestatus.model';
import { DeviceConfigurationDeviceOverviewModel } from './deviceconfigurationdeviceoverview.model';
import { DeviceConfigurationUserStatusModel } from './deviceconfigurationuserstatus.model';
import { DeviceConfigurationUserOverviewModel } from './deviceconfigurationuseroverview.model';
import { DeviceConfigurationCollection } from './deviceconfiguration.collection';
import { SettingStateDeviceSummaryCollection } from './settingstatedevicesummary.collection';
import { DeviceConfigurationAssignmentCollection } from './deviceconfigurationassignment.collection';
import { DeviceConfigurationDeviceStatusCollection } from './deviceconfigurationdevicestatus.collection';
import { DeviceConfigurationDeviceOverviewCollection } from './deviceconfigurationdeviceoverview.collection';
import { DeviceConfigurationUserStatusCollection } from './deviceconfigurationuserstatus.collection';
import { DeviceConfigurationUserOverviewCollection } from './deviceconfigurationuseroverview.collection';
//#endregion

export class DeviceConfigurationModel<E extends DeviceConfiguration> extends EntityModel<E> {
  //#region ODataApi Properties
  createdDateTime: Date;
  description?: string;
  displayName: string;
  lastModifiedDateTime: Date;
  version: number;
  assignments?: DeviceConfigurationAssignmentCollection<DeviceConfigurationAssignment, DeviceConfigurationAssignmentModel<DeviceConfigurationAssignment>>;
  deviceSettingStateSummaries?: SettingStateDeviceSummaryCollection<SettingStateDeviceSummary, SettingStateDeviceSummaryModel<SettingStateDeviceSummary>>;
  deviceStatuses?: DeviceConfigurationDeviceStatusCollection<DeviceConfigurationDeviceStatus, DeviceConfigurationDeviceStatusModel<DeviceConfigurationDeviceStatus>>;
  deviceStatusOverview?: DeviceConfigurationDeviceOverviewModel<DeviceConfigurationDeviceOverview>;
  userStatuses?: DeviceConfigurationUserStatusCollection<DeviceConfigurationUserStatus, DeviceConfigurationUserStatusModel<DeviceConfigurationUserStatus>>;
  userStatusOverview?: DeviceConfigurationUserOverviewModel<DeviceConfigurationUserOverview>;
  //#endregion
  //#region ODataApi Actions
  public assign(assignments: DeviceConfigurationAssignment[], options?: HttpOptions): Observable<DeviceConfigurationAssignmentCollection<DeviceConfigurationAssignment, DeviceConfigurationAssignmentModel<DeviceConfigurationAssignment>>> {
    var res = this._action<{assignments: DeviceConfigurationAssignment[]}, DeviceConfigurationAssignment>('microsoft.graph.assign');
    res.segment.entitySet('');
    return res.call({assignments}, 'collection', options) as Observable<DeviceConfigurationAssignmentCollection<DeviceConfigurationAssignment, DeviceConfigurationAssignmentModel<DeviceConfigurationAssignment>>>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}