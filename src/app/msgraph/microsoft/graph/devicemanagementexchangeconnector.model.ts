import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { DeviceManagementExchangeConnectorStatus } from './devicemanagementexchangeconnectorstatus.enum';
import { DeviceManagementExchangeConnectorSyncType } from './devicemanagementexchangeconnectorsynctype.enum';
import { DeviceManagementExchangeConnectorType } from './devicemanagementexchangeconnectortype.enum';
import { DeviceManagementExchangeConnector } from './devicemanagementexchangeconnector.entity';
import { DeviceManagementExchangeConnectorCollection } from './devicemanagementexchangeconnector.collection';
//#endregion

export class DeviceManagementExchangeConnectorModel<E extends DeviceManagementExchangeConnector> extends EntityModel<E> {
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
  //#region ODataApi Actions
  public sync(syncType: DeviceManagementExchangeConnectorSyncType, options?: HttpOptions): Observable<any> {
    var res = this._action<{syncType: DeviceManagementExchangeConnectorSyncType}, any>('microsoft.graph.sync');
    res.segment.entitySet('');
    return res.call({syncType}, 'property', options) as Observable<any>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}