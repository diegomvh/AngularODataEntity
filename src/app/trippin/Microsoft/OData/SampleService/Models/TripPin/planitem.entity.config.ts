import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlanItem } from './planitem.entity';
//#endregion

export const PlanItemEntityConfig = {
  name: "PlanItem",
  annotations: [{"type":"Org.OData.Core.V1.Permissions","permissions":["Org.OData.Core.V1.Permission/Read"]}],
  fields: {
    PlanItemId: {type: 'number', key: true, ref: 'PlanItemId', nullable: false, annotations: [{"type":"Org.OData.Core.V1.Permissions","permissions":["Org.OData.Core.V1.Permission/Read"]}]},
    ConfirmationCode: {type: 'string'},
    StartsAt: {type: 'Date'},
    EndsAt: {type: 'Date'},
    Duration: {type: 'string'}
  }
} as EntityConfig<PlanItem>;