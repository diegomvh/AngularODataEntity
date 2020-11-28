import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MovimientoCasoConAgendado } from './movimientocasoconagendado.entity';
import { VencimientosDestinatarios } from './vencimientosdestinatarios.entity';
import { RequirenteCaso } from './requirentecaso.entity';
import { CasoPenal } from './casopenal.entity';
import { MovimientoCaso } from './movimientocaso.entity';
import { EstadoRequirenteCaso } from './estadorequirentecaso.entity';
import { Cita } from '../Agenda/cita.entity';
import { MovimientoCasoConAgendadoModel } from './movimientocasoconagendado.model';
import { VencimientosDestinatariosModel } from './vencimientosdestinatarios.model';
import { RequirenteCasoModel } from './requirentecaso.model';
import { CasoPenalModel } from './casopenal.model';
import { EstadoRequirenteCasoModel } from './estadorequirentecaso.model';
import { CitaModel } from '../Agenda/cita.model';
import { MovimientoCasoConAgendadoCollection } from './movimientocasoconagendado.collection';
import { VencimientosDestinatariosCollection } from './vencimientosdestinatarios.collection';
import { RequirenteCasoCollection } from './requirentecaso.collection';
import { CasoPenalCollection } from './casopenal.collection';
import { MovimientoCasoCollection } from './movimientocaso.collection';
import { EstadoRequirenteCasoCollection } from './estadorequirentecaso.collection';
import { CitaCollection } from '../Agenda/cita.collection';
//#endregion

export class MovimientoCasoModel<E extends MovimientoCaso> extends ODataModel<E> {
  //#region ODataApi Properties
  casoPenalId?: number;
  requirenteId: number;
  estadoCasoId: number;
  fecha: Date;
  observaciones?: string;
  vencimiento1?: Date;
  vencimiento2?: Date;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  casoPenal?: CasoPenalModel<CasoPenal>;
  estadoCaso?: EstadoRequirenteCasoModel<EstadoRequirenteCaso>;
  requirenteCaso?: RequirenteCasoModel<RequirenteCaso>;
  citas?: CitaCollection<Cita, CitaModel<Cita>>;
  //#endregion
  //#region ODataApi Actions
  public actualizar(movimientoCaso: MovimientoCaso, vencimientosDestinatarios: VencimientosDestinatarios, options?: HttpOptions): Observable<MovimientoCasoModel<MovimientoCaso>> {
    var res = this._action<{movimientoCaso: MovimientoCaso, vencimientosDestinatarios: VencimientosDestinatarios}, MovimientoCaso>('SIU.Actualizar');
    res.segment.entitySet('movimientosCaso');
    return res.call({movimientoCaso, vencimientosDestinatarios}, 'model', options) as Observable<MovimientoCasoModel<MovimientoCaso>>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}