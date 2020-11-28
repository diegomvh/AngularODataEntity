import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EducationOrganizationModel } from './educationorganization.model';
import { IdentitySet } from './identityset.complex';
import { PhysicalAddress } from './physicaladdress.complex';
import { EducationClass } from './educationclass.entity';
import { EducationUser } from './educationuser.entity';
import { EducationSchool } from './educationschool.entity';
import { IdentitySetModel } from './identityset.model';
import { PhysicalAddressModel } from './physicaladdress.model';
import { EducationClassModel } from './educationclass.model';
import { EducationUserModel } from './educationuser.model';
import { IdentitySetCollection } from './identityset.collection';
import { PhysicalAddressCollection } from './physicaladdress.collection';
import { EducationClassCollection } from './educationclass.collection';
import { EducationUserCollection } from './educationuser.collection';
import { EducationSchoolCollection } from './educationschool.collection';
//#endregion

export class EducationSchoolModel<E extends EducationSchool> extends EducationOrganizationModel<E> {
  //#region ODataApi Properties
  address?: PhysicalAddressModel<PhysicalAddress>;
  createdBy?: IdentitySetModel<IdentitySet>;
  externalId?: string;
  externalPrincipalId?: string;
  fax?: string;
  highestGrade?: string;
  lowestGrade?: string;
  phone?: string;
  principalEmail?: string;
  principalName?: string;
  schoolNumber?: string;
  classes?: EducationClassCollection<EducationClass, EducationClassModel<EducationClass>>;
  users?: EducationUserCollection<EducationUser, EducationUserModel<EducationUser>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}