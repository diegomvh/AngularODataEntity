import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntityService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { OnPremisesProvisioningError } from './onpremisesprovisioningerror.complex';
import { Phone } from './phone.complex';
import { PhysicalOfficeAddress } from './physicalofficeaddress.complex';
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
import { DirectoryObjectCollection } from './directoryobject.collection';
import { OrgContactCollection } from './orgcontact.collection';
//#endregion

@Injectable()
export class ContactsService extends ODataEntityService<OrgContact> {
  constructor(protected client: ODataClient) {
    super(client, 'contacts', 'microsoft.graph.orgContact');
  }

  //#region ODataApi Model
  orgContactModel(): OrgContactModel<OrgContact> {
    return this.entity().asModel() as OrgContactModel<OrgContact>;
  }
  //#endregion
  //#region ODataApi Collection
  orgContactCollection(): OrgContactCollection<OrgContact, OrgContactModel<OrgContact>> {
    return this.entities().asCollection() as OrgContactCollection<OrgContact, OrgContactModel<OrgContact>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public delta(): ODataFunctionResource<null, OrgContact> {
    const resource = this.entities().function<null, OrgContact>('microsoft.graph.delta');
    return resource;
  }
  //#endregion
  //#region ODataApi Navigations
  public directReports(entity: EntityKey<OrgContact>): ODataNavigationPropertyResource<DirectoryObject> {
    return this.entity(entity).navigationProperty<DirectoryObject>('directReports');
  }
  public manager(entity: EntityKey<OrgContact>): ODataNavigationPropertyResource<DirectoryObject> {
    return this.entity(entity).navigationProperty<DirectoryObject>('manager');
  }
  public memberOf(entity: EntityKey<OrgContact>): ODataNavigationPropertyResource<DirectoryObject> {
    return this.entity(entity).navigationProperty<DirectoryObject>('memberOf');
  }
  public transitiveMemberOf(entity: EntityKey<OrgContact>): ODataNavigationPropertyResource<DirectoryObject> {
    return this.entity(entity).navigationProperty<DirectoryObject>('transitiveMemberOf');
  }
  //#endregion
}
