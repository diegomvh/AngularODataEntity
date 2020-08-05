import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceConfiguration } from './deviceconfiguration.entity';
//#endregion

export interface Windows10SecureAssessmentConfiguration extends DeviceConfiguration {
  //#region ODataApi Properties
  launchUri?: string;
  configurationAccount?: string;
  allowPrinting: boolean;
  allowScreenCapture: boolean;
  allowTextSuggestion: boolean;
  //#endregion
}