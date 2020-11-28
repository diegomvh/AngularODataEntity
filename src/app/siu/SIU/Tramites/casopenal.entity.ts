import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Caso } from './caso.entity';
import { Fiscalia } from '../Lugares/fiscalia.entity';
import { Localidad } from '../Lugares/localidad.entity';
import { AcumulacionCarpeta } from './acumulacioncarpeta.entity';
import { Intervencion } from './intervencion.entity';
import { MovimientoCaso } from './movimientocaso.entity';
import { Detencion } from './detencion.entity';
import { HistoricoAbogadoPersona } from './historicoabogadopersona.entity';
import { FiscaliaModel } from '../Lugares/fiscalia.model';
import { LocalidadModel } from '../Lugares/localidad.model';
import { CasoModel } from './caso.model';
import { AcumulacionCarpetaModel } from './acumulacioncarpeta.model';
import { IntervencionModel } from './intervencion.model';
import { MovimientoCasoModel } from './movimientocaso.model';
import { DetencionModel } from './detencion.model';
import { HistoricoAbogadoPersonaModel } from './historicoabogadopersona.model';
import { FiscaliaCollection } from '../Lugares/fiscalia.collection';
import { LocalidadCollection } from '../Lugares/localidad.collection';
import { CasoCollection } from './caso.collection';
import { AcumulacionCarpetaCollection } from './acumulacioncarpeta.collection';
import { IntervencionCollection } from './intervencion.collection';
import { MovimientoCasoCollection } from './movimientocaso.collection';
import { DetencionCollection } from './detencion.collection';
import { HistoricoAbogadoPersonaCollection } from './historicoabogadopersona.collection';
//#endregion

export interface CasoPenal extends Caso {
  //#region ODataApi Properties
  nuf?: string;
  nic?: string;
  localidadHechoId: number;
  hecho?: Date;
  caratula?: string;
  nej?: string;
  fiscaliaId?: number;
  localidadHecho?: Localidad;
  fiscalia?: Fiscalia;
  detenciones?: Detencion[];
  movimientos?: MovimientoCaso[];
  historicoAbogadoPersonas?: HistoricoAbogadoPersona[];
  acumulados?: AcumulacionCarpeta[];
  acumulantes?: AcumulacionCarpeta[];
  intervencionesDelCaso?: Intervencion[];
  intervencionesDeRequirentes?: Intervencion[];
  acumuladosVigentes?: AcumulacionCarpeta[];
  acumulantesVigentes?: AcumulacionCarpeta[];
  //#endregion
}