import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationModel } from './deviceconfiguration.model';
import { DayOfWeek } from './dayofweek.enum';
import { IosUpdateConfiguration } from './iosupdateconfiguration.entity';
import { IosUpdateConfigurationCollection } from './iosupdateconfiguration.collection';
//#endregion

export class IosUpdateConfigurationModel<E extends IosUpdateConfiguration> extends DeviceConfigurationModel<E> {
  //#region ODataApi Properties
  activeHoursEnd: Date;
  activeHoursStart: Date;
  scheduledInstallDays: DayOfWeek;
  utcTimeOffsetInMinutes?: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}