import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
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
import { EducationUser } from './educationuser.entity';
import { EducationSchool } from './educationschool.entity';
import { AssignedLicenseModel } from './assignedlicense.model';
import { AssignedPlanModel } from './assignedplan.model';
import { PasswordProfileModel } from './passwordprofile.model';
import { ProvisionedPlanModel } from './provisionedplan.model';
import { EducationStudentModel } from './educationstudent.model';
import { EducationTeacherModel } from './educationteacher.model';
import { IdentitySetModel } from './identityset.model';
import { PhysicalAddressModel } from './physicaladdress.model';
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
import { UserCollection } from './user.collection';
import { EducationClassCollection } from './educationclass.collection';
import { EducationUserCollection } from './educationuser.collection';
import { EducationSchoolCollection } from './educationschool.collection';
//#endregion

export class EducationUserModel<E extends EducationUser> extends EntityModel<E> {
  //#region ODataApi Properties
  accountEnabled?: boolean;
  assignedLicenses: AssignedLicenseCollection<AssignedLicense, AssignedLicenseModel<AssignedLicense>>;
  assignedPlans: AssignedPlanCollection<AssignedPlan, AssignedPlanModel<AssignedPlan>>;
  businessPhones: string[];
  createdBy?: IdentitySetModel<IdentitySet>;
  department?: string;
  displayName?: string;
  externalSource?: EducationExternalSource;
  givenName?: string;
  mail?: string;
  mailingAddress?: PhysicalAddressModel<PhysicalAddress>;
  mailNickname?: string;
  middleName?: string;
  mobilePhone?: string;
  officeLocation?: string;
  passwordPolicies?: string;
  passwordProfile?: PasswordProfileModel<PasswordProfile>;
  preferredLanguage?: string;
  primaryRole: EducationUserRole;
  provisionedPlans: ProvisionedPlanCollection<ProvisionedPlan, ProvisionedPlanModel<ProvisionedPlan>>;
  refreshTokensValidFromDateTime?: Date;
  residenceAddress?: PhysicalAddressModel<PhysicalAddress>;
  showInAddressList?: boolean;
  student?: EducationStudentModel<EducationStudent>;
  surname?: string;
  teacher?: EducationTeacherModel<EducationTeacher>;
  usageLocation?: string;
  userPrincipalName?: string;
  userType?: string;
  classes?: EducationClassCollection<EducationClass, EducationClassModel<EducationClass>>;
  schools?: EducationSchoolCollection<EducationSchool, EducationSchoolModel<EducationSchool>>;
  user?: UserModel<User>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}