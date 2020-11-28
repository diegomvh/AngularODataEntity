import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TemaCita } from './temacita.entity';
import { TemaCitaModel } from './temacita.model';
import { TemaCitaCollection } from './temacita.collection';
//#endregion

export const TemaCitaConfig = {
  name: "TemaCita",
  model: TemaCitaModel,
  collection: TemaCitaCollection,
  annotations: [],
  fields: {
    descripcion: {type: 'Edm.String', nullable: false, maxLength: 35},
    diasAnticipacion: {type: 'Edm.Int32', nullable: false},
    sistema: {type: 'Edm.Boolean', nullable: false},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    audiencias: {type: 'SIU.Tramites.Audiencia', collection: true, navigation: true},
    citas: {type: 'SIU.Agenda.Cita', collection: true, navigation: true},
    oficinas: {type: 'SIU.Lugares.Oficina', collection: true, navigation: true}
  }
} as EntityConfig<TemaCita>;