import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ApplePushNotificationCertificate } from './applepushnotificationcertificate.entity';
import { ApplePushNotificationCertificateModel } from './applepushnotificationcertificate.model';
import { ApplePushNotificationCertificateCollection } from './applepushnotificationcertificate.collection';
//#endregion

export const ApplePushNotificationCertificateConfig = {
  name: "applePushNotificationCertificate",
  base: "microsoft.graph.entity",
  model: ApplePushNotificationCertificateModel,
  collection: ApplePushNotificationCertificateCollection,
  annotations: [],
  fields: {
    appleIdentifier: {type: 'Edm.String'},
    certificate: {type: 'Edm.String'},
    expirationDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    topicIdentifier: {type: 'Edm.String'}
  }
} as EntityConfig<ApplePushNotificationCertificate>;