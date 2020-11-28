import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RecursoEstado } from './recursoestado.entity';
import { RecursoEstadoModel } from './recursoestado.model';
import { RecursoEstadoCollection } from './recursoestado.collection';
//#endregion

export const RecursoEstadoConfig = {
  name: "RecursoEstado",
  model: RecursoEstadoModel,
  collection: RecursoEstadoCollection,
  annotations: [],
  fields: {
    recursoId: {type: 'Edm.Int32'},
    usuarioId: {type: 'Edm.Int32', nullable: false},
    tipo: {type: 'SIU.Recursos.RecursoTipoEstado', nullable: false},
    _Metadata: {type: 'Edm.String'},
    metadata: {type: 'SIU.Recursos.RecursoEstadoMetadata'},
    nombre: {type: 'Edm.String', nullable: false},
    fecha: {type: 'Edm.DateTimeOffset', nullable: false},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    recurso: {type: 'SIU.Recursos.Recurso', navigation: true, field: 'recursoId', ref: 'id'},
    usuario: {type: 'SIU.Personas.Empleado', navigation: true}
  }
} as EntityConfig<RecursoEstado>;