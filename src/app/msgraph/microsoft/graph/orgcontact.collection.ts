import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DirectoryObjectCollection } from './directoryobject.collection';
import { OnPremisesProvisioningError } from './onpremisesprovisioningerror.entity';
import { Phone } from './phone.entity';
import { PhysicalOfficeAddress } from './physicalofficeaddress.entity';
import { DirectoryObject } from './directoryobject.entity';
import { OrgContact } from './orgcontact.entity';
import { OnPremisesProvisioningErrorModel } from './onpremisesprovisioningerror.model';
import { PhoneModel } from './phone.model';
import { PhysicalOfficeAddressModel } from './physicalofficeaddress.model';
import { DirectoryObjectModel } from './directoryobject.model';
import { OrgContactModel } from './orgcontact.model';
import { OnPremisesProvisioningErrorCollection } from './onpremisesprovisioningerror.collection';
import { PhoneCollection } from './phone.collection';
import { PhysicalOfficeAddressCollection } from './physicalofficeaddress.collection';
//#endregion

export class OrgContactCollection<E extends OrgContact, M extends OrgContactModel<E>> extends DirectoryObjectCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public delta(options?: HttpOptions): Observable<OrgContactCollection<OrgContact, OrgContactModel<OrgContact>>> {
    var res = this._function<null, OrgContact>('microsoft.graph.delta');
    res.segment.entitySet('contacts');
    return res.call(null, 'collection', options) as Observable<OrgContactCollection<OrgContact, OrgContactModel<OrgContact>>>;
  }
  //#endregion
}