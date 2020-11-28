import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CasoPenalReporte } from './casopenalreporte.entity';
import { CasoPenalReporteModel } from './casopenalreporte.model';
import { CasoPenalReporteCollection } from './casopenalreporte.collection';
//#endregion

export const CasoPenalReporteConfig = {
  name: "CasoPenalReporte",
  model: CasoPenalReporteModel,
  collection: CasoPenalReporteCollection,
  annotations: [],
  fields: {
    id: {type: 'Edm.Int32', nullable: false},
    nuf: {type: 'Edm.String'},
    nic: {type: 'Edm.String'},
    nej: {type: 'Edm.String'},
    fiscalia: {type: 'Edm.String'},
    hecho: {type: 'Edm.DateTimeOffset'},
    desde: {type: 'Edm.DateTimeOffset', nullable: false},
    caratula: {type: 'Edm.String'},
    subMateria: {type: 'Edm.String'},
    observaciones: {type: 'Edm.String'},
    principal: {type: 'Edm.String'},
    alternativo: {type: 'Edm.String'},
    participantes: {type: 'Edm.String'}
  }
} as EntityConfig<CasoPenalReporte>;