import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlannerUserIds } from './planneruserids.entity';
import { PlannerUserIdsModel } from './planneruserids.model';
import { PlannerUserIdsCollection } from './planneruserids.collection';
//#endregion

export const PlannerUserIdsConfig = {
  name: "plannerUserIds",
  open: true,
  model: PlannerUserIdsModel,
  collection: PlannerUserIdsCollection,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<PlannerUserIds>;