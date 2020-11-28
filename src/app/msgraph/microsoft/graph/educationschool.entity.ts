import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { EducationOrganization } from './educationorganization.entity';
import { IdentitySet } from './identityset.complex';
import { PhysicalAddress } from './physicaladdress.complex';
import { EducationClass } from './educationclass.entity';
import { EducationUser } from './educationuser.entity';
import { IdentitySetModel } from './identityset.model';
import { PhysicalAddressModel } from './physicaladdress.model';
import { EducationClassModel } from './educationclass.model';
import { EducationUserModel } from './educationuser.model';
import { EducationOrganizationModel } from './educationorganization.model';
import { IdentitySetCollection } from './identityset.collection';
import { PhysicalAddressCollection } from './physicaladdress.collection';
import { EducationClassCollection } from './educationclass.collection';
import { EducationUserCollection } from './educationuser.collection';
import { EducationOrganizationCollection } from './educationorganization.collection';
//#endregion

export interface EducationSchool extends EducationOrganization {
  //#region ODataApi Properties
  address?: PhysicalAddress;
  createdBy?: IdentitySet;
  externalId?: string;
  externalPrincipalId?: string;
  fax?: string;
  highestGrade?: string;
  lowestGrade?: string;
  phone?: string;
  principalEmail?: string;
  principalName?: string;
  schoolNumber?: string;
  classes?: EducationClass[];
  users?: EducationUser[];
  //#endregion
}