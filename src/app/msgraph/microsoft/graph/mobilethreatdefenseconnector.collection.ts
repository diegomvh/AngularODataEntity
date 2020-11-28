import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { MobileThreatPartnerTenantState } from './mobilethreatpartnertenantstate.enum';
import { MobileThreatDefenseConnector } from './mobilethreatdefenseconnector.entity';
import { MobileThreatDefenseConnectorModel } from './mobilethreatdefenseconnector.model';
//#endregion

export class MobileThreatDefenseConnectorCollection<E extends MobileThreatDefenseConnector, M extends MobileThreatDefenseConnectorModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}