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
import { DirectoryObject } from './directoryobject.entity';
import { DirectoryRole } from './directoryrole.entity';
//#endregion

@Injectable()
export class DirectoryRolesService extends ODataService<DirectoryRole> {
  constructor(protected client: ODataClient) {
    super(client, 'directoryRoles', 'microsoft.graph.directoryRole');
  }

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public delta(): ODataFunctionResource<null, DirectoryRole> {
    const resource = this.entities().function<null, DirectoryRole>('microsoft.graph.delta');
    return resource;
  }
  //#endregion
  //#region ODataApi Navigations
  public members(entity: EntityKey<DirectoryRole>): ODataNavigationPropertyResource<DirectoryObject> {
    return this.entity(entity).navigationProperty<DirectoryObject>('members');
  }
  //#endregion
}
