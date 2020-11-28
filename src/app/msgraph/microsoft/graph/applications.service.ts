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
import { AddIn } from './addin.entity';
import { ApiApplication } from './apiapplication.entity';
import { AppRole } from './approle.entity';
import { InformationalUrl } from './informationalurl.entity';
import { KeyCredential } from './keycredential.entity';
import { OptionalClaims } from './optionalclaims.entity';
import { ParentalControlSettings } from './parentalcontrolsettings.entity';
import { PasswordCredential } from './passwordcredential.entity';
import { PublicClientApplication } from './publicclientapplication.entity';
import { RequiredResourceAccess } from './requiredresourceaccess.entity';
import { WebApplication } from './webapplication.entity';
import { DirectoryObject } from './directoryobject.entity';
import { Application } from './application.entity';
import { AddInModel } from './addin.model';
import { ApiApplicationModel } from './apiapplication.model';
import { AppRoleModel } from './approle.model';
import { InformationalUrlModel } from './informationalurl.model';
import { KeyCredentialModel } from './keycredential.model';
import { OptionalClaimsModel } from './optionalclaims.model';
import { ParentalControlSettingsModel } from './parentalcontrolsettings.model';
import { PasswordCredentialModel } from './passwordcredential.model';
import { PublicClientApplicationModel } from './publicclientapplication.model';
import { RequiredResourceAccessModel } from './requiredresourceaccess.model';
import { WebApplicationModel } from './webapplication.model';
import { DirectoryObjectModel } from './directoryobject.model';
import { ApplicationModel } from './application.model';
import { AddInCollection } from './addin.collection';
import { ApiApplicationCollection } from './apiapplication.collection';
import { AppRoleCollection } from './approle.collection';
import { InformationalUrlCollection } from './informationalurl.collection';
import { KeyCredentialCollection } from './keycredential.collection';
import { OptionalClaimsCollection } from './optionalclaims.collection';
import { ParentalControlSettingsCollection } from './parentalcontrolsettings.collection';
import { PasswordCredentialCollection } from './passwordcredential.collection';
import { PublicClientApplicationCollection } from './publicclientapplication.collection';
import { RequiredResourceAccessCollection } from './requiredresourceaccess.collection';
import { WebApplicationCollection } from './webapplication.collection';
import { DirectoryObjectCollection } from './directoryobject.collection';
import { ApplicationCollection } from './application.collection';
//#endregion

@Injectable()
export class ApplicationsService extends ODataEntityService<Application> {
  constructor(protected client: ODataClient) {
    super(client, 'applications', 'microsoft.graph.application');
  }

  //#region ODataApi Model
  applicationModel(): ApplicationModel<Application> {
    return super.model() as ApplicationModel<Application>;
  }
  //#endregion
  //#region ODataApi Collection
  applicationCollection(): ApplicationCollection<Application, ApplicationModel<Application>> {
    return super.collection() as ApplicationCollection<Application, ApplicationModel<Application>>;
  }
  //#endregion
  //#region ODataApi Actions
  public addKey(entity: EntityKey<Application>): ODataActionResource<{keyCredential: KeyCredential, passwordCredential: PasswordCredential, proof: string}, KeyCredential> {
    const resource = this.entity(entity).action<{keyCredential: KeyCredential, passwordCredential: PasswordCredential, proof: string}, KeyCredential>('microsoft.graph.addKey');
    return resource;
  }
  public addPassword(entity: EntityKey<Application>): ODataActionResource<{passwordCredential: PasswordCredential}, PasswordCredential> {
    const resource = this.entity(entity).action<{passwordCredential: PasswordCredential}, PasswordCredential>('microsoft.graph.addPassword');
    return resource;
  }
  public removeKey(entity: EntityKey<Application>): ODataActionResource<{keyId: string, proof: string}, any> {
    const resource = this.entity(entity).action<{keyId: string, proof: string}, any>('microsoft.graph.removeKey');
    return resource;
  }
  public removePassword(entity: EntityKey<Application>): ODataActionResource<{keyId: string}, any> {
    const resource = this.entity(entity).action<{keyId: string}, any>('microsoft.graph.removePassword');
    return resource;
  }
  //#endregion
  //#region ODataApi Functions
  public delta(): ODataFunctionResource<null, Application> {
    const resource = this.entities().function<null, Application>('microsoft.graph.delta');
    return resource;
  }
  //#endregion
  //#region ODataApi Navigations
  public createdOnBehalfOf(entity: EntityKey<Application>): ODataNavigationPropertyResource<DirectoryObject> {
    return this.entity(entity).navigationProperty<DirectoryObject>('createdOnBehalfOf');
  }
  public owners(entity: EntityKey<Application>): ODataNavigationPropertyResource<DirectoryObject> {
    return this.entity(entity).navigationProperty<DirectoryObject>('owners');
  }
  //#endregion
}
