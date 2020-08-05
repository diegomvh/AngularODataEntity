import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CommsNotification } from './commsnotification.entity';
//#endregion

export const CommsNotificationConfig = {
  name: "CommsNotification",
  open: true,
  annotations: [],
  fields: {
    changeType: {type: 'graph.changeType', nullable: false},
    resourceUrl: {type: 'Edm.String', nullable: false}
  }
} as EntityConfig<CommsNotification>;