import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlannerChecklistItem } from './plannerchecklistitem.complex';
import { PlannerChecklistItemModel } from './plannerchecklistitem.model';
import { PlannerChecklistItemCollection } from './plannerchecklistitem.collection';
//#endregion

export const PlannerChecklistItemConfig = {
  name: "plannerChecklistItem",
  model: PlannerChecklistItemModel,
  collection: PlannerChecklistItemCollection,
  annotations: [],
  fields: {
    isChecked: {type: 'Edm.Boolean'},
    lastModifiedBy: {type: 'graph.identitySet'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'},
    orderHint: {type: 'Edm.String'},
    title: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<PlannerChecklistItem>;