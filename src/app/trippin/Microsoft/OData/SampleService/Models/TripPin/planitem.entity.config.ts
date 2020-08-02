import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlanItem } from './planitem.entity';
//#endregion

export const PlanItemConfig = {
  name: "PlanItem",
  annotations: [],
  fields: {
    planItemId: {name: 'PlanItemId', type: 'Edm.Int32', key: true, ref: 'planItemId', nullable: false, annotations: [{"type":"Org.OData.Core.V1.Permissions","permissions":["Org.OData.Core.V1.Permission/Read"]}]},
    confirmationCode: {name: 'ConfirmationCode', type: 'Edm.String'},
    startsAt: {name: 'StartsAt', type: 'Edm.DateTimeOffset'},
    endsAt: {name: 'EndsAt', type: 'Edm.DateTimeOffset'},
    duration: {name: 'Duration', type: 'Edm.Duration'}
  }
} as EntityConfig<PlanItem>;