import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { EstadoAudiencia } from './estadoaudiencia.entity';
import { EstadoAudienciaModel } from './estadoaudiencia.model';
import { EstadoAudienciaCollection } from './estadoaudiencia.collection';
//#endregion

export const EstadoAudienciaConfig = {
  name: "EstadoAudiencia",
  model: EstadoAudienciaModel,
  collection: EstadoAudienciaCollection,
  annotations: [],
  fields: {
    nombre: {type: 'Edm.String', nullable: false, maxLength: 30},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    audiencias: {type: 'SIU.Tramites.Audiencia', collection: true, navigation: true}
  }
} as EntityConfig<EstadoAudiencia>;