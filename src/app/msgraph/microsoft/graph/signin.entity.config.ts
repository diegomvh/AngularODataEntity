import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SignIn } from './signin.entity';
//#endregion

export const SignInConfig = {
  name: "signIn",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    createdDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    userDisplayName: {type: 'Edm.String'},
    userPrincipalName: {type: 'Edm.String'},
    userId: {type: 'Edm.String', nullable: false},
    appId: {type: 'Edm.String'},
    appDisplayName: {type: 'Edm.String'},
    ipAddress: {type: 'Edm.String'},
    status: {type: 'graph.signInStatus'},
    clientAppUsed: {type: 'Edm.String'},
    deviceDetail: {type: 'graph.deviceDetail'},
    location: {type: 'graph.signInLocation'},
    correlationId: {type: 'Edm.String'},
    conditionalAccessStatus: {type: 'graph.conditionalAccessStatus'},
    appliedConditionalAccessPolicies: {type: 'graph.appliedConditionalAccessPolicy', collection: true},
    isInteractive: {type: 'Edm.Boolean'},
    riskDetail: {type: 'graph.riskDetail'},
    riskLevelAggregated: {type: 'graph.riskLevel'},
    riskLevelDuringSignIn: {type: 'graph.riskLevel'},
    riskState: {type: 'graph.riskState'},
    riskEventTypes: {type: 'graph.riskEventType', collection: true},
    riskEventTypes_v2: {type: 'Edm.String', collection: true},
    resourceDisplayName: {type: 'Edm.String'},
    resourceId: {type: 'Edm.String'}
  }
} as EntityConfig<SignIn>;