import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RemoteAssistancePartner } from './remoteassistancepartner.entity';
//#endregion

export const RemoteAssistancePartnerConfig = {
  name: "remoteAssistancePartner",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    onboardingUrl: {type: 'Edm.String'},
    onboardingStatus: {type: 'graph.remoteAssistanceOnboardingStatus', nullable: false},
    lastConnectionDateTime: {type: 'Edm.DateTimeOffset', nullable: false}
  }
} as EntityConfig<RemoteAssistancePartner>;