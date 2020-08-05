import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceConfiguration } from './deviceconfiguration.entity';
import { DayOfWeek } from './dayofweek.enum';
//#endregion

export interface IosUpdateConfiguration extends DeviceConfiguration {
  //#region ODataApi Properties
  activeHoursStart: Date;
  activeHoursEnd: Date;
  scheduledInstallDays: DayOfWeek;
  utcTimeOffsetInMinutes?: number;
  //#endregion
}