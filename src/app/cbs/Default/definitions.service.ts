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
import { LinkList } from '../CBS/Website/ODataApi/Models/linklist.complex';
import { Definition } from '../CBS/Website/ODataApi/Models/definition.entity';
import { LinkListModel } from '../CBS/Website/ODataApi/Models/linklist.model';
import { DefinitionModel } from '../CBS/Website/ODataApi/Models/definition.model';
import { LinkListCollection } from '../CBS/Website/ODataApi/Models/linklist.collection';
import { DefinitionCollection } from '../CBS/Website/ODataApi/Models/definition.collection';
//#endregion

@Injectable()
export class DefinitionsService extends ODataEntityService<Definition> {
  constructor(protected client: ODataClient) {
    super(client, 'Definitions', 'CBS.Website.ODataApi.Models.Definition');
  }

  //#region ODataApi Model
  definitionModel(attrs?: Partial<Definition>): DefinitionModel<Definition> {
    return this.entity().asModel(attrs || {}) as DefinitionModel<Definition>;
  }
  //#endregion
  //#region ODataApi Collection
  definitionCollection(models?: Partial<Definition>[]): DefinitionCollection<Definition, DefinitionModel<Definition>> {
    return this.entities().asCollection(models || []) as DefinitionCollection<Definition, DefinitionModel<Definition>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
