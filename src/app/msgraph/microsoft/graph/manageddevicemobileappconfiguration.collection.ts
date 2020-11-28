import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { ManagedDeviceMobileAppConfiguration } from './manageddevicemobileappconfiguration.entity';
import { ManagedDeviceMobileAppConfigurationAssignment } from './manageddevicemobileappconfigurationassignment.entity';
import { ManagedDeviceMobileAppConfigurationDeviceStatus } from './manageddevicemobileappconfigurationdevicestatus.entity';
import { ManagedDeviceMobileAppConfigurationDeviceSummary } from './manageddevicemobileappconfigurationdevicesummary.entity';
import { ManagedDeviceMobileAppConfigurationUserStatus } from './manageddevicemobileappconfigurationuserstatus.entity';
import { ManagedDeviceMobileAppConfigurationUserSummary } from './manageddevicemobileappconfigurationusersummary.entity';
import { ManagedDeviceMobileAppConfigurationModel } from './manageddevicemobileappconfiguration.model';
import { ManagedDeviceMobileAppConfigurationAssignmentModel } from './manageddevicemobileappconfigurationassignment.model';
import { ManagedDeviceMobileAppConfigurationDeviceStatusModel } from './manageddevicemobileappconfigurationdevicestatus.model';
import { ManagedDeviceMobileAppConfigurationDeviceSummaryModel } from './manageddevicemobileappconfigurationdevicesummary.model';
import { ManagedDeviceMobileAppConfigurationUserStatusModel } from './manageddevicemobileappconfigurationuserstatus.model';
import { ManagedDeviceMobileAppConfigurationUserSummaryModel } from './manageddevicemobileappconfigurationusersummary.model';
import { ManagedDeviceMobileAppConfigurationAssignmentCollection } from './manageddevicemobileappconfigurationassignment.collection';
import { ManagedDeviceMobileAppConfigurationDeviceStatusCollection } from './manageddevicemobileappconfigurationdevicestatus.collection';
import { ManagedDeviceMobileAppConfigurationDeviceSummaryCollection } from './manageddevicemobileappconfigurationdevicesummary.collection';
import { ManagedDeviceMobileAppConfigurationUserStatusCollection } from './manageddevicemobileappconfigurationuserstatus.collection';
import { ManagedDeviceMobileAppConfigurationUserSummaryCollection } from './manageddevicemobileappconfigurationusersummary.collection';
//#endregion

export class ManagedDeviceMobileAppConfigurationCollection<E extends ManagedDeviceMobileAppConfiguration, M extends ManagedDeviceMobileAppConfigurationModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}