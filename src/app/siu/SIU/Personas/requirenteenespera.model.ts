import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Oficina } from '../Lugares/oficina.entity';
import { Requirente } from './requirente.entity';
import { Empleado } from './empleado.entity';
import { RequirenteEnEspera } from './requirenteenespera.entity';
import { Caso } from '../Tramites/caso.entity';
import { CategoriaCaso } from '../Tramites/categoriacaso.entity';
import { SubMateria } from '../Tramites/submateria.entity';
import { OficinaModel } from '../Lugares/oficina.model';
import { RequirenteModel } from './requirente.model';
import { EmpleadoModel } from './empleado.model';
import { CasoModel } from '../Tramites/caso.model';
import { CategoriaCasoModel } from '../Tramites/categoriacaso.model';
import { SubMateriaModel } from '../Tramites/submateria.model';
import { OficinaCollection } from '../Lugares/oficina.collection';
import { RequirenteCollection } from './requirente.collection';
import { EmpleadoCollection } from './empleado.collection';
import { RequirenteEnEsperaCollection } from './requirenteenespera.collection';
import { CasoCollection } from '../Tramites/caso.collection';
import { CategoriaCasoCollection } from '../Tramites/categoriacaso.collection';
import { SubMateriaCollection } from '../Tramites/submateria.collection';
//#endregion

export class RequirenteEnEsperaModel<E extends RequirenteEnEspera> extends ODataModel<E> {
  //#region ODataApi Properties
  fecha?: Date;
  modificado?: Date;
  referenteId?: number;
  enAtencion?: boolean;
  casoId?: number;
  requirenteId?: number;
  oficinaId?: number;
  categoriaCasoId?: number;
  subMateriaId?: number;
  atendiendoId?: number;
  observaciones?: string;
  responsableId?: number;
  atendido?: boolean;
  ausente?: boolean;
  subResponsableId?: number;
  registranteId?: number;
  prioridad?: string;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  caso?: CasoModel<Caso>;
  categoriaCaso?: CategoriaCasoModel<CategoriaCaso>;
  registrante?: EmpleadoModel<Empleado>;
  referente?: EmpleadoModel<Empleado>;
  responsable?: EmpleadoModel<Empleado>;
  subResponsable?: EmpleadoModel<Empleado>;
  atendiendo?: EmpleadoModel<Empleado>;
  oficina?: OficinaModel<Oficina>;
  requirente?: RequirenteModel<Requirente>;
  subMateria?: SubMateriaModel<SubMateria>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}