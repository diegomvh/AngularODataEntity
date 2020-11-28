import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { RemoteAssistancePartner } from './remoteassistancepartner.entity';
import { RemoteAssistancePartnerModel } from './remoteassistancepartner.model';
import { RemoteAssistancePartnerCollection } from './remoteassistancepartner.collection';
//#endregion

export const RemoteAssistancePartnerConfig = {
  name: "remoteAssistancePartner",
  base: "microsoft.graph.entity",
  model: RemoteAssistancePartnerModel,
  collection: RemoteAssistancePartnerCollection,
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    lastConnectionDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    onboardingStatus: {type: 'graph.remoteAssistanceOnboardingStatus', nullable: false},
    onboardingUrl: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<RemoteAssistancePartner>;