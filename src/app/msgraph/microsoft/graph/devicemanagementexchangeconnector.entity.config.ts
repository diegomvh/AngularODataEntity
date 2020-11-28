import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceManagementExchangeConnector } from './devicemanagementexchangeconnector.entity';
import { DeviceManagementExchangeConnectorModel } from './devicemanagementexchangeconnector.model';
import { DeviceManagementExchangeConnectorCollection } from './devicemanagementexchangeconnector.collection';
//#endregion

export const DeviceManagementExchangeConnectorConfig = {
  name: "deviceManagementExchangeConnector",
  base: "microsoft.graph.entity",
  model: DeviceManagementExchangeConnectorModel,
  collection: DeviceManagementExchangeConnectorCollection,
  annotations: [],
  fields: {
    connectorServerName: {type: 'Edm.String'},
    exchangeAlias: {type: 'Edm.String'},
    exchangeConnectorType: {type: 'graph.deviceManagementExchangeConnectorType', nullable: false},
    exchangeOrganization: {type: 'Edm.String'},
    lastSyncDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    primarySmtpAddress: {type: 'Edm.String'},
    serverName: {type: 'Edm.String'},
    status: {type: 'graph.deviceManagementExchangeConnectorStatus', nullable: false},
    version: {type: 'Edm.String'}
  }
} as EntityConfig<DeviceManagementExchangeConnector>;