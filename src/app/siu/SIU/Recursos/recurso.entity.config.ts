import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Recurso } from './recurso.entity';
import { RecursoModel } from './recurso.model';
import { RecursoCollection } from './recurso.collection';
//#endregion

export const RecursoConfig = {
  name: "Recurso",
  model: RecursoModel,
  collection: RecursoCollection,
  annotations: [],
  fields: {
    guid: {type: 'Edm.Guid'},
    fecha: {type: 'Edm.DateTimeOffset', nullable: false},
    nombre: {type: 'Edm.String', nullable: false},
    descripcion: {type: 'Edm.String'},
    url: {type: 'Edm.String', nullable: false},
    directory: {type: 'Edm.String', nullable: false},
    size: {type: 'Edm.Int64', nullable: false},
    contentType: {type: 'Edm.String'},
    opciones: {type: 'SIU.Recursos.RecursoOpciones', nullable: false},
    metadata: {type: 'SIU.Recursos.RecursoMetadata'},
    pKey: {type: 'Edm.String'},
    gKey: {type: 'Edm.String'},
    publico: {type: 'Edm.Boolean', nullable: false},
    entry: {type: 'SIU.Recursos.RecursoEntry'},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    escritos: {type: 'SIU.Tramites.Escrito', collection: true, navigation: true},
    intervenciones: {type: 'SIU.Tramites.Intervencion', collection: true, navigation: true},
    requirentes: {type: 'SIU.Personas.Requirente', collection: true, navigation: true},
    usuarios: {type: 'SIU.Recursos.RecursoUsuario', collection: true, navigation: true},
    oficinas: {type: 'SIU.Recursos.RecursoOficina', collection: true, navigation: true},
    estados: {type: 'SIU.Recursos.RecursoEstado', collection: true, navigation: true}
  }
} as EntityConfig<Recurso>;