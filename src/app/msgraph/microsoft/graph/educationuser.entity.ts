import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { EducationUserRole } from './educationuserrole.enum';
import { EducationExternalSource } from './educationexternalsource.enum';
import { AssignedLicense } from './assignedlicense.entity';
import { AssignedPlan } from './assignedplan.entity';
import { PasswordProfile } from './passwordprofile.entity';
import { ProvisionedPlan } from './provisionedplan.entity';
import { PhysicalAddress } from './physicaladdress.entity';
import { IdentitySet } from './identityset.entity';
import { EducationStudent } from './educationstudent.entity';
import { EducationTeacher } from './educationteacher.entity';
import { User } from './user.entity';
import { EducationClass } from './educationclass.entity';
import { EducationSchool } from './educationschool.entity';
//#endregion

export interface EducationUser extends Entity {
  //#region ODataApi Properties
  primaryRole: EducationUserRole;
  middleName?: string;
  externalSource?: EducationExternalSource;
  residenceAddress?: PhysicalAddress;
  mailingAddress?: PhysicalAddress;
  student?: EducationStudent;
  teacher?: EducationTeacher;
  createdBy?: IdentitySet;
  accountEnabled?: boolean;
  assignedLicenses: AssignedLicense[];
  assignedPlans: AssignedPlan[];
  businessPhones: string[];
  department?: string;
  displayName?: string;
  givenName?: string;
  mail?: string;
  mailNickname?: string;
  mobilePhone?: string;
  passwordPolicies?: string;
  passwordProfile?: PasswordProfile;
  officeLocation?: string;
  preferredLanguage?: string;
  provisionedPlans: ProvisionedPlan[];
  refreshTokensValidFromDateTime?: Date;
  showInAddressList?: boolean;
  surname?: string;
  usageLocation?: string;
  userPrincipalName?: string;
  userType?: string;
  schools?: EducationSchool[];
  classes?: EducationClass[];
  user?: User;
  //#endregion
}