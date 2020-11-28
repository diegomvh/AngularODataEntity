import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ChangeNotificationEncryptedContent } from './changenotificationencryptedcontent.complex';
import { ChangeNotificationEncryptedContentModel } from './changenotificationencryptedcontent.model';
import { ChangeNotificationEncryptedContentCollection } from './changenotificationencryptedcontent.collection';
//#endregion

export const ChangeNotificationEncryptedContentConfig = {
  name: "changeNotificationEncryptedContent",
  model: ChangeNotificationEncryptedContentModel,
  collection: ChangeNotificationEncryptedContentCollection,
  annotations: [],
  fields: {
    data: {type: 'Edm.String', nullable: false},
    dataKey: {type: 'Edm.String', nullable: false},
    dataSignature: {type: 'Edm.String', nullable: false},
    encryptionCertificateId: {type: 'Edm.String', nullable: false},
    encryptionCertificateThumbprint: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<ChangeNotificationEncryptedContent>;