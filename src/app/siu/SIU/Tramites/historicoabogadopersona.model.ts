import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Requirente } from '../Personas/requirente.entity';
import { Empleado } from '../Personas/empleado.entity';
import { RequirenteCaso } from './requirentecaso.entity';
import { CasoPenal } from './casopenal.entity';
import { HistoricoAbogadoPersona } from './historicoabogadopersona.entity';
import { RequirenteModel } from '../Personas/requirente.model';
import { EmpleadoModel } from '../Personas/empleado.model';
import { RequirenteCasoModel } from './requirentecaso.model';
import { CasoPenalModel } from './casopenal.model';
import { RequirenteCollection } from '../Personas/requirente.collection';
import { EmpleadoCollection } from '../Personas/empleado.collection';
import { RequirenteCasoCollection } from './requirentecaso.collection';
import { CasoPenalCollection } from './casopenal.collection';
import { HistoricoAbogadoPersonaCollection } from './historicoabogadopersona.collection';
//#endregion

export class HistoricoAbogadoPersonaModel<E extends HistoricoAbogadoPersona> extends ODataModel<E> {
  //#region ODataApi Properties
  casoPenalId?: number;
  requirenteId?: number;
  abogadoId?: number;
  fecha: Date;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  casoPenal?: CasoPenalModel<CasoPenal>;
  abogado?: EmpleadoModel<Empleado>;
  requirente?: RequirenteModel<Requirente>;
  requirenteCaso?: RequirenteCasoModel<RequirenteCaso>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}