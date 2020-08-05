import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ConditionalAccessGrantControls } from './conditionalaccessgrantcontrols.entity';
//#endregion

export const ConditionalAccessGrantControlsConfig = {
  name: "conditionalAccessGrantControls",
  annotations: [],
  fields: {
    operator: {type: 'Edm.String'},
    builtInControls: {type: 'graph.conditionalAccessGrantControl', nullable: false, collection: true},
    customAuthenticationFactors: {type: 'Edm.String', nullable: false, collection: true},
    termsOfUse: {type: 'Edm.String', nullable: false, collection: true}
  }
} as EntityConfig<ConditionalAccessGrantControls>;