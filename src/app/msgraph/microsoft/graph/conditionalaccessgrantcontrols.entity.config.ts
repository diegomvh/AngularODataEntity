import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ConditionalAccessGrantControls } from './conditionalaccessgrantcontrols.entity';
import { ConditionalAccessGrantControlsModel } from './conditionalaccessgrantcontrols.model';
import { ConditionalAccessGrantControlsCollection } from './conditionalaccessgrantcontrols.collection';
//#endregion

export const ConditionalAccessGrantControlsConfig = {
  name: "conditionalAccessGrantControls",
  model: ConditionalAccessGrantControlsModel,
  collection: ConditionalAccessGrantControlsCollection,
  annotations: [],
  fields: {
    builtInControls: {type: 'graph.conditionalAccessGrantControl', nullable: false, collection: true},
    customAuthenticationFactors: {type: 'Edm.String', nullable: false, collection: true},
    operator: {type: 'Edm.String'},
    termsOfUse: {type: 'Edm.String', nullable: false, collection: true}
  }
} as EntityConfig<ConditionalAccessGrantControls>;