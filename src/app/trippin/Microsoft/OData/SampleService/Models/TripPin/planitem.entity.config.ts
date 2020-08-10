﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlanItem } from './planitem.entity';
import { PlanItemModel } from './planitem.model';
import { PlanItemCollection } from './planitem.collection';
//#endregion

export const PlanItemConfig = {
  name: "PlanItem",
  model: PlanItemModel,
  collection: PlanItemCollection,
  annotations: [],
  fields: {
    PlanItemId: {type: 'Edm.Int32', key: true, ref: 'PlanItemId', nullable: false, annotations: [{"type":"Org.OData.Core.V1.Permissions","permissions":["Org.OData.Core.V1.Permission/Read"]}]},
    ConfirmationCode: {type: 'Edm.String'},
    StartsAt: {type: 'Edm.DateTimeOffset'},
    EndsAt: {type: 'Edm.DateTimeOffset'},
    Duration: {type: 'Edm.Duration'}
  }
} as EntityConfig<PlanItem>;