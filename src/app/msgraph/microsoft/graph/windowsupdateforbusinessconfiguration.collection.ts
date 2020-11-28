import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationCollection } from './deviceconfiguration.collection';
import { AutomaticUpdateMode } from './automaticupdatemode.enum';
import { PrereleaseFeatures } from './prereleasefeatures.enum';
import { WindowsDeliveryOptimizationMode } from './windowsdeliveryoptimizationmode.enum';
import { WindowsUpdateType } from './windowsupdatetype.enum';
import { WindowsUpdateInstallScheduleType } from './windowsupdateinstallscheduletype.complex';
import { WindowsUpdateForBusinessConfiguration } from './windowsupdateforbusinessconfiguration.entity';
import { WindowsUpdateInstallScheduleTypeModel } from './windowsupdateinstallscheduletype.model';
import { WindowsUpdateForBusinessConfigurationModel } from './windowsupdateforbusinessconfiguration.model';
import { WindowsUpdateInstallScheduleTypeCollection } from './windowsupdateinstallscheduletype.collection';
//#endregion

export class WindowsUpdateForBusinessConfigurationCollection<E extends WindowsUpdateForBusinessConfiguration, M extends WindowsUpdateForBusinessConfigurationModel<E>> extends DeviceConfigurationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}