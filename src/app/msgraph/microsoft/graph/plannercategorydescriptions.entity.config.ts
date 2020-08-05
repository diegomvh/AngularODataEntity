﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlannerCategoryDescriptions } from './plannercategorydescriptions.entity';
//#endregion

export const PlannerCategoryDescriptionsConfig = {
  name: "PlannerCategoryDescriptions",
  annotations: [],
  fields: {
    category1: {type: 'Edm.String'},
    category2: {type: 'Edm.String'},
    category3: {type: 'Edm.String'},
    category4: {type: 'Edm.String'},
    category5: {type: 'Edm.String'},
    category6: {type: 'Edm.String'}
  }
} as EntityConfig<PlannerCategoryDescriptions>;