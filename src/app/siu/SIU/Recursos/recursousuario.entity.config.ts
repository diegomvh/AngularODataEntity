import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RecursoUsuario } from './recursousuario.entity';
import { RecursoUsuarioModel } from './recursousuario.model';
import { RecursoUsuarioCollection } from './recursousuario.collection';
//#endregion

export const RecursoUsuarioConfig = {
  name: "RecursoUsuario",
  model: RecursoUsuarioModel,
  collection: RecursoUsuarioCollection,
  annotations: [],
  fields: {
    recursoId: {type: 'Edm.Int32', key: true, ref: 'recursoId'},
    usuarioId: {type: 'Edm.Int32', key: true, ref: 'usuarioId'},
    key: {type: 'Edm.String'},
    fecha: {type: 'Edm.DateTimeOffset', nullable: false},
    permisos: {type: 'SIU.Recursos.RecursoPermisos', nullable: false},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    recurso: {type: 'SIU.Recursos.Recurso', navigation: true, field: 'recursoId', ref: 'id'},
    usuario: {type: 'SIU.Personas.Empleado', navigation: true, field: 'usuarioId', ref: 'id'}
  }
} as EntityConfig<RecursoUsuario>;