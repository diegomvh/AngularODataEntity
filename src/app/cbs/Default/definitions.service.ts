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
import { DefinitionType } from '../CBS/Website/ODataApi/Models/definitiontype.enum';
import { LinkList } from '../CBS/Website/ODataApi/Models/linklist.entity';
import { Definition } from '../CBS/Website/ODataApi/Models/definition.entity';
//#endregion

@Injectable()
export class DefinitionsService extends ODataEntityService<Definition> {
  constructor(protected client: ODataClient) {
    super(client, 'Definitions', 'CBS.Website.ODataApi.Models.Definition');
  }

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
