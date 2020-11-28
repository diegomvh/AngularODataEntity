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
import { TeamsTemplate } from './teamstemplate.entity';
import { TeamsTemplateModel } from './teamstemplate.model';
import { TeamsTemplateCollection } from './teamstemplate.collection';
//#endregion

@Injectable()
export class TeamsTemplatesService extends ODataEntityService<TeamsTemplate> {
  constructor(protected client: ODataClient) {
    super(client, 'teamsTemplates', 'microsoft.graph.teamsTemplate');
  }

  //#region ODataApi Model
  teamsTemplateModel(): TeamsTemplateModel<TeamsTemplate> {
    return this.entity().asModel() as TeamsTemplateModel<TeamsTemplate>;
  }
  //#endregion
  //#region ODataApi Collection
  teamsTemplateCollection(): TeamsTemplateCollection<TeamsTemplate, TeamsTemplateModel<TeamsTemplate>> {
    return this.entities().asCollection() as TeamsTemplateCollection<TeamsTemplate, TeamsTemplateModel<TeamsTemplate>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
