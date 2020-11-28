import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { InferenceClassification } from './inferenceclassification.entity';
import { InferenceClassificationOverride } from './inferenceclassificationoverride.entity';
import { InferenceClassificationOverrideModel } from './inferenceclassificationoverride.model';
import { InferenceClassificationCollection } from './inferenceclassification.collection';
import { InferenceClassificationOverrideCollection } from './inferenceclassificationoverride.collection';
//#endregion

export class InferenceClassificationModel<E extends InferenceClassification> extends EntityModel<E> {
  //#region ODataApi Properties
  overrides?: InferenceClassificationOverrideCollection<InferenceClassificationOverride, InferenceClassificationOverrideModel<InferenceClassificationOverride>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}