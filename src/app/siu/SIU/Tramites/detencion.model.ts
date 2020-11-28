import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { LugarDetencion } from '../Lugares/lugardetencion.entity';
import { Localidad } from '../Lugares/localidad.entity';
import { Requirente } from '../Personas/requirente.entity';
import { CasoPenal } from './casopenal.entity';
import { Detencion } from './detencion.entity';
import { LugarDetencionModel } from '../Lugares/lugardetencion.model';
import { LocalidadModel } from '../Lugares/localidad.model';
import { RequirenteModel } from '../Personas/requirente.model';
import { CasoPenalModel } from './casopenal.model';
import { LugarDetencionCollection } from '../Lugares/lugardetencion.collection';
import { LocalidadCollection } from '../Lugares/localidad.collection';
import { RequirenteCollection } from '../Personas/requirente.collection';
import { CasoPenalCollection } from './casopenal.collection';
import { DetencionCollection } from './detencion.collection';
//#endregion

export class DetencionModel<E extends Detencion> extends ODataModel<E> {
  //#region ODataApi Properties
  casoPenalId?: number;
  requirenteId?: number;
  localidadId?: number;
  lugarDetencionId?: number;
  desde: Date;
  hasta?: Date;
  observaciones?: string;
  prision_Domiciliaria?: boolean;
  institucion_Sanitaria?: boolean;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  casoPenal?: CasoPenalModel<CasoPenal>;
  localidad?: LocalidadModel<Localidad>;
  lugarDetencion?: LugarDetencionModel<LugarDetencion>;
  requirente?: RequirenteModel<Requirente>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}