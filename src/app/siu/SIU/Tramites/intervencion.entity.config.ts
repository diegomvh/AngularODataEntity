import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Intervencion } from './intervencion.entity';
import { IntervencionModel } from './intervencion.model';
import { IntervencionCollection } from './intervencion.collection';
//#endregion

export const IntervencionConfig = {
  name: "Intervencion",
  model: IntervencionModel,
  collection: IntervencionCollection,
  annotations: [],
  fields: {
    institucionId: {type: 'Edm.Int32'},
    requirenteId: {type: 'Edm.Int32'},
    empleadoId: {type: 'Edm.Int32'},
    oficinaId: {type: 'Edm.Int32'},
    casoId: {type: 'Edm.Int32'},
    desde: {type: 'Edm.DateTimeOffset'},
    hasta: {type: 'Edm.DateTimeOffset'},
    infoPublica: {type: 'Edm.String'},
    infoPrivada: {type: 'Edm.String'},
    infoOficina: {type: 'Edm.String'},
    atendido: {type: 'Edm.Boolean'},
    enAtencion: {type: 'Edm.Boolean'},
    operador: {type: 'Edm.String', maxLength: 2},
    gestionAdministrativa: {type: 'Edm.Boolean', nullable: false},
    sistema: {type: 'Edm.Boolean', nullable: false},
    tipo: {type: 'SIU.Tramites.IntervencionTipos', nullable: false},
    esModificable: {type: 'Edm.Boolean', nullable: false},
    esEliminable: {type: 'Edm.Boolean', nullable: false},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    recursos: {type: 'SIU.Recursos.Recurso', collection: true, navigation: true},
    etiquetas: {type: 'SIU.Metadatos.Etiqueta', collection: true, navigation: true},
    empleado: {type: 'SIU.Personas.Empleado', navigation: true, field: 'empleadoId', ref: 'id'},
    oficina: {type: 'SIU.Lugares.Oficina', navigation: true, field: 'oficinaId', ref: 'id'},
    requirente: {type: 'SIU.Personas.Requirente', navigation: true, field: 'requirenteId', ref: 'id'},
    caso: {type: 'SIU.Tramites.Caso', navigation: true, field: 'casoId', ref: 'id'},
    institucion: {type: 'SIU.Lugares.Institucion', navigation: true, field: 'institucionId', ref: 'id'}
  }
} as EntityConfig<Intervencion>;