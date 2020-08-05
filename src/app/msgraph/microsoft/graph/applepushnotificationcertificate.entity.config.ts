import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ApplePushNotificationCertificate } from './applepushnotificationcertificate.entity';
//#endregion

export const ApplePushNotificationCertificateConfig = {
  name: "applePushNotificationCertificate",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    appleIdentifier: {type: 'Edm.String'},
    topicIdentifier: {type: 'Edm.String'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    expirationDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    certificate: {type: 'Edm.String'}
  }
} as EntityConfig<ApplePushNotificationCertificate>;