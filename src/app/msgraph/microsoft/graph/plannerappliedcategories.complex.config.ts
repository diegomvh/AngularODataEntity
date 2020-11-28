import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlannerAppliedCategories } from './plannerappliedcategories.complex';
import { PlannerAppliedCategoriesModel } from './plannerappliedcategories.model';
import { PlannerAppliedCategoriesCollection } from './plannerappliedcategories.collection';
//#endregion

export const PlannerAppliedCategoriesConfig = {
  name: "plannerAppliedCategories",
  open: true,
  model: PlannerAppliedCategoriesModel,
  collection: PlannerAppliedCategoriesCollection,
  annotations: [],
  fields: {
    
  }
} as StructuredTypeConfig<PlannerAppliedCategories>;