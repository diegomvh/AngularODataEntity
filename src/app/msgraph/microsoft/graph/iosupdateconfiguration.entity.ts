import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceConfiguration } from './deviceconfiguration.entity';
import { DayOfWeek } from './dayofweek.enum';
import { DeviceConfigurationModel } from './deviceconfiguration.model';
import { DeviceConfigurationCollection } from './deviceconfiguration.collection';
//#endregion

export interface IosUpdateConfiguration extends DeviceConfiguration {
  //#region ODataApi Properties
  activeHoursEnd: Date;
  activeHoursStart: Date;
  scheduledInstallDays: DayOfWeek;
  utcTimeOffsetInMinutes?: number;
  //#endregion
}