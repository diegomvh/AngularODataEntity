import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Fiscal } from './fiscal.entity';
import { FiscalModel } from './fiscal.model';
import { FiscalCollection } from './fiscal.collection';
//#endregion

export const FiscalConfig = {
  name: "Fiscal",
  model: FiscalModel,
  collection: FiscalCollection,
  annotations: [],
  fields: {
    nro: {type: 'Edm.Int32', nullable: false},
    nombres: {type: 'Edm.String', nullable: false, maxLength: 35},
    apellidos: {type: 'Edm.String', nullable: false, maxLength: 35},
    habilitado: {type: 'Edm.Boolean', nullable: false},
    guid: {type: 'Edm.Guid', nullable: false},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    expedientes: {type: 'SIU.Tramites.Expediente', collection: true, navigation: true}
  }
} as EntityConfig<Fiscal>;