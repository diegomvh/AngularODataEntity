import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Citacion } from './citacion.entity';
import { CitacionModel } from './citacion.model';
import { CitacionCollection } from './citacion.collection';
//#endregion

export const CitacionConfig = {
  name: "Citacion",
  model: CitacionModel,
  collection: CitacionCollection,
  annotations: [],
  fields: {
    audienciaId: {type: 'Edm.Int32'},
    empleadoAltaId: {type: 'Edm.Int32', nullable: false},
    fechaImpresion: {type: 'Edm.DateTimeOffset', nullable: false},
    tipo: {type: 'Edm.String', nullable: false, maxLength: 3},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    audiencia: {type: 'SIU.Tramites.Audiencia', navigation: true, field: 'audienciaId', ref: 'id'},
    empleado: {type: 'SIU.Personas.Empleado', navigation: true},
    requirenteCitaciones: {type: 'SIU.Tramites.RequirenteCitacion', collection: true, navigation: true}
  }
} as EntityConfig<Citacion>;