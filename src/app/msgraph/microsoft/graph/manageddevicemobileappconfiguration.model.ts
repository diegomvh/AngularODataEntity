import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { ManagedDeviceMobileAppConfiguration } from './manageddevicemobileappconfiguration.entity';
import { ManagedDeviceMobileAppConfigurationAssignment } from './manageddevicemobileappconfigurationassignment.entity';
import { ManagedDeviceMobileAppConfigurationDeviceStatus } from './manageddevicemobileappconfigurationdevicestatus.entity';
import { ManagedDeviceMobileAppConfigurationDeviceSummary } from './manageddevicemobileappconfigurationdevicesummary.entity';
import { ManagedDeviceMobileAppConfigurationUserStatus } from './manageddevicemobileappconfigurationuserstatus.entity';
import { ManagedDeviceMobileAppConfigurationUserSummary } from './manageddevicemobileappconfigurationusersummary.entity';
import { ManagedDeviceMobileAppConfigurationAssignmentModel } from './manageddevicemobileappconfigurationassignment.model';
import { ManagedDeviceMobileAppConfigurationDeviceStatusModel } from './manageddevicemobileappconfigurationdevicestatus.model';
import { ManagedDeviceMobileAppConfigurationDeviceSummaryModel } from './manageddevicemobileappconfigurationdevicesummary.model';
import { ManagedDeviceMobileAppConfigurationUserStatusModel } from './manageddevicemobileappconfigurationuserstatus.model';
import { ManagedDeviceMobileAppConfigurationUserSummaryModel } from './manageddevicemobileappconfigurationusersummary.model';
import { ManagedDeviceMobileAppConfigurationCollection } from './manageddevicemobileappconfiguration.collection';
import { ManagedDeviceMobileAppConfigurationAssignmentCollection } from './manageddevicemobileappconfigurationassignment.collection';
import { ManagedDeviceMobileAppConfigurationDeviceStatusCollection } from './manageddevicemobileappconfigurationdevicestatus.collection';
import { ManagedDeviceMobileAppConfigurationDeviceSummaryCollection } from './manageddevicemobileappconfigurationdevicesummary.collection';
import { ManagedDeviceMobileAppConfigurationUserStatusCollection } from './manageddevicemobileappconfigurationuserstatus.collection';
import { ManagedDeviceMobileAppConfigurationUserSummaryCollection } from './manageddevicemobileappconfigurationusersummary.collection';
//#endregion

export class ManagedDeviceMobileAppConfigurationModel<E extends ManagedDeviceMobileAppConfiguration> extends EntityModel<E> {
  //#region ODataApi Properties
  createdDateTime: Date;
  description?: string;
  displayName: string;
  lastModifiedDateTime: Date;
  targetedMobileApps?: string[];
  version: number;
  assignments?: ManagedDeviceMobileAppConfigurationAssignmentCollection<ManagedDeviceMobileAppConfigurationAssignment, ManagedDeviceMobileAppConfigurationAssignmentModel<ManagedDeviceMobileAppConfigurationAssignment>>;
  deviceStatuses?: ManagedDeviceMobileAppConfigurationDeviceStatusCollection<ManagedDeviceMobileAppConfigurationDeviceStatus, ManagedDeviceMobileAppConfigurationDeviceStatusModel<ManagedDeviceMobileAppConfigurationDeviceStatus>>;
  deviceStatusSummary?: ManagedDeviceMobileAppConfigurationDeviceSummaryModel<ManagedDeviceMobileAppConfigurationDeviceSummary>;
  userStatuses?: ManagedDeviceMobileAppConfigurationUserStatusCollection<ManagedDeviceMobileAppConfigurationUserStatus, ManagedDeviceMobileAppConfigurationUserStatusModel<ManagedDeviceMobileAppConfigurationUserStatus>>;
  userStatusSummary?: ManagedDeviceMobileAppConfigurationUserSummaryModel<ManagedDeviceMobileAppConfigurationUserSummary>;
  //#endregion
  //#region ODataApi Actions
  public assign(assignments: ManagedDeviceMobileAppConfigurationAssignment[], options?: HttpOptions): Observable<any> {
    var res = this._action<{assignments: ManagedDeviceMobileAppConfigurationAssignment[]}, any>('microsoft.graph.assign');
    res.segment.entitySet('');
    return res.call({assignments}, 'property', options) as Observable<any>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}