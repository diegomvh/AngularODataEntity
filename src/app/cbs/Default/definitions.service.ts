import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
import { 
  ODataClient,
  ODataEntitySetService, 
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
  Expand, 
  Select,
  HttpOptions,
  HttpActionOptions,
  HttpFunctionOptions,
  HttpNavigationPropertyOptions
} from 'angular-odata';//#endregion

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
export class DefinitionsService extends ODataEntitySetService<Definition> {
  constructor(protected client: ODataClient) {
    super(client, 'Definitions', 'CBS.Website.ODataApi.Models.Definition');
  }
  //#region ODataApi Model
  definitionModel(attrs?: Partial<Definition>): DefinitionModel<Definition> {
    return this.entity().asModel<DefinitionModel<Definition>>(attrs || {});
  }//#endregion
  //#region ODataApi Collection
  definitionCollection(models?: Partial<Definition>[]): DefinitionCollection<Definition, DefinitionModel<Definition>> {
    return this.entities().asCollection<DefinitionModel<Definition>, DefinitionCollection<Definition, DefinitionModel<Definition>>>(models || []);
  }//#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
