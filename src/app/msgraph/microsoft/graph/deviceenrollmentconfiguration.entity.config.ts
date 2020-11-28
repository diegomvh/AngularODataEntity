import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceEnrollmentConfiguration } from './deviceenrollmentconfiguration.entity';
import { DeviceEnrollmentConfigurationModel } from './deviceenrollmentconfiguration.model';
import { DeviceEnrollmentConfigurationCollection } from './deviceenrollmentconfiguration.collection';
//#endregion

export const DeviceEnrollmentConfigurationConfig = {
  name: "deviceEnrollmentConfiguration",
  base: "microsoft.graph.entity",
  model: DeviceEnrollmentConfigurationModel,
  collection: DeviceEnrollmentConfigurationCollection,
  annotations: [],
  fields: {
    createdDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    description: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    priority: {type: 'Edm.Int32', nullable: false},
    version: {type: 'Edm.Int32', nullable: false},
    assignments: {type: 'graph.enrollmentConfigurationAssignment', collection: true, navigation: true}
  }
} as StructuredTypeConfig<DeviceEnrollmentConfiguration>;