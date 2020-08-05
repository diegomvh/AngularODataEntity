import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceManagementTroubleshootingEvent } from './devicemanagementtroubleshootingevent.entity';
//#endregion

export const DeviceManagementTroubleshootingEventConfig = {
  name: "DeviceManagementTroubleshootingEvent",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    eventDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    correlationId: {type: 'Edm.String'}
  }
} as EntityConfig<DeviceManagementTroubleshootingEvent>;