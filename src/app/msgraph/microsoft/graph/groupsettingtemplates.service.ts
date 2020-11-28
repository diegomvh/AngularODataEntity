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
import { SettingTemplateValue } from './settingtemplatevalue.complex';
import { GroupSettingTemplate } from './groupsettingtemplate.entity';
import { SettingTemplateValueModel } from './settingtemplatevalue.model';
import { GroupSettingTemplateModel } from './groupsettingtemplate.model';
import { SettingTemplateValueCollection } from './settingtemplatevalue.collection';
import { GroupSettingTemplateCollection } from './groupsettingtemplate.collection';
//#endregion

@Injectable()
export class GroupSettingTemplatesService extends ODataEntityService<GroupSettingTemplate> {
  constructor(protected client: ODataClient) {
    super(client, 'groupSettingTemplates', 'microsoft.graph.groupSettingTemplate');
  }

  //#region ODataApi Model
  groupSettingTemplateModel(): GroupSettingTemplateModel<GroupSettingTemplate> {
    return this.entity().asModel() as GroupSettingTemplateModel<GroupSettingTemplate>;
  }
  //#endregion
  //#region ODataApi Collection
  groupSettingTemplateCollection(): GroupSettingTemplateCollection<GroupSettingTemplate, GroupSettingTemplateModel<GroupSettingTemplate>> {
    return this.entities().asCollection() as GroupSettingTemplateCollection<GroupSettingTemplate, GroupSettingTemplateModel<GroupSettingTemplate>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
