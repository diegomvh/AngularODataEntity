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
import { PublicClientApplication } from './publicclientapplication.entity';
import { InformationalUrl } from './informationalurl.entity';
import { KeyCredential } from './keycredential.entity';
import { OptionalClaims } from './optionalclaims.entity';
import { ParentalControlSettings } from './parentalcontrolsettings.entity';
import { PasswordCredential } from './passwordcredential.entity';
import { RequiredResourceAccess } from './requiredresourceaccess.entity';
import { WebApplication } from './webapplication.entity';
import { DirectoryObject } from './directoryobject.entity';
import { Application } from './application.entity';
//#endregion

@Injectable()
export class ApplicationsService extends ODataEntityService<Application> {
  constructor(protected client: ODataClient) {
    super(client, 'applications', 'microsoft.graph.application');
  }

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
