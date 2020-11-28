import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { HistoricoAbogadoPersona } from './historicoabogadopersona.entity';
import { HistoricoAbogadoPersonaModel } from './historicoabogadopersona.model';
import { HistoricoAbogadoPersonaCollection } from './historicoabogadopersona.collection';
//#endregion

export const HistoricoAbogadoPersonaConfig = {
  name: "HistoricoAbogadoPersona",
  model: HistoricoAbogadoPersonaModel,
  collection: HistoricoAbogadoPersonaCollection,
  annotations: [],
  fields: {
    casoPenalId: {type: 'Edm.Int32'},
    requirenteId: {type: 'Edm.Int32'},
    abogadoId: {type: 'Edm.Int32'},
    fecha: {type: 'Edm.DateTimeOffset', nullable: false},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    casoPenal: {type: 'SIU.Tramites.CasoPenal', navigation: true, field: 'casoPenalId', ref: 'id'},
    abogado: {type: 'SIU.Personas.Empleado', navigation: true},
    requirente: {type: 'SIU.Personas.Requirente', navigation: true, field: 'requirenteId', ref: 'id'},
    requirenteCaso: {type: 'SIU.Tramites.RequirenteCaso', navigation: true}
  }
} as EntityConfig<HistoricoAbogadoPersona>;