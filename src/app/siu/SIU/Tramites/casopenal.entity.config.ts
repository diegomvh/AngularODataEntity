import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CasoPenal } from './casopenal.entity';
import { CasoPenalModel } from './casopenal.model';
import { CasoPenalCollection } from './casopenal.collection';
//#endregion

export const CasoPenalConfig = {
  name: "CasoPenal",
  base: "SIU.Tramites.Caso",
  model: CasoPenalModel,
  collection: CasoPenalCollection,
  annotations: [],
  fields: {
    nuf: {type: 'Edm.String', maxLength: 42},
    nic: {type: 'Edm.String', maxLength: 10},
    localidadHechoId: {type: 'Edm.Int32', nullable: false},
    hecho: {type: 'Edm.DateTimeOffset'},
    caratula: {type: 'Edm.String', maxLength: 200},
    nej: {type: 'Edm.String', maxLength: 10},
    fiscaliaId: {type: 'Edm.Int32'},
    localidadHecho: {type: 'SIU.Lugares.Localidad', navigation: true},
    fiscalia: {type: 'SIU.Lugares.Fiscalia', navigation: true, field: 'fiscaliaId', ref: 'id'},
    detenciones: {type: 'SIU.Tramites.Detencion', collection: true, navigation: true},
    movimientos: {type: 'SIU.Tramites.MovimientoCaso', collection: true, navigation: true},
    historicoAbogadoPersonas: {type: 'SIU.Tramites.HistoricoAbogadoPersona', collection: true, navigation: true},
    acumulados: {type: 'SIU.Tramites.AcumulacionCarpeta', collection: true, navigation: true},
    acumulantes: {type: 'SIU.Tramites.AcumulacionCarpeta', collection: true, navigation: true},
    intervencionesDelCaso: {type: 'SIU.Tramites.Intervencion', collection: true, navigation: true},
    intervencionesDeRequirentes: {type: 'SIU.Tramites.Intervencion', collection: true, navigation: true},
    acumuladosVigentes: {type: 'SIU.Tramites.AcumulacionCarpeta', collection: true, navigation: true},
    acumulantesVigentes: {type: 'SIU.Tramites.AcumulacionCarpeta', collection: true, navigation: true}
  }
} as EntityConfig<CasoPenal>;