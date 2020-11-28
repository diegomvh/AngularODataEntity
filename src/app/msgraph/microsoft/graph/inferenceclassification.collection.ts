import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { InferenceClassification } from './inferenceclassification.entity';
import { InferenceClassificationOverride } from './inferenceclassificationoverride.entity';
import { InferenceClassificationModel } from './inferenceclassification.model';
import { InferenceClassificationOverrideModel } from './inferenceclassificationoverride.model';
import { InferenceClassificationOverrideCollection } from './inferenceclassificationoverride.collection';
//#endregion

export class InferenceClassificationCollection<E extends InferenceClassification, M extends InferenceClassificationModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}