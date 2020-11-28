import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { EducationSchool } from './educationschool.entity';
import { EducationSchoolModel } from './educationschool.model';
import { EducationSchoolCollection } from './educationschool.collection';
//#endregion

export const EducationSchoolConfig = {
  name: "educationSchool",
  base: "microsoft.graph.educationOrganization",
  model: EducationSchoolModel,
  collection: EducationSchoolCollection,
  annotations: [],
  fields: {
    address: {type: 'graph.physicalAddress'},
    createdBy: {type: 'graph.identitySet'},
    externalId: {type: 'Edm.String'},
    externalPrincipalId: {type: 'Edm.String'},
    fax: {type: 'Edm.String'},
    highestGrade: {type: 'Edm.String'},
    lowestGrade: {type: 'Edm.String'},
    phone: {type: 'Edm.String'},
    principalEmail: {type: 'Edm.String'},
    principalName: {type: 'Edm.String'},
    schoolNumber: {type: 'Edm.String'},
    classes: {type: 'graph.educationClass', collection: true, navigation: true},
    users: {type: 'graph.educationUser', collection: true, navigation: true}
  }
} as EntityConfig<EducationSchool>;