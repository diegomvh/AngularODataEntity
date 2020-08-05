import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { DeviceManagementExchangeConnectorStatus } from './devicemanagementexchangeconnectorstatus.enum';
import { DeviceManagementExchangeConnectorType } from './devicemanagementexchangeconnectortype.enum';
//#endregion

export interface DeviceManagementExchangeConnector extends Entity {
  //#region ODataApi Properties
  lastSyncDateTime: Date;
  status: DeviceManagementExchangeConnectorStatus;
  primarySmtpAddress?: string;
  serverName?: string;
  connectorServerName?: string;
  exchangeConnectorType: DeviceManagementExchangeConnectorType;
  version?: string;
  exchangeAlias?: string;
  exchangeOrganization?: string;
  //#endregion
}