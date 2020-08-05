import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { InferenceClassificationOverride } from './inferenceclassificationoverride.entity';
//#endregion

export interface InferenceClassification extends Entity {
  //#region ODataApi Properties
  overrides?: InferenceClassificationOverride[];
  //#endregion
}