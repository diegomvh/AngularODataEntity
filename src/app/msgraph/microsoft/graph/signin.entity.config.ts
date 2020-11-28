import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SignIn } from './signin.entity';
import { SignInModel } from './signin.model';
import { SignInCollection } from './signin.collection';
//#endregion

export const SignInConfig = {
  name: "signIn",
  base: "microsoft.graph.entity",
  model: SignInModel,
  collection: SignInCollection,
  annotations: [],
  fields: {
    appDisplayName: {type: 'Edm.String'},
    appId: {type: 'Edm.String'},
    appliedConditionalAccessPolicies: {type: 'graph.appliedConditionalAccessPolicy', collection: true},
    clientAppUsed: {type: 'Edm.String'},
    conditionalAccessStatus: {type: 'graph.conditionalAccessStatus'},
    correlationId: {type: 'Edm.String'},
    createdDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    deviceDetail: {type: 'graph.deviceDetail'},
    ipAddress: {type: 'Edm.String'},
    isInteractive: {type: 'Edm.Boolean'},
    location: {type: 'graph.signInLocation'},
    resourceDisplayName: {type: 'Edm.String'},
    resourceId: {type: 'Edm.String'},
    riskDetail: {type: 'graph.riskDetail'},
    riskEventTypes: {type: 'graph.riskEventType', collection: true},
    riskEventTypes_v2: {type: 'Edm.String', collection: true},
    riskLevelAggregated: {type: 'graph.riskLevel'},
    riskLevelDuringSignIn: {type: 'graph.riskLevel'},
    riskState: {type: 'graph.riskState'},
    status: {type: 'graph.signInStatus'},
    userDisplayName: {type: 'Edm.String'},
    userId: {type: 'Edm.String', nullable: false},
    userPrincipalName: {type: 'Edm.String'}
  }
} as EntityConfig<SignIn>;