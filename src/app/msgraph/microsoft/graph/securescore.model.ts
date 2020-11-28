import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { AverageComparativeScore } from './averagecomparativescore.complex';
import { ControlScore } from './controlscore.complex';
import { SecurityVendorInformation } from './securityvendorinformation.complex';
import { SecureScore } from './securescore.entity';
import { AverageComparativeScoreModel } from './averagecomparativescore.model';
import { ControlScoreModel } from './controlscore.model';
import { SecurityVendorInformationModel } from './securityvendorinformation.model';
import { AverageComparativeScoreCollection } from './averagecomparativescore.collection';
import { ControlScoreCollection } from './controlscore.collection';
import { SecurityVendorInformationCollection } from './securityvendorinformation.collection';
import { SecureScoreCollection } from './securescore.collection';
//#endregion

export class SecureScoreModel<E extends SecureScore> extends EntityModel<E> {
  //#region ODataApi Properties
  activeUserCount?: number;
  averageComparativeScores?: AverageComparativeScoreCollection<AverageComparativeScore, AverageComparativeScoreModel<AverageComparativeScore>>;
  azureTenantId: string;
  controlScores?: ControlScoreCollection<ControlScore, ControlScoreModel<ControlScore>>;
  createdDateTime?: Date;
  currentScore?: number;
  enabledServices?: string[];
  licensedUserCount?: number;
  maxScore?: number;
  vendorInformation?: SecurityVendorInformationModel<SecurityVendorInformation>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}