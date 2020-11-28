import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RecursoEntry } from './recursoentry.entity';
import { RecursoEntryModel } from './recursoentry.model';
import { RecursoEntryCollection } from './recursoentry.collection';
//#endregion

export const RecursoEntryConfig = {
  name: "RecursoEntry",
  model: RecursoEntryModel,
  collection: RecursoEntryCollection,
  annotations: [],
  fields: {
    recursoId: {type: 'Edm.Int32'},
    nombre: {type: 'Edm.String'},
    fecha: {type: 'Edm.DateTimeOffset', nullable: false},
    contentType: {type: 'Edm.String'},
    size: {type: 'Edm.Int64', nullable: false},
    directory: {type: 'Edm.String'},
    opciones: {type: 'SIU.Recursos.RecursoOpciones', nullable: false},
    permisos: {type: 'SIU.Recursos.RecursoPermisos', nullable: false},
    url: {type: 'Edm.String'},
    source: {type: 'SIU.Recursos.RecursoSource'},
    key: {type: 'Edm.String'},
    extension: {type: 'Edm.String'},
    file: {type: 'Edm.String'},
    path: {type: 'Edm.String'},
    internalType: {type: 'SIU.Utilities.Types.InternalTypes', nullable: false},
    byteSize: {type: 'Edm.String'}
  }
} as EntityConfig<RecursoEntry>;