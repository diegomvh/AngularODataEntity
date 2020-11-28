import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { DeviceManagementExchangeConnectorStatus } from './devicemanagementexchangeconnectorstatus.enum';
import { DeviceManagementExchangeConnectorType } from './devicemanagementexchangeconnectortype.enum';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
//#endregion

export interface DeviceManagementExchangeConnector extends Entity {
  //#region ODataApi Properties
  connectorServerName?: string;
  exchangeAlias?: string;
  exchangeConnectorType: DeviceManagementExchangeConnectorType;
  exchangeOrganization?: string;
  lastSyncDateTime: Date;
  primarySmtpAddress?: string;
  serverName?: string;
  status: DeviceManagementExchangeConnectorStatus;
  version?: string;
  //#endregion
}