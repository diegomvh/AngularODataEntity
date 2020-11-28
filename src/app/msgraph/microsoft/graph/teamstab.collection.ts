import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { TeamsTabConfiguration } from './teamstabconfiguration.entity';
import { TeamsApp } from './teamsapp.entity';
import { TeamsTab } from './teamstab.entity';
import { TeamsTabConfigurationModel } from './teamstabconfiguration.model';
import { TeamsAppModel } from './teamsapp.model';
import { TeamsTabModel } from './teamstab.model';
import { TeamsTabConfigurationCollection } from './teamstabconfiguration.collection';
import { TeamsAppCollection } from './teamsapp.collection';
//#endregion

export class TeamsTabCollection<E extends TeamsTab, M extends TeamsTabModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}