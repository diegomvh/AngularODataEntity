import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { EducationStudent } from './educationstudent.entity';
import { EducationStudentModel } from './educationstudent.model';
import { EducationStudentCollection } from './educationstudent.collection';
//#endregion

export const EducationStudentConfig = {
  name: "educationStudent",
  model: EducationStudentModel,
  collection: EducationStudentCollection,
  annotations: [],
  fields: {
    birthDate: {type: 'Edm.Date'},
    externalId: {type: 'Edm.String'},
    gender: {type: 'graph.educationGender'},
    grade: {type: 'Edm.String'},
    graduationYear: {type: 'Edm.String'},
    studentNumber: {type: 'Edm.String'}
  }
} as EntityConfig<EducationStudent>;