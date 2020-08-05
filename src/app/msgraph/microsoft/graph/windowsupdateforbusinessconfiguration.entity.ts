import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceConfiguration } from './deviceconfiguration.entity';
import { AutomaticUpdateMode } from './automaticupdatemode.enum';
import { PrereleaseFeatures } from './prereleasefeatures.enum';
import { WindowsDeliveryOptimizationMode } from './windowsdeliveryoptimizationmode.enum';
import { WindowsUpdateType } from './windowsupdatetype.enum';
import { WindowsUpdateInstallScheduleType } from './windowsupdateinstallscheduletype.entity';
//#endregion

export interface WindowsUpdateForBusinessConfiguration extends DeviceConfiguration {
  //#region ODataApi Properties
  deliveryOptimizationMode: WindowsDeliveryOptimizationMode;
  prereleaseFeatures: PrereleaseFeatures;
  automaticUpdateMode: AutomaticUpdateMode;
  microsoftUpdateServiceAllowed: boolean;
  driversExcluded: boolean;
  installationSchedule?: WindowsUpdateInstallScheduleType;
  qualityUpdatesDeferralPeriodInDays: number;
  featureUpdatesDeferralPeriodInDays: number;
  qualityUpdatesPaused: boolean;
  featureUpdatesPaused: boolean;
  qualityUpdatesPauseExpiryDateTime: Date;
  featureUpdatesPauseExpiryDateTime: Date;
  businessReadyUpdatesOnly: WindowsUpdateType;
  //#endregion
}