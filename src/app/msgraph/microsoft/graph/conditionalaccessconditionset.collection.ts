import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RiskLevel } from './risklevel.enum';
import { ConditionalAccessClientApp } from './conditionalaccessclientapp.enum';
import { ConditionalAccessApplications } from './conditionalaccessapplications.entity';
import { ConditionalAccessConditionSet } from './conditionalaccessconditionset.entity';
import { ConditionalAccessLocations } from './conditionalaccesslocations.entity';
import { ConditionalAccessPlatforms } from './conditionalaccessplatforms.entity';
import { ConditionalAccessUsers } from './conditionalaccessusers.entity';
import { ConditionalAccessApplicationsModel } from './conditionalaccessapplications.model';
import { ConditionalAccessConditionSetModel } from './conditionalaccessconditionset.model';
import { ConditionalAccessLocationsModel } from './conditionalaccesslocations.model';
import { ConditionalAccessPlatformsModel } from './conditionalaccessplatforms.model';
import { ConditionalAccessUsersModel } from './conditionalaccessusers.model';
import { ConditionalAccessApplicationsCollection } from './conditionalaccessapplications.collection';
import { ConditionalAccessLocationsCollection } from './conditionalaccesslocations.collection';
import { ConditionalAccessPlatformsCollection } from './conditionalaccessplatforms.collection';
import { ConditionalAccessUsersCollection } from './conditionalaccessusers.collection';
//#endregion

export class ConditionalAccessConditionSetCollection<E extends ConditionalAccessConditionSet, M extends ConditionalAccessConditionSetModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}