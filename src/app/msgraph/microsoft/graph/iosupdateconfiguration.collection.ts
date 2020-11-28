import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationCollection } from './deviceconfiguration.collection';
import { DayOfWeek } from './dayofweek.enum';
import { IosUpdateConfiguration } from './iosupdateconfiguration.entity';
import { IosUpdateConfigurationModel } from './iosupdateconfiguration.model';
//#endregion

export class IosUpdateConfigurationCollection<E extends IosUpdateConfiguration, M extends IosUpdateConfigurationModel<E>> extends DeviceConfigurationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}