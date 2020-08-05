import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { EducationOrganization } from './educationorganization.entity';
import { PhysicalAddress } from './physicaladdress.entity';
import { IdentitySet } from './identityset.entity';
import { EducationClass } from './educationclass.entity';
import { EducationUser } from './educationuser.entity';
//#endregion

export interface EducationSchool extends EducationOrganization {
  //#region ODataApi Properties
  principalEmail?: string;
  principalName?: string;
  externalPrincipalId?: string;
  lowestGrade?: string;
  highestGrade?: string;
  schoolNumber?: string;
  externalId?: string;
  phone?: string;
  fax?: string;
  createdBy?: IdentitySet;
  address?: PhysicalAddress;
  classes?: EducationClass[];
  users?: EducationUser[];
  //#endregion
}