import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SoftwareUpdateStatusSummary } from './softwareupdatestatussummary.entity';
//#endregion

export const SoftwareUpdateStatusSummaryConfig = {
  name: "softwareUpdateStatusSummary",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    compliantDeviceCount: {type: 'Edm.Int32', nullable: false},
    nonCompliantDeviceCount: {type: 'Edm.Int32', nullable: false},
    remediatedDeviceCount: {type: 'Edm.Int32', nullable: false},
    errorDeviceCount: {type: 'Edm.Int32', nullable: false},
    unknownDeviceCount: {type: 'Edm.Int32', nullable: false},
    conflictDeviceCount: {type: 'Edm.Int32', nullable: false},
    notApplicableDeviceCount: {type: 'Edm.Int32', nullable: false},
    compliantUserCount: {type: 'Edm.Int32', nullable: false},
    nonCompliantUserCount: {type: 'Edm.Int32', nullable: false},
    remediatedUserCount: {type: 'Edm.Int32', nullable: false},
    errorUserCount: {type: 'Edm.Int32', nullable: false},
    unknownUserCount: {type: 'Edm.Int32', nullable: false},
    conflictUserCount: {type: 'Edm.Int32', nullable: false},
    notApplicableUserCount: {type: 'Edm.Int32', nullable: false}
  }
} as EntityConfig<SoftwareUpdateStatusSummary>;