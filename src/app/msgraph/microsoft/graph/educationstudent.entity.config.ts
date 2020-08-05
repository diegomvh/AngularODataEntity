import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { EducationStudent } from './educationstudent.entity';
//#endregion

export const EducationStudentConfig = {
  name: "educationStudent",
  annotations: [],
  fields: {
    graduationYear: {type: 'Edm.String'},
    grade: {type: 'Edm.String'},
    birthDate: {type: 'Edm.Date'},
    gender: {type: 'graph.educationGender'},
    studentNumber: {type: 'Edm.String'},
    externalId: {type: 'Edm.String'}
  }
} as EntityConfig<EducationStudent>;