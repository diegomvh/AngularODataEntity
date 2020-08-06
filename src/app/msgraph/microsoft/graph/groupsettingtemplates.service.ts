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
import { SettingTemplateValue } from './settingtemplatevalue.entity';
import { GroupSettingTemplate } from './groupsettingtemplate.entity';
//#endregion

@Injectable()
export class GroupSettingTemplatesService extends ODataEntityService<GroupSettingTemplate> {
  constructor(protected client: ODataClient) {
    super(client, 'groupSettingTemplates', 'microsoft.graph.groupSettingTemplate');
  }

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
