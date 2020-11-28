import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationModel } from './deviceconfiguration.model';
import { MiracastChannel } from './miracastchannel.enum';
import { WelcomeScreenMeetingInformation } from './welcomescreenmeetinginformation.enum';
import { Windows10TeamGeneralConfiguration } from './windows10teamgeneralconfiguration.entity';
import { Windows10TeamGeneralConfigurationCollection } from './windows10teamgeneralconfiguration.collection';
//#endregion

export class Windows10TeamGeneralConfigurationModel<E extends Windows10TeamGeneralConfiguration> extends DeviceConfigurationModel<E> {
  //#region ODataApi Properties
  azureOperationalInsightsBlockTelemetry: boolean;
  azureOperationalInsightsWorkspaceId?: string;
  azureOperationalInsightsWorkspaceKey?: string;
  connectAppBlockAutoLaunch: boolean;
  maintenanceWindowBlocked: boolean;
  maintenanceWindowDurationInHours?: number;
  maintenanceWindowStartTime?: Date;
  miracastBlocked: boolean;
  miracastChannel: MiracastChannel;
  miracastRequirePin: boolean;
  settingsBlockMyMeetingsAndFiles: boolean;
  settingsBlockSessionResume: boolean;
  settingsBlockSigninSuggestions: boolean;
  settingsDefaultVolume?: number;
  settingsScreenTimeoutInMinutes?: number;
  settingsSessionTimeoutInMinutes?: number;
  settingsSleepTimeoutInMinutes?: number;
  welcomeScreenBackgroundImageUrl?: string;
  welcomeScreenBlockAutomaticWakeUp: boolean;
  welcomeScreenMeetingInformation: WelcomeScreenMeetingInformation;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}