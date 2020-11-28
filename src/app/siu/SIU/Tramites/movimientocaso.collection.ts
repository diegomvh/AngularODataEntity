import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
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
import { MovimientoCasoModel } from './movimientocaso.model';
import { EstadoRequirenteCasoModel } from './estadorequirentecaso.model';
import { CitaModel } from '../Agenda/cita.model';
import { MovimientoCasoConAgendadoCollection } from './movimientocasoconagendado.collection';
import { VencimientosDestinatariosCollection } from './vencimientosdestinatarios.collection';
import { RequirenteCasoCollection } from './requirentecaso.collection';
import { CasoPenalCollection } from './casopenal.collection';
import { EstadoRequirenteCasoCollection } from './estadorequirentecaso.collection';
import { CitaCollection } from '../Agenda/cita.collection';
//#endregion

export class MovimientoCasoCollection<E extends MovimientoCaso, M extends MovimientoCasoModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  public insertar(movimientoCaso: MovimientoCaso, vencimientosDestinatarios: VencimientosDestinatarios, options?: HttpOptions): Observable<MovimientoCasoModel<MovimientoCaso>> {
    var res = this._action<{movimientoCaso: MovimientoCaso, vencimientosDestinatarios: VencimientosDestinatarios}, MovimientoCaso>('SIU.Insertar');
    res.segment.entitySet('movimientosCaso');
    return res.call({movimientoCaso, vencimientosDestinatarios}, 'model', options) as Observable<MovimientoCasoModel<MovimientoCaso>>;
  }
  //#endregion
  //#region ODataApi Functions
  public getMovimientosPersonaCaso(casoId: number, personaId: number, options?: HttpOptions): Observable<MovimientoCasoConAgendadoCollection<MovimientoCasoConAgendado, MovimientoCasoConAgendadoModel<MovimientoCasoConAgendado>>> {
    var res = this._function<{casoId: number, personaId: number}, MovimientoCasoConAgendado>('SIU.GetMovimientosPersonaCaso');
    res.segment.entitySet('movimientosCaso');
    return res.call({casoId, personaId}, 'collection', options) as Observable<MovimientoCasoConAgendadoCollection<MovimientoCasoConAgendado, MovimientoCasoConAgendadoModel<MovimientoCasoConAgendado>>>;
  }
  //#endregion
}