import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RecursoOficina } from './recursooficina.entity';
import { RecursoOficinaModel } from './recursooficina.model';
import { RecursoOficinaCollection } from './recursooficina.collection';
//#endregion

export const RecursoOficinaConfig = {
  name: "RecursoOficina",
  model: RecursoOficinaModel,
  collection: RecursoOficinaCollection,
  annotations: [],
  fields: {
    recursoId: {type: 'Edm.Int32', key: true, ref: 'recursoId'},
    oficinaId: {type: 'Edm.Int32', key: true, ref: 'oficinaId'},
    key: {type: 'Edm.String'},
    fecha: {type: 'Edm.DateTimeOffset', nullable: false},
    permisos: {type: 'SIU.Recursos.RecursoPermisos', nullable: false},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    recurso: {type: 'SIU.Recursos.Recurso', navigation: true, field: 'recursoId', ref: 'id'},
    oficina: {type: 'SIU.Lugares.Oficina', navigation: true, field: 'oficinaId', ref: 'id'}
  }
} as EntityConfig<RecursoOficina>;