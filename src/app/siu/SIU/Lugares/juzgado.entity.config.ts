import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Juzgado } from './juzgado.entity';
import { JuzgadoModel } from './juzgado.model';
import { JuzgadoCollection } from './juzgado.collection';
//#endregion

export const JuzgadoConfig = {
  name: "Juzgado",
  model: JuzgadoModel,
  collection: JuzgadoCollection,
  annotations: [],
  fields: {
    nombresJuez: {type: 'Edm.String', maxLength: 35},
    apellidosJuez: {type: 'Edm.String', maxLength: 35},
    fuero: {type: 'Edm.String', maxLength: 50},
    telefono: {type: 'Edm.String', maxLength: 20},
    guid: {type: 'Edm.Guid', nullable: false},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    expedientes: {type: 'SIU.Tramites.Expediente', collection: true, navigation: true},
    secretarias: {type: 'SIU.Lugares.Secretaria', collection: true, navigation: true}
  }
} as EntityConfig<Juzgado>;