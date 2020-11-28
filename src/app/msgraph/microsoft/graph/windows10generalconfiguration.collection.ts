import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationCollection } from './deviceconfiguration.collection';
import { DefenderCloudBlockLevelType } from './defendercloudblockleveltype.enum';
import { DefenderMonitorFileActivity } from './defendermonitorfileactivity.enum';
import { DefenderPromptForSampleSubmission } from './defenderpromptforsamplesubmission.enum';
import { DefenderScanType } from './defenderscantype.enum';
import { DiagnosticDataSubmissionMode } from './diagnosticdatasubmissionmode.enum';
import { EdgeCookiePolicy } from './edgecookiepolicy.enum';
import { RequiredPasswordType } from './requiredpasswordtype.enum';
import { SafeSearchFilterType } from './safesearchfiltertype.enum';
import { StateManagementSetting } from './statemanagementsetting.enum';
import { VisibilitySetting } from './visibilitysetting.enum';
import { WeeklySchedule } from './weeklyschedule.enum';
import { WindowsSpotlightEnablementSettings } from './windowsspotlightenablementsettings.enum';
import { WindowsStartMenuAppListVisibilityType } from './windowsstartmenuapplistvisibilitytype.enum';
import { WindowsStartMenuModeType } from './windowsstartmenumodetype.enum';
import { DefenderDetectedMalwareActions } from './defenderdetectedmalwareactions.entity';
import { EdgeSearchEngineBase } from './edgesearchenginebase.entity';
import { Windows10NetworkProxyServer } from './windows10networkproxyserver.entity';
import { Windows10GeneralConfiguration } from './windows10generalconfiguration.entity';
import { DefenderDetectedMalwareActionsModel } from './defenderdetectedmalwareactions.model';
import { EdgeSearchEngineBaseModel } from './edgesearchenginebase.model';
import { Windows10NetworkProxyServerModel } from './windows10networkproxyserver.model';
import { Windows10GeneralConfigurationModel } from './windows10generalconfiguration.model';
import { DefenderDetectedMalwareActionsCollection } from './defenderdetectedmalwareactions.collection';
import { EdgeSearchEngineBaseCollection } from './edgesearchenginebase.collection';
import { Windows10NetworkProxyServerCollection } from './windows10networkproxyserver.collection';
//#endregion

export class Windows10GeneralConfigurationCollection<E extends Windows10GeneralConfiguration, M extends Windows10GeneralConfigurationModel<E>> extends DeviceConfigurationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}