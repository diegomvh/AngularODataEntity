import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { EducationGender } from './educationgender.enum';
//#endregion

export interface EducationStudent {
  //#region ODataApi Properties
  graduationYear?: string;
  grade?: string;
  birthDate?: Date;
  gender?: EducationGender;
  studentNumber?: string;
  externalId?: string;
  //#endregion
}