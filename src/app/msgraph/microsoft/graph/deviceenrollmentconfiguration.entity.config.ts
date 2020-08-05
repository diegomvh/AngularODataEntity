import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceEnrollmentConfiguration } from './deviceenrollmentconfiguration.entity';
//#endregion

export const DeviceEnrollmentConfigurationConfig = {
  name: "deviceEnrollmentConfiguration",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    description: {type: 'Edm.String'},
    priority: {type: 'Edm.Int32', nullable: false},
    createdDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    version: {type: 'Edm.Int32', nullable: false},
    assignments: {type: 'graph.enrollmentConfigurationAssignment', collection: true, navigation: true}
  }
} as EntityConfig<DeviceEnrollmentConfiguration>;