import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceManagementExchangeConnector } from './devicemanagementexchangeconnector.entity';
//#endregion

export const DeviceManagementExchangeConnectorConfig = {
  name: "DeviceManagementExchangeConnector",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    lastSyncDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    status: {type: 'graph.deviceManagementExchangeConnectorStatus', nullable: false},
    primarySmtpAddress: {type: 'Edm.String'},
    serverName: {type: 'Edm.String'},
    connectorServerName: {type: 'Edm.String'},
    exchangeConnectorType: {type: 'graph.deviceManagementExchangeConnectorType', nullable: false},
    version: {type: 'Edm.String'},
    exchangeAlias: {type: 'Edm.String'},
    exchangeOrganization: {type: 'Edm.String'}
  }
} as EntityConfig<DeviceManagementExchangeConnector>;