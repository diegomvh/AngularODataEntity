import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceConfiguration } from './deviceconfiguration.entity';
import { MiracastChannel } from './miracastchannel.enum';
import { WelcomeScreenMeetingInformation } from './welcomescreenmeetinginformation.enum';
import { DeviceConfigurationModel } from './deviceconfiguration.model';
import { DeviceConfigurationCollection } from './deviceconfiguration.collection';
//#endregion

export interface Windows10TeamGeneralConfiguration extends DeviceConfiguration {
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
}