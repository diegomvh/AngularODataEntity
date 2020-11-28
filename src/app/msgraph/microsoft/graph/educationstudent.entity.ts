import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { EducationGender } from './educationgender.enum';
//#endregion

export interface EducationStudent {
  //#region ODataApi Properties
  birthDate?: Date;
  externalId?: string;
  gender?: EducationGender;
  grade?: string;
  graduationYear?: string;
  studentNumber?: string;
  //#endregion
}