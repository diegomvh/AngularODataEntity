import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceEnrollmentConfigurationCollection } from './deviceenrollmentconfiguration.collection';
import { Enablement } from './enablement.enum';
import { WindowsHelloForBusinessPinUsage } from './windowshelloforbusinesspinusage.enum';
import { DeviceEnrollmentWindowsHelloForBusinessConfiguration } from './deviceenrollmentwindowshelloforbusinessconfiguration.entity';
import { DeviceEnrollmentWindowsHelloForBusinessConfigurationModel } from './deviceenrollmentwindowshelloforbusinessconfiguration.model';
//#endregion

export class DeviceEnrollmentWindowsHelloForBusinessConfigurationCollection<E extends DeviceEnrollmentWindowsHelloForBusinessConfiguration, M extends DeviceEnrollmentWindowsHelloForBusinessConfigurationModel<E>> extends DeviceEnrollmentConfigurationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}