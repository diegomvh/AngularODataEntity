import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { DeviceEnrollmentConfiguration } from './deviceenrollmentconfiguration.entity';
import { EnrollmentConfigurationAssignment } from './enrollmentconfigurationassignment.entity';
import { EnrollmentConfigurationAssignmentModel } from './enrollmentconfigurationassignment.model';
import { DeviceEnrollmentConfigurationCollection } from './deviceenrollmentconfiguration.collection';
import { EnrollmentConfigurationAssignmentCollection } from './enrollmentconfigurationassignment.collection';
//#endregion

export class DeviceEnrollmentConfigurationModel<E extends DeviceEnrollmentConfiguration> extends EntityModel<E> {
  //#region ODataApi Properties
  createdDateTime: Date;
  description?: string;
  displayName?: string;
  lastModifiedDateTime: Date;
  priority: number;
  version: number;
  assignments?: EnrollmentConfigurationAssignmentCollection<EnrollmentConfigurationAssignment, EnrollmentConfigurationAssignmentModel<EnrollmentConfigurationAssignment>>;
  //#endregion
  //#region ODataApi Actions
  public assign(enrollmentConfigurationAssignments: EnrollmentConfigurationAssignment[], options?: HttpOptions): Observable<any> {
    var res = this._action<{enrollmentConfigurationAssignments: EnrollmentConfigurationAssignment[]}, any>('microsoft.graph.assign');
    res.segment.entitySet('');
    return res.call({enrollmentConfigurationAssignments}, 'property', options) as Observable<any>;
  }
  public setPriority(priority: number, options?: HttpOptions): Observable<any> {
    var res = this._action<{priority: number}, any>('microsoft.graph.setPriority');
    res.segment.entitySet('');
    return res.call({priority}, 'property', options) as Observable<any>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}