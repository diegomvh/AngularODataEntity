import { SchemaConfig } from 'angular-odata';

//#region ODataApi Imports
import { CircunscripcionConfig } from './circunscripcion.entity.config';
import { FiscaliaConfig } from './fiscalia.entity.config';
import { OficinaConfig } from './oficina.entity.config';
import { JuzgadoConfig } from './juzgado.entity.config';
import { SecretariaConfig } from './secretaria.entity.config';
import { InstitucionConfig } from './institucion.entity.config';
import { LugarDetencionConfig } from './lugardetencion.entity.config';
import { LocalidadConfig } from './localidad.entity.config';
import { ProvinciaConfig } from './provincia.entity.config';
//#endregion

export const LugaresSchema = {
  namespace: "SIU.Lugares",
  enums: [],
  entities: [CircunscripcionConfig,
    FiscaliaConfig,
    OficinaConfig,
    JuzgadoConfig,
    SecretariaConfig,
    InstitucionConfig,
    LugarDetencionConfig,
    LocalidadConfig,
    ProvinciaConfig],
  callables: [],
  containers: []
} as SchemaConfig;