import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationModel } from './deviceconfiguration.model';
import { WindowsDefenderAdvancedThreatProtectionConfiguration } from './windowsdefenderadvancedthreatprotectionconfiguration.entity';
import { WindowsDefenderAdvancedThreatProtectionConfigurationCollection } from './windowsdefenderadvancedthreatprotectionconfiguration.collection';
//#endregion

export class WindowsDefenderAdvancedThreatProtectionConfigurationModel<E extends WindowsDefenderAdvancedThreatProtectionConfiguration> extends DeviceConfigurationModel<E> {
  //#region ODataApi Properties
  allowSampleSharing: boolean;
  enableExpeditedTelemetryReporting: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}