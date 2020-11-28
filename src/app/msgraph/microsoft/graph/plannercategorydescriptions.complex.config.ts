import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlannerCategoryDescriptions } from './plannercategorydescriptions.complex';
import { PlannerCategoryDescriptionsModel } from './plannercategorydescriptions.model';
import { PlannerCategoryDescriptionsCollection } from './plannercategorydescriptions.collection';
//#endregion

export const PlannerCategoryDescriptionsConfig = {
  name: "plannerCategoryDescriptions",
  model: PlannerCategoryDescriptionsModel,
  collection: PlannerCategoryDescriptionsCollection,
  annotations: [],
  fields: {
    category1: {type: 'Edm.String'},
    category2: {type: 'Edm.String'},
    category3: {type: 'Edm.String'},
    category4: {type: 'Edm.String'},
    category5: {type: 'Edm.String'},
    category6: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<PlannerCategoryDescriptions>;