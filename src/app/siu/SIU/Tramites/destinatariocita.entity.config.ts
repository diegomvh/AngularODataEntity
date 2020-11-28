import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DestinatarioCita } from './destinatariocita.entity';
import { DestinatarioCitaModel } from './destinatariocita.model';
import { DestinatarioCitaCollection } from './destinatariocita.collection';
//#endregion

export const DestinatarioCitaConfig = {
  name: "DestinatarioCita",
  model: DestinatarioCitaModel,
  collection: DestinatarioCitaCollection,
  annotations: [],
  fields: {
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    oper: {type: 'Edm.String'}
  }
} as EntityConfig<DestinatarioCita>;