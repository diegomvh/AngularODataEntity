import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationModel } from './deviceconfiguration.model';
import { Windows10SecureAssessmentConfiguration } from './windows10secureassessmentconfiguration.entity';
import { Windows10SecureAssessmentConfigurationCollection } from './windows10secureassessmentconfiguration.collection';
//#endregion

export class Windows10SecureAssessmentConfigurationModel<E extends Windows10SecureAssessmentConfiguration> extends DeviceConfigurationModel<E> {
  //#region ODataApi Properties
  allowPrinting: boolean;
  allowScreenCapture: boolean;
  allowTextSuggestion: boolean;
  configurationAccount?: string;
  launchUri?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}