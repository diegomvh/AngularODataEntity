import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { EnrollmentConfigurationAssignment } from './enrollmentconfigurationassignment.entity';
import { EntityModel } from './entity.model';
import { EnrollmentConfigurationAssignmentModel } from './enrollmentconfigurationassignment.model';
import { EntityCollection } from './entity.collection';
import { EnrollmentConfigurationAssignmentCollection } from './enrollmentconfigurationassignment.collection';
//#endregion

export interface DeviceEnrollmentConfiguration extends Entity {
  //#region ODataApi Properties
  createdDateTime: Date;
  description?: string;
  displayName?: string;
  lastModifiedDateTime: Date;
  priority: number;
  version: number;
  assignments?: EnrollmentConfigurationAssignment[];
  //#endregion
}