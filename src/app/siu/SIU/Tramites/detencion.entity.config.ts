import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Detencion } from './detencion.entity';
import { DetencionModel } from './detencion.model';
import { DetencionCollection } from './detencion.collection';
//#endregion

export const DetencionConfig = {
  name: "Detencion",
  model: DetencionModel,
  collection: DetencionCollection,
  annotations: [],
  fields: {
    casoPenalId: {type: 'Edm.Int32'},
    requirenteId: {type: 'Edm.Int32'},
    localidadId: {type: 'Edm.Int32'},
    lugarDetencionId: {type: 'Edm.Int32'},
    desde: {type: 'Edm.DateTimeOffset', nullable: false},
    hasta: {type: 'Edm.DateTimeOffset'},
    observaciones: {type: 'Edm.String', maxLength: 200},
    prision_Domiciliaria: {type: 'Edm.Boolean'},
    institucion_Sanitaria: {type: 'Edm.Boolean'},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    casoPenal: {type: 'SIU.Tramites.CasoPenal', navigation: true, field: 'casoPenalId', ref: 'id'},
    localidad: {type: 'SIU.Lugares.Localidad', navigation: true, field: 'localidadId', ref: 'id'},
    lugarDetencion: {type: 'SIU.Lugares.LugarDetencion', navigation: true, field: 'lugarDetencionId', ref: 'id'},
    requirente: {type: 'SIU.Personas.Requirente', navigation: true, field: 'requirenteId', ref: 'id'}
  }
} as EntityConfig<Detencion>;