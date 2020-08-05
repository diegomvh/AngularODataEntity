import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DriveRecipient } from './driverecipient.entity';
//#endregion

export const DriveRecipientConfig = {
  name: "driveRecipient",
  annotations: [],
  fields: {
    alias: {type: 'Edm.String'},
    email: {type: 'Edm.String'},
    objectId: {type: 'Edm.String'}
  }
} as EntityConfig<DriveRecipient>;