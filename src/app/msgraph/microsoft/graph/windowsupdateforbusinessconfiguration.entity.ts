import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceConfiguration } from './deviceconfiguration.entity';
import { AutomaticUpdateMode } from './automaticupdatemode.enum';
import { PrereleaseFeatures } from './prereleasefeatures.enum';
import { WindowsDeliveryOptimizationMode } from './windowsdeliveryoptimizationmode.enum';
import { WindowsUpdateType } from './windowsupdatetype.enum';
import { WindowsUpdateInstallScheduleType } from './windowsupdateinstallscheduletype.complex';
import { WindowsUpdateInstallScheduleTypeModel } from './windowsupdateinstallscheduletype.model';
import { DeviceConfigurationModel } from './deviceconfiguration.model';
import { WindowsUpdateInstallScheduleTypeCollection } from './windowsupdateinstallscheduletype.collection';
import { DeviceConfigurationCollection } from './deviceconfiguration.collection';
//#endregion

export interface WindowsUpdateForBusinessConfiguration extends DeviceConfiguration {
  //#region ODataApi Properties
  automaticUpdateMode: AutomaticUpdateMode;
  businessReadyUpdatesOnly: WindowsUpdateType;
  deliveryOptimizationMode: WindowsDeliveryOptimizationMode;
  driversExcluded: boolean;
  featureUpdatesDeferralPeriodInDays: number;
  featureUpdatesPaused: boolean;
  featureUpdatesPauseExpiryDateTime: Date;
  installationSchedule?: WindowsUpdateInstallScheduleType;
  microsoftUpdateServiceAllowed: boolean;
  prereleaseFeatures: PrereleaseFeatures;
  qualityUpdatesDeferralPeriodInDays: number;
  qualityUpdatesPaused: boolean;
  qualityUpdatesPauseExpiryDateTime: Date;
  //#endregion
}