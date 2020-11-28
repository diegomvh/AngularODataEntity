import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AcumulacionCarpeta } from './acumulacioncarpeta.entity';
import { AcumulacionCarpetaModel } from './acumulacioncarpeta.model';
import { AcumulacionCarpetaCollection } from './acumulacioncarpeta.collection';
//#endregion

export const AcumulacionCarpetaConfig = {
  name: "AcumulacionCarpeta",
  model: AcumulacionCarpetaModel,
  collection: AcumulacionCarpetaCollection,
  annotations: [],
  fields: {
    casoHijoId: {type: 'Edm.Int32', nullable: false},
    casoPadreId: {type: 'Edm.Int32', nullable: false},
    motivo: {type: 'Edm.String', maxLength: 250},
    desde: {type: 'Edm.DateTimeOffset', nullable: false},
    hasta: {type: 'Edm.DateTimeOffset'},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    casoHijo: {type: 'SIU.Tramites.CasoPenal', navigation: true},
    casoPadre: {type: 'SIU.Tramites.CasoPenal', navigation: true}
  }
} as EntityConfig<AcumulacionCarpeta>;