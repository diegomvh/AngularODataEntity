import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationModel } from './deviceconfiguration.model';
import { AutomaticUpdateMode } from './automaticupdatemode.enum';
import { PrereleaseFeatures } from './prereleasefeatures.enum';
import { WindowsDeliveryOptimizationMode } from './windowsdeliveryoptimizationmode.enum';
import { WindowsUpdateType } from './windowsupdatetype.enum';
import { WindowsUpdateInstallScheduleType } from './windowsupdateinstallscheduletype.complex';
import { WindowsUpdateForBusinessConfiguration } from './windowsupdateforbusinessconfiguration.entity';
import { WindowsUpdateInstallScheduleTypeModel } from './windowsupdateinstallscheduletype.model';
import { WindowsUpdateInstallScheduleTypeCollection } from './windowsupdateinstallscheduletype.collection';
import { WindowsUpdateForBusinessConfigurationCollection } from './windowsupdateforbusinessconfiguration.collection';
//#endregion

export class WindowsUpdateForBusinessConfigurationModel<E extends WindowsUpdateForBusinessConfiguration> extends DeviceConfigurationModel<E> {
  //#region ODataApi Properties
  automaticUpdateMode: AutomaticUpdateMode;
  businessReadyUpdatesOnly: WindowsUpdateType;
  deliveryOptimizationMode: WindowsDeliveryOptimizationMode;
  driversExcluded: boolean;
  featureUpdatesDeferralPeriodInDays: number;
  featureUpdatesPaused: boolean;
  featureUpdatesPauseExpiryDateTime: Date;
  installationSchedule?: WindowsUpdateInstallScheduleTypeModel<WindowsUpdateInstallScheduleType>;
  microsoftUpdateServiceAllowed: boolean;
  prereleaseFeatures: PrereleaseFeatures;
  qualityUpdatesDeferralPeriodInDays: number;
  qualityUpdatesPaused: boolean;
  qualityUpdatesPauseExpiryDateTime: Date;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}