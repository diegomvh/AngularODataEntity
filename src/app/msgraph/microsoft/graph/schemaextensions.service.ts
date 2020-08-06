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
import { ExtensionSchemaProperty } from './extensionschemaproperty.entity';
import { SchemaExtension } from './schemaextension.entity';
//#endregion

@Injectable()
export class SchemaExtensionsService extends ODataEntityService<SchemaExtension> {
  constructor(protected client: ODataClient) {
    super(client, 'schemaExtensions', 'microsoft.graph.schemaExtension');
  }

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
