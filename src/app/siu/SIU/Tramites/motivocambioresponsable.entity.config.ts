import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MotivoCambioResponsable } from './motivocambioresponsable.entity';
import { MotivoCambioResponsableModel } from './motivocambioresponsable.model';
import { MotivoCambioResponsableCollection } from './motivocambioresponsable.collection';
//#endregion

export const MotivoCambioResponsableConfig = {
  name: "MotivoCambioResponsable",
  model: MotivoCambioResponsableModel,
  collection: MotivoCambioResponsableCollection,
  annotations: [],
  fields: {
    motivo: {type: 'Edm.String', nullable: false, maxLength: 40},
    descripcion: {type: 'Edm.String', maxLength: 150},
    oculto: {type: 'Edm.Boolean'},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    empleadoCasos: {type: 'SIU.Tramites.EmpleadoCaso', collection: true, navigation: true},
    historicoResponsables: {type: 'SIU.Tramites.HistoricoResponsable', collection: true, navigation: true}
  }
} as EntityConfig<MotivoCambioResponsable>;