import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { Teamwork } from './teamwork.entity';
import { WorkforceIntegration } from './workforceintegration.entity';
import { TeamworkModel } from './teamwork.model';
import { WorkforceIntegrationModel } from './workforceintegration.model';
import { WorkforceIntegrationCollection } from './workforceintegration.collection';
//#endregion

export class TeamworkCollection<E extends Teamwork, M extends TeamworkModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}