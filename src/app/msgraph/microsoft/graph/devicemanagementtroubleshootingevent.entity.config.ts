import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceManagementTroubleshootingEvent } from './devicemanagementtroubleshootingevent.entity';
import { DeviceManagementTroubleshootingEventModel } from './devicemanagementtroubleshootingevent.model';
import { DeviceManagementTroubleshootingEventCollection } from './devicemanagementtroubleshootingevent.collection';
//#endregion

export const DeviceManagementTroubleshootingEventConfig = {
  name: "deviceManagementTroubleshootingEvent",
  base: "microsoft.graph.entity",
  model: DeviceManagementTroubleshootingEventModel,
  collection: DeviceManagementTroubleshootingEventCollection,
  annotations: [],
  fields: {
    correlationId: {type: 'Edm.String'},
    eventDateTime: {type: 'Edm.DateTimeOffset', nullable: false}
  }
} as EntityConfig<DeviceManagementTroubleshootingEvent>;