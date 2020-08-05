import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ControlScore } from './controlscore.entity';
//#endregion

export const ControlScoreConfig = {
  name: "controlScore",
  open: true,
  annotations: [],
  fields: {
    controlCategory: {type: 'Edm.String'},
    controlName: {type: 'Edm.String'},
    description: {type: 'Edm.String'},
    score: {type: 'Edm.Double'}
  }
} as EntityConfig<ControlScore>;