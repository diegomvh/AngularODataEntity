import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationCollection } from './deviceconfiguration.collection';
import { Windows10SecureAssessmentConfiguration } from './windows10secureassessmentconfiguration.entity';
import { Windows10SecureAssessmentConfigurationModel } from './windows10secureassessmentconfiguration.model';
//#endregion

export class Windows10SecureAssessmentConfigurationCollection<E extends Windows10SecureAssessmentConfiguration, M extends Windows10SecureAssessmentConfigurationModel<E>> extends DeviceConfigurationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}