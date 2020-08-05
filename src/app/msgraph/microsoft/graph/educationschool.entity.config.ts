import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { EducationSchool } from './educationschool.entity';
//#endregion

export const EducationSchoolConfig = {
  name: "educationSchool",
  base: "microsoft.graph.educationOrganization",
  annotations: [],
  fields: {
    principalEmail: {type: 'Edm.String'},
    principalName: {type: 'Edm.String'},
    externalPrincipalId: {type: 'Edm.String'},
    lowestGrade: {type: 'Edm.String'},
    highestGrade: {type: 'Edm.String'},
    schoolNumber: {type: 'Edm.String'},
    externalId: {type: 'Edm.String'},
    phone: {type: 'Edm.String'},
    fax: {type: 'Edm.String'},
    createdBy: {type: 'graph.identitySet'},
    address: {type: 'graph.physicalAddress'},
    classes: {type: 'graph.educationClass', collection: true, navigation: true},
    users: {type: 'graph.educationUser', collection: true, navigation: true}
  }
} as EntityConfig<EducationSchool>;