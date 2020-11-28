import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { EducationExternalSource } from './educationexternalsource.enum';
import { EducationUserRole } from './educationuserrole.enum';
import { AssignedLicense } from './assignedlicense.complex';
import { AssignedPlan } from './assignedplan.complex';
import { PasswordProfile } from './passwordprofile.complex';
import { ProvisionedPlan } from './provisionedplan.complex';
import { EducationStudent } from './educationstudent.complex';
import { EducationTeacher } from './educationteacher.complex';
import { IdentitySet } from './identityset.complex';
import { PhysicalAddress } from './physicaladdress.complex';
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
import { EducationUserModel } from './educationuser.model';
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
import { EducationSchoolCollection } from './educationschool.collection';
//#endregion

export class EducationUserCollection<E extends EducationUser, M extends EducationUserModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}