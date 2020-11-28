import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { EducationExternalSource } from './educationexternalsource.enum';
import { EducationUserRole } from './educationuserrole.enum';
import { AssignedLicense } from './assignedlicense.entity';
import { AssignedPlan } from './assignedplan.entity';
import { PasswordProfile } from './passwordprofile.entity';
import { ProvisionedPlan } from './provisionedplan.entity';
import { EducationStudent } from './educationstudent.entity';
import { EducationTeacher } from './educationteacher.entity';
import { IdentitySet } from './identityset.entity';
import { PhysicalAddress } from './physicaladdress.entity';
import { User } from './user.entity';
import { EducationClass } from './educationclass.entity';
import { EducationSchool } from './educationschool.entity';
import { AssignedLicenseModel } from './assignedlicense.model';
import { AssignedPlanModel } from './assignedplan.model';
import { PasswordProfileModel } from './passwordprofile.model';
import { ProvisionedPlanModel } from './provisionedplan.model';
import { EducationStudentModel } from './educationstudent.model';
import { EducationTeacherModel } from './educationteacher.model';
import { IdentitySetModel } from './identityset.model';
import { PhysicalAddressModel } from './physicaladdress.model';
import { EntityModel } from './entity.model';
import { UserModel } from './user.model';
import { EducationClassModel } from './educationclass.model';
import { EducationSchoolModel } from './educationschool.model';
import { AssignedLicenseCollection } from './assignedlicense.collection';
import { AssignedPlanCollection } from './assignedplan.collection';
import { PasswordProfileCollection } from './passwordprofile.collection';
import { ProvisionedPlanCollection } from './provisionedplan.collection';
import { EducationStudentCollection } from './educationstudent.collection';
import { EducationTeacherCollection } from './educationteacher.collection';
import { IdentitySetCollection } from './identityset.collection';
import { PhysicalAddressCollection } from './physicaladdress.collection';
import { EntityCollection } from './entity.collection';
import { UserCollection } from './user.collection';
import { EducationClassCollection } from './educationclass.collection';
import { EducationSchoolCollection } from './educationschool.collection';
//#endregion

export interface EducationUser extends Entity {
  //#region ODataApi Properties
  accountEnabled?: boolean;
  assignedLicenses: AssignedLicense[];
  assignedPlans: AssignedPlan[];
  businessPhones: string[];
  createdBy?: IdentitySet;
  department?: string;
  displayName?: string;
  externalSource?: EducationExternalSource;
  givenName?: string;
  mail?: string;
  mailingAddress?: PhysicalAddress;
  mailNickname?: string;
  middleName?: string;
  mobilePhone?: string;
  officeLocation?: string;
  passwordPolicies?: string;
  passwordProfile?: PasswordProfile;
  preferredLanguage?: string;
  primaryRole: EducationUserRole;
  provisionedPlans: ProvisionedPlan[];
  refreshTokensValidFromDateTime?: Date;
  residenceAddress?: PhysicalAddress;
  showInAddressList?: boolean;
  student?: EducationStudent;
  surname?: string;
  teacher?: EducationTeacher;
  usageLocation?: string;
  userPrincipalName?: string;
  userType?: string;
  classes?: EducationClass[];
  schools?: EducationSchool[];
  user?: User;
  //#endregion
}