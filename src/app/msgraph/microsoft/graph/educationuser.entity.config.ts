import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { EducationUser } from './educationuser.entity';
//#endregion

export const EducationUserConfig = {
  name: "educationUser",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    primaryRole: {type: 'graph.educationUserRole', nullable: false},
    middleName: {type: 'Edm.String'},
    externalSource: {type: 'graph.educationExternalSource'},
    residenceAddress: {type: 'graph.physicalAddress'},
    mailingAddress: {type: 'graph.physicalAddress'},
    student: {type: 'graph.educationStudent'},
    teacher: {type: 'graph.educationTeacher'},
    createdBy: {type: 'graph.identitySet'},
    accountEnabled: {type: 'Edm.Boolean'},
    assignedLicenses: {type: 'graph.assignedLicense', nullable: false, collection: true},
    assignedPlans: {type: 'graph.assignedPlan', nullable: false, collection: true},
    businessPhones: {type: 'Edm.String', nullable: false, collection: true},
    department: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    givenName: {type: 'Edm.String'},
    mail: {type: 'Edm.String'},
    mailNickname: {type: 'Edm.String'},
    mobilePhone: {type: 'Edm.String'},
    passwordPolicies: {type: 'Edm.String'},
    passwordProfile: {type: 'graph.passwordProfile'},
    officeLocation: {type: 'Edm.String'},
    preferredLanguage: {type: 'Edm.String'},
    provisionedPlans: {type: 'graph.provisionedPlan', nullable: false, collection: true},
    refreshTokensValidFromDateTime: {type: 'Edm.DateTimeOffset'},
    showInAddressList: {type: 'Edm.Boolean'},
    surname: {type: 'Edm.String'},
    usageLocation: {type: 'Edm.String'},
    userPrincipalName: {type: 'Edm.String'},
    userType: {type: 'Edm.String'},
    schools: {type: 'graph.educationSchool', collection: true, navigation: true},
    classes: {type: 'graph.educationClass', collection: true, navigation: true},
    user: {type: 'graph.user', navigation: true}
  }
} as EntityConfig<EducationUser>;