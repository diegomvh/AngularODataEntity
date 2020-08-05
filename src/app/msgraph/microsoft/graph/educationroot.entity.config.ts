import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { EducationRoot } from './educationroot.entity';
//#endregion

export const EducationRootConfig = {
  name: "educationRoot",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    classes: {type: 'graph.educationClass', collection: true, navigation: true},
    schools: {type: 'graph.educationSchool', collection: true, navigation: true},
    users: {type: 'graph.educationUser', collection: true, navigation: true},
    me: {type: 'graph.educationUser', navigation: true}
  }
} as EntityConfig<EducationRoot>;