import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlanItem } from './planitem.entity';
//#endregion

export const PlanItemConfig = {
  name: "PlanItem",
  annotations: [],
  fields: {
    PlanItemId: {type: 'Number', key: true, ref: 'PlanItemId', nullable: false, annotations: [{"type":"Org.OData.Core.V1.Permissions","permissions":["Org.OData.Core.V1.Permission/Read"]}]},
    ConfirmationCode: {type: 'String'},
    StartsAt: {type: 'Date'},
    EndsAt: {type: 'Date'},
    Duration: {type: 'String'}
  }
} as EntityConfig<PlanItem>;