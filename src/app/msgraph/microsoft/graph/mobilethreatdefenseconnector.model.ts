import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { MobileThreatPartnerTenantState } from './mobilethreatpartnertenantstate.enum';
import { MobileThreatDefenseConnector } from './mobilethreatdefenseconnector.entity';
import { MobileThreatDefenseConnectorCollection } from './mobilethreatdefenseconnector.collection';
//#endregion

export class MobileThreatDefenseConnectorModel<E extends MobileThreatDefenseConnector> extends EntityModel<E> {
  //#region ODataApi Properties
  androidDeviceBlockedOnMissingPartnerData: boolean;
  androidEnabled: boolean;
  iosDeviceBlockedOnMissingPartnerData: boolean;
  iosEnabled: boolean;
  lastHeartbeatDateTime: Date;
  partnerState: MobileThreatPartnerTenantState;
  partnerUnresponsivenessThresholdInDays: number;
  partnerUnsupportedOsVersionBlocked: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}