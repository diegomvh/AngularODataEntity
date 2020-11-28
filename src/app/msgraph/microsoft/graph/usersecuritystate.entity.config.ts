import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { UserSecurityState } from './usersecuritystate.entity';
import { UserSecurityStateModel } from './usersecuritystate.model';
import { UserSecurityStateCollection } from './usersecuritystate.collection';
//#endregion

export const UserSecurityStateConfig = {
  name: "userSecurityState",
  model: UserSecurityStateModel,
  collection: UserSecurityStateCollection,
  annotations: [],
  fields: {
    aadUserId: {type: 'Edm.String'},
    accountName: {type: 'Edm.String'},
    domainName: {type: 'Edm.String'},
    emailRole: {type: 'graph.emailRole'},
    isVpn: {type: 'Edm.Boolean'},
    logonDateTime: {type: 'Edm.DateTimeOffset'},
    logonId: {type: 'Edm.String'},
    logonIp: {type: 'Edm.String'},
    logonLocation: {type: 'Edm.String'},
    logonType: {type: 'graph.logonType'},
    onPremisesSecurityIdentifier: {type: 'Edm.String'},
    riskScore: {type: 'Edm.String'},
    userAccountType: {type: 'graph.userAccountSecurityType'},
    userPrincipalName: {type: 'Edm.String'}
  }
} as EntityConfig<UserSecurityState>;