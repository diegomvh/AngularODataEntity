import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { EducationUser } from './educationuser.entity';
import { EducationUserModel } from './educationuser.model';
import { EducationUserCollection } from './educationuser.collection';
//#endregion

export const EducationUserConfig = {
  name: "educationUser",
  base: "microsoft.graph.entity",
  model: EducationUserModel,
  collection: EducationUserCollection,
  annotations: [],
  fields: {
    accountEnabled: {type: 'Edm.Boolean'},
    assignedLicenses: {type: 'graph.assignedLicense', nullable: false, collection: true},
    assignedPlans: {type: 'graph.assignedPlan', nullable: false, collection: true},
    businessPhones: {type: 'Edm.String', nullable: false, collection: true},
    createdBy: {type: 'graph.identitySet'},
    department: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    externalSource: {type: 'graph.educationExternalSource'},
    givenName: {type: 'Edm.String'},
    mail: {type: 'Edm.String'},
    mailingAddress: {type: 'graph.physicalAddress'},
    mailNickname: {type: 'Edm.String'},
    middleName: {type: 'Edm.String'},
    mobilePhone: {type: 'Edm.String'},
    officeLocation: {type: 'Edm.String'},
    passwordPolicies: {type: 'Edm.String'},
    passwordProfile: {type: 'graph.passwordProfile'},
    preferredLanguage: {type: 'Edm.String'},
    primaryRole: {type: 'graph.educationUserRole', nullable: false},
    provisionedPlans: {type: 'graph.provisionedPlan', nullable: false, collection: true},
    refreshTokensValidFromDateTime: {type: 'Edm.DateTimeOffset'},
    residenceAddress: {type: 'graph.physicalAddress'},
    showInAddressList: {type: 'Edm.Boolean'},
    student: {type: 'graph.educationStudent'},
    surname: {type: 'Edm.String'},
    teacher: {type: 'graph.educationTeacher'},
    usageLocation: {type: 'Edm.String'},
    userPrincipalName: {type: 'Edm.String'},
    userType: {type: 'Edm.String'},
    classes: {type: 'graph.educationClass', collection: true, navigation: true},
    schools: {type: 'graph.educationSchool', collection: true, navigation: true},
    user: {type: 'graph.user', navigation: true}
  }
} as EntityConfig<EducationUser>;