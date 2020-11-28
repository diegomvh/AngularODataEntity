import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataSingletonService, 
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
import { AdministrativeUnit } from './administrativeunit.entity';
import { Directory } from './directory.entity';
import { DirectoryObjectModel } from './directoryobject.model';
import { AdministrativeUnitModel } from './administrativeunit.model';
import { DirectoryModel } from './directory.model';
import { DirectoryObjectCollection } from './directoryobject.collection';
import { AdministrativeUnitCollection } from './administrativeunit.collection';
import { DirectoryCollection } from './directory.collection';
//#endregion

@Injectable()
export class DirectoryService extends ODataSingletonService<Directory> {
  constructor(protected client: ODataClient) {
    super(client, 'directory', 'microsoft.graph.directory');
  }
  
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}