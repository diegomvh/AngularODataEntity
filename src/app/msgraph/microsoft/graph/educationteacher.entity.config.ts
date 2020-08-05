import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { EducationTeacher } from './educationteacher.entity';
//#endregion

export const EducationTeacherConfig = {
  name: "EducationTeacher",
  annotations: [],
  fields: {
    teacherNumber: {type: 'Edm.String'},
    externalId: {type: 'Edm.String'}
  }
} as EntityConfig<EducationTeacher>;