import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Localidad } from './localidad.entity';
import { LocalidadModel } from './localidad.model';
import { LocalidadCollection } from './localidad.collection';
//#endregion

export const LocalidadConfig = {
  name: "Localidad",
  model: LocalidadModel,
  collection: LocalidadCollection,
  annotations: [],
  fields: {
    provinciaId: {type: 'Edm.Int32'},
    nombre: {type: 'Edm.String', nullable: false, maxLength: 40},
    cp: {type: 'Edm.String', maxLength: 8},
    oculto: {type: 'Edm.Boolean', nullable: false},
    mpf: {type: 'Edm.Boolean'},
    circunscripcionId: {type: 'Edm.Int32'},
    longname: {type: 'Edm.String'},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    provincia: {type: 'SIU.Lugares.Provincia', navigation: true, field: 'provinciaId', ref: 'id'},
    circunscripcion: {type: 'SIU.Lugares.Circunscripcion', navigation: true, field: 'circunscripcionId', ref: 'id'},
    oficinas: {type: 'SIU.Lugares.Oficina', collection: true, navigation: true},
    fiscalias: {type: 'SIU.Lugares.Fiscalia', collection: true, navigation: true},
    casosPenales: {type: 'SIU.Tramites.CasoPenal', collection: true, navigation: true},
    detenciones: {type: 'SIU.Tramites.Detencion', collection: true, navigation: true},
    empleados: {type: 'SIU.Personas.Empleado', collection: true, navigation: true},
    instituciones: {type: 'SIU.Lugares.Institucion', collection: true, navigation: true},
    lugaresDetencion: {type: 'SIU.Lugares.LugarDetencion', collection: true, navigation: true},
    requirenteOficinas: {type: 'SIU.Personas.RequirenteOficina', collection: true, navigation: true}
  }
} as EntityConfig<Localidad>;