import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { EducationRoot } from './educationroot.entity';
import { EducationRootModel } from './educationroot.model';
import { EducationRootCollection } from './educationroot.collection';
//#endregion

export const EducationRootConfig = {
  name: "educationRoot",
  base: "microsoft.graph.entity",
  model: EducationRootModel,
  collection: EducationRootCollection,
  annotations: [],
  fields: {
    classes: {type: 'graph.educationClass', collection: true, navigation: true},
    me: {type: 'graph.educationUser', navigation: true},
    schools: {type: 'graph.educationSchool', collection: true, navigation: true},
    users: {type: 'graph.educationUser', collection: true, navigation: true}
  }
} as EntityConfig<EducationRoot>;