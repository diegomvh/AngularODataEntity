import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlannerChecklistItem } from './plannerchecklistitem.entity';
//#endregion

export const PlannerChecklistItemConfig = {
  name: "plannerChecklistItem",
  annotations: [],
  fields: {
    isChecked: {type: 'Edm.Boolean'},
    title: {type: 'Edm.String'},
    orderHint: {type: 'Edm.String'},
    lastModifiedBy: {type: 'graph.identitySet'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'}
  }
} as EntityConfig<PlannerChecklistItem>;