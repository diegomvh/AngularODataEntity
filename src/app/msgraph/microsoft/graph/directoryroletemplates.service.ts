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
import { DirectoryRoleTemplate } from './directoryroletemplate.entity';
import { DirectoryRoleTemplateModel } from './directoryroletemplate.model';
import { DirectoryRoleTemplateCollection } from './directoryroletemplate.collection';
//#endregion

@Injectable()
export class DirectoryRoleTemplatesService extends ODataEntityService<DirectoryRoleTemplate> {
  constructor(protected client: ODataClient) {
    super(client, 'directoryRoleTemplates', 'microsoft.graph.directoryRoleTemplate');
  }

  //#region ODataApi Model
  directoryRoleTemplateModel(): DirectoryRoleTemplateModel<DirectoryRoleTemplate> {
    return super.model() as DirectoryRoleTemplateModel<DirectoryRoleTemplate>;
  }
  //#endregion
  //#region ODataApi Collection
  directoryRoleTemplateCollection(): DirectoryRoleTemplateCollection<DirectoryRoleTemplate, DirectoryRoleTemplateModel<DirectoryRoleTemplate>> {
    return super.collection() as DirectoryRoleTemplateCollection<DirectoryRoleTemplate, DirectoryRoleTemplateModel<DirectoryRoleTemplate>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
