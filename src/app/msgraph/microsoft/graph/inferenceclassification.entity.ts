import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { InferenceClassificationOverride } from './inferenceclassificationoverride.entity';
import { EntityModel } from './entity.model';
import { InferenceClassificationOverrideModel } from './inferenceclassificationoverride.model';
import { EntityCollection } from './entity.collection';
import { InferenceClassificationOverrideCollection } from './inferenceclassificationoverride.collection';
//#endregion

export interface InferenceClassification extends Entity {
  //#region ODataApi Properties
  overrides?: InferenceClassificationOverride[];
  //#endregion
}