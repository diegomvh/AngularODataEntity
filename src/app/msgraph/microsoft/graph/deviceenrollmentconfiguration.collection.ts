import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { DeviceEnrollmentConfiguration } from './deviceenrollmentconfiguration.entity';
import { EnrollmentConfigurationAssignment } from './enrollmentconfigurationassignment.entity';
import { DeviceEnrollmentConfigurationModel } from './deviceenrollmentconfiguration.model';
import { EnrollmentConfigurationAssignmentModel } from './enrollmentconfigurationassignment.model';
import { EnrollmentConfigurationAssignmentCollection } from './enrollmentconfigurationassignment.collection';
//#endregion

export class DeviceEnrollmentConfigurationCollection<E extends DeviceEnrollmentConfiguration, M extends DeviceEnrollmentConfigurationModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}