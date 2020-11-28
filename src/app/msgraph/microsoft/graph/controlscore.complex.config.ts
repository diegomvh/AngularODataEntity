import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ControlScore } from './controlscore.complex';
import { ControlScoreModel } from './controlscore.model';
import { ControlScoreCollection } from './controlscore.collection';
//#endregion

export const ControlScoreConfig = {
  name: "controlScore",
  open: true,
  model: ControlScoreModel,
  collection: ControlScoreCollection,
  annotations: [],
  fields: {
    controlCategory: {type: 'Edm.String'},
    controlName: {type: 'Edm.String'},
    description: {type: 'Edm.String'},
    score: {type: 'Edm.Double'}
  }
} as StructuredTypeConfig<ControlScore>;