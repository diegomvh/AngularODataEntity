import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceConfiguration } from './deviceconfiguration.entity';
import { DeviceConfigurationModel } from './deviceconfiguration.model';
import { DeviceConfigurationCollection } from './deviceconfiguration.collection';
//#endregion

export interface Windows10SecureAssessmentConfiguration extends DeviceConfiguration {
  //#region ODataApi Properties
  allowPrinting: boolean;
  allowScreenCapture: boolean;
  allowTextSuggestion: boolean;
  configurationAccount?: string;
  launchUri?: string;
  //#endregion
}