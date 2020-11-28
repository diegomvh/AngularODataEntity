import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { EducationTeacher } from './educationteacher.entity';
import { EducationTeacherModel } from './educationteacher.model';
import { EducationTeacherCollection } from './educationteacher.collection';
//#endregion

export const EducationTeacherConfig = {
  name: "educationTeacher",
  model: EducationTeacherModel,
  collection: EducationTeacherCollection,
  annotations: [],
  fields: {
    externalId: {type: 'Edm.String'},
    teacherNumber: {type: 'Edm.String'}
  }
} as EntityConfig<EducationTeacher>;