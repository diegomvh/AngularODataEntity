import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ChangeNotification } from './changenotification.entity';
//#endregion

export const ChangeNotificationConfig = {
  name: "ChangeNotification",
  annotations: [],
  fields: {
    id: {type: 'Edm.String'},
    subscriptionId: {type: 'Edm.Guid', nullable: false},
    subscriptionExpirationDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    clientState: {type: 'Edm.String'},
    changeType: {type: 'graph.changeType', nullable: false},
    resource: {type: 'Edm.String', nullable: false},
    tenantId: {type: 'Edm.Guid', nullable: false},
    resourceData: {type: 'graph.resourceData'}
  }
} as EntityConfig<ChangeNotification>;