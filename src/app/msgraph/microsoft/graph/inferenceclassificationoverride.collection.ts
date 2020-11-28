import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { InferenceClassificationType } from './inferenceclassificationtype.enum';
import { EmailAddress } from './emailaddress.complex';
import { InferenceClassificationOverride } from './inferenceclassificationoverride.entity';
import { EmailAddressModel } from './emailaddress.model';
import { InferenceClassificationOverrideModel } from './inferenceclassificationoverride.model';
import { EmailAddressCollection } from './emailaddress.collection';
//#endregion

export class InferenceClassificationOverrideCollection<E extends InferenceClassificationOverride, M extends InferenceClassificationOverrideModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}