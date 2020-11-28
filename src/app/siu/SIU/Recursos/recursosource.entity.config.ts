import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RecursoSource } from './recursosource.entity';
import { RecursoSourceModel } from './recursosource.model';
import { RecursoSourceCollection } from './recursosource.collection';
//#endregion

export const RecursoSourceConfig = {
  name: "RecursoSource",
  model: RecursoSourceModel,
  collection: RecursoSourceCollection,
  annotations: [],
  fields: {
    recursoId: {type: 'Edm.Int32'},
    contentType: {type: 'Edm.String'},
    scheme: {type: 'Edm.String'},
    authority: {type: 'Edm.String'},
    port: {type: 'Edm.Int32', nullable: false},
    path: {type: 'Edm.String'},
    query: {type: 'Edm.String'},
    file: {type: 'Edm.String'},
    extension: {type: 'Edm.String'},
    basePath: {type: 'Edm.String'},
    baseName: {type: 'Edm.String'},
    view: {type: 'Edm.Boolean', nullable: false},
    edit: {type: 'Edm.Boolean', nullable: false},
    convert: {type: 'SIU.Onlyoffice.AllowConversion'},
    isUrl: {type: 'Edm.Boolean', nullable: false},
    isRecurso: {type: 'Edm.Boolean', nullable: false},
    isSiu: {type: 'Edm.Boolean', nullable: false},
    isSerconexPenal: {type: 'Edm.Boolean', nullable: false},
    isEureka: {type: 'Edm.Boolean', nullable: false},
    isEurekaDocumento: {type: 'Edm.Boolean', nullable: false},
    isSkua: {type: 'Edm.Boolean', nullable: false},
    isSkuaDocumento: {type: 'Edm.Boolean', nullable: false},
    isSkuaMedio: {type: 'Edm.Boolean', nullable: false},
    isHttp: {type: 'Edm.Boolean', nullable: false},
    isHttps: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<RecursoSource>;