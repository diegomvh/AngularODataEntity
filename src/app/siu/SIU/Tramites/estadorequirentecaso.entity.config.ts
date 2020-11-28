import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { EstadoRequirenteCaso } from './estadorequirentecaso.entity';
import { EstadoRequirenteCasoModel } from './estadorequirentecaso.model';
import { EstadoRequirenteCasoCollection } from './estadorequirentecaso.collection';
//#endregion

export const EstadoRequirenteCasoConfig = {
  name: "EstadoRequirenteCaso",
  model: EstadoRequirenteCasoModel,
  collection: EstadoRequirenteCasoCollection,
  annotations: [],
  fields: {
    nombre: {type: 'Edm.String', nullable: false, maxLength: 60},
    descVen1: {type: 'Edm.String', maxLength: 20},
    plazoVen1: {type: 'Edm.String', maxLength: 3},
    descVen2: {type: 'Edm.String', maxLength: 20},
    plazoVen2: {type: 'Edm.String', maxLength: 3},
    suspPlazo: {type: 'Edm.Boolean', nullable: false},
    esRebeldia: {type: 'Edm.Boolean', nullable: false},
    esOrdenDetencion: {type: 'Edm.Boolean', nullable: false},
    esOrdenCaptura: {type: 'Edm.Boolean', nullable: false},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    movimientoCasos: {type: 'SIU.Tramites.MovimientoCaso', collection: true, navigation: true}
  }
} as EntityConfig<EstadoRequirenteCaso>;