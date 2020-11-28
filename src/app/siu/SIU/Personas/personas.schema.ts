import { SchemaConfig } from 'angular-odata';

//#region ODataApi Imports
import { RequirenteConfig } from './requirente.entity.config';
import { EmpleadoConfig } from './empleado.entity.config';
import { AsesorConfig } from './asesor.entity.config';
import { FiscalConfig } from './fiscal.entity.config';
import { CalidadRequirenteConfig } from './calidadrequirente.entity.config';
import { DeclaracionJuradaConfig } from './declaracionjurada.entity.config';
import { RequirenteEnEsperaConfig } from './requirenteenespera.entity.config';
import { RequirenteOficinaConfig } from './requirenteoficina.entity.config';
import { EstadoCivilConfig } from './estadocivil.entity.config';
import { TipoIdentificacionConfig } from './tipoidentificacion.entity.config';
import { NacionalidadConfig } from './nacionalidad.entity.config';
import { CategoriaEmpleadoConfig } from './categoriaempleado.entity.config';
//#endregion

export const PersonasSchema = {
  namespace: "SIU.Personas",
  enums: [],
  entities: [RequirenteConfig,
    EmpleadoConfig,
    AsesorConfig,
    FiscalConfig,
    CalidadRequirenteConfig,
    DeclaracionJuradaConfig,
    RequirenteEnEsperaConfig,
    RequirenteOficinaConfig,
    EstadoCivilConfig,
    TipoIdentificacionConfig,
    NacionalidadConfig,
    CategoriaEmpleadoConfig],
  callables: [],
  containers: []
} as SchemaConfig;