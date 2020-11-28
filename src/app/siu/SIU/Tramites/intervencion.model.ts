import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IntervencionTipos } from './intervenciontipos.enum';
import { Etiqueta } from '../Metadatos/etiqueta.entity';
import { Recurso } from '../Recursos/recurso.entity';
import { Oficina } from '../Lugares/oficina.entity';
import { Institucion } from '../Lugares/institucion.entity';
import { Requirente } from '../Personas/requirente.entity';
import { Empleado } from '../Personas/empleado.entity';
import { Caso } from './caso.entity';
import { Intervencion } from './intervencion.entity';
import { EtiquetaModel } from '../Metadatos/etiqueta.model';
import { RecursoModel } from '../Recursos/recurso.model';
import { OficinaModel } from '../Lugares/oficina.model';
import { InstitucionModel } from '../Lugares/institucion.model';
import { RequirenteModel } from '../Personas/requirente.model';
import { EmpleadoModel } from '../Personas/empleado.model';
import { CasoModel } from './caso.model';
import { EtiquetaCollection } from '../Metadatos/etiqueta.collection';
import { RecursoCollection } from '../Recursos/recurso.collection';
import { OficinaCollection } from '../Lugares/oficina.collection';
import { InstitucionCollection } from '../Lugares/institucion.collection';
import { RequirenteCollection } from '../Personas/requirente.collection';
import { EmpleadoCollection } from '../Personas/empleado.collection';
import { CasoCollection } from './caso.collection';
import { IntervencionCollection } from './intervencion.collection';
//#endregion

export class IntervencionModel<E extends Intervencion> extends ODataModel<E> {
  //#region ODataApi Properties
  institucionId?: number;
  requirenteId?: number;
  empleadoId?: number;
  oficinaId?: number;
  casoId?: number;
  desde?: Date;
  hasta?: Date;
  infoPublica?: string;
  infoPrivada?: string;
  infoOficina?: string;
  atendido?: boolean;
  enAtencion?: boolean;
  operador?: string;
  gestionAdministrativa: boolean;
  sistema: boolean;
  tipo: IntervencionTipos;
  esModificable: boolean;
  esEliminable: boolean;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  recursos?: RecursoCollection<Recurso, RecursoModel<Recurso>>;
  etiquetas?: EtiquetaCollection<Etiqueta, EtiquetaModel<Etiqueta>>;
  empleado?: EmpleadoModel<Empleado>;
  oficina?: OficinaModel<Oficina>;
  requirente?: RequirenteModel<Requirente>;
  caso?: CasoModel<Caso>;
  institucion?: InstitucionModel<Institucion>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}