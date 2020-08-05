import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataService, 
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
import { PermissionScope } from './permissionscope.entity';
import { AppRole } from './approle.entity';
import { InformationalUrl } from './informationalurl.entity';
import { KeyCredential } from './keycredential.entity';
import { PasswordCredential } from './passwordcredential.entity';
import { SamlSingleSignOnSettings } from './samlsinglesignonsettings.entity';
import { DirectoryObject } from './directoryobject.entity';
import { OAuth2PermissionGrant } from './oauth2permissiongrant.entity';
import { ServicePrincipal } from './serviceprincipal.entity';
//#endregion

@Injectable()
export class ServicePrincipalsService extends ODataService<ServicePrincipal> {
  constructor(protected client: ODataClient) {
    super(client, 'servicePrincipals', 'microsoft.graph.servicePrincipal');
  }

  //#region ODataApi Actions
  public addKey(entity: EntityKey<ServicePrincipal>): ODataActionResource<{keyCredential: KeyCredential, passwordCredential: PasswordCredential, proof: string}, KeyCredential> {
    const resource = this.entity(entity).action<{keyCredential: KeyCredential, passwordCredential: PasswordCredential, proof: string}, KeyCredential>('microsoft.graph.addKey');
    return resource;
  }
  public addPassword(entity: EntityKey<ServicePrincipal>): ODataActionResource<{passwordCredential: PasswordCredential}, PasswordCredential> {
    const resource = this.entity(entity).action<{passwordCredential: PasswordCredential}, PasswordCredential>('microsoft.graph.addPassword');
    return resource;
  }
  public removeKey(entity: EntityKey<ServicePrincipal>): ODataActionResource<{keyId: string, proof: string}, any> {
    const resource = this.entity(entity).action<{keyId: string, proof: string}, any>('microsoft.graph.removeKey');
    return resource;
  }
  public removePassword(entity: EntityKey<ServicePrincipal>): ODataActionResource<{keyId: string}, any> {
    const resource = this.entity(entity).action<{keyId: string}, any>('microsoft.graph.removePassword');
    return resource;
  }
  //#endregion
  //#region ODataApi Functions
  public delta(): ODataFunctionResource<null, ServicePrincipal> {
    const resource = this.entities().function<null, ServicePrincipal>('microsoft.graph.delta');
    return resource;
  }
  //#endregion
  //#region ODataApi Navigations
  public createdObjects(entity: EntityKey<ServicePrincipal>): ODataNavigationPropertyResource<DirectoryObject> {
    return this.entity(entity).navigationProperty<DirectoryObject>('createdObjects');
  }
  public memberOf(entity: EntityKey<ServicePrincipal>): ODataNavigationPropertyResource<DirectoryObject> {
    return this.entity(entity).navigationProperty<DirectoryObject>('memberOf');
  }
  public oauth2PermissionGrants(entity: EntityKey<ServicePrincipal>): ODataNavigationPropertyResource<OAuth2PermissionGrant> {
    return this.entity(entity).navigationProperty<OAuth2PermissionGrant>('oauth2PermissionGrants');
  }
  public ownedObjects(entity: EntityKey<ServicePrincipal>): ODataNavigationPropertyResource<DirectoryObject> {
    return this.entity(entity).navigationProperty<DirectoryObject>('ownedObjects');
  }
  public owners(entity: EntityKey<ServicePrincipal>): ODataNavigationPropertyResource<DirectoryObject> {
    return this.entity(entity).navigationProperty<DirectoryObject>('owners');
  }
  public transitiveMemberOf(entity: EntityKey<ServicePrincipal>): ODataNavigationPropertyResource<DirectoryObject> {
    return this.entity(entity).navigationProperty<DirectoryObject>('transitiveMemberOf');
  }
  //#endregion
}
