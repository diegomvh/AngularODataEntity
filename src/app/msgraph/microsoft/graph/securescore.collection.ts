import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { AverageComparativeScore } from './averagecomparativescore.entity';
import { ControlScore } from './controlscore.entity';
import { SecurityVendorInformation } from './securityvendorinformation.entity';
import { SecureScore } from './securescore.entity';
import { AverageComparativeScoreModel } from './averagecomparativescore.model';
import { ControlScoreModel } from './controlscore.model';
import { SecurityVendorInformationModel } from './securityvendorinformation.model';
import { SecureScoreModel } from './securescore.model';
import { AverageComparativeScoreCollection } from './averagecomparativescore.collection';
import { ControlScoreCollection } from './controlscore.collection';
import { SecurityVendorInformationCollection } from './securityvendorinformation.collection';
//#endregion

export class SecureScoreCollection<E extends SecureScore, M extends SecureScoreModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}