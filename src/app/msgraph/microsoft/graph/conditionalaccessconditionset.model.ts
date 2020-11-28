import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
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
import { ConditionalAccessLocationsModel } from './conditionalaccesslocations.model';
import { ConditionalAccessPlatformsModel } from './conditionalaccessplatforms.model';
import { ConditionalAccessUsersModel } from './conditionalaccessusers.model';
import { ConditionalAccessApplicationsCollection } from './conditionalaccessapplications.collection';
import { ConditionalAccessConditionSetCollection } from './conditionalaccessconditionset.collection';
import { ConditionalAccessLocationsCollection } from './conditionalaccesslocations.collection';
import { ConditionalAccessPlatformsCollection } from './conditionalaccessplatforms.collection';
import { ConditionalAccessUsersCollection } from './conditionalaccessusers.collection';
//#endregion

export class ConditionalAccessConditionSetModel<E extends ConditionalAccessConditionSet> extends ODataModel<E> {
  //#region ODataApi Properties
  applications?: ConditionalAccessApplicationsModel<ConditionalAccessApplications>;
  clientAppTypes: ConditionalAccessClientApp;
  locations?: ConditionalAccessLocationsModel<ConditionalAccessLocations>;
  platforms?: ConditionalAccessPlatformsModel<ConditionalAccessPlatforms>;
  signInRiskLevels: RiskLevel;
  users: ConditionalAccessUsersModel<ConditionalAccessUsers>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}