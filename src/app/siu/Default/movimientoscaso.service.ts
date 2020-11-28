import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntityService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { MovimientoCasoConAgendado } from '../SIU/Tramites/movimientocasoconagendado.entity';
import { VencimientosDestinatarios } from '../SIU/Tramites/vencimientosdestinatarios.entity';
import { RequirenteCaso } from '../SIU/Tramites/requirentecaso.entity';
import { CasoPenal } from '../SIU/Tramites/casopenal.entity';
import { MovimientoCaso } from '../SIU/Tramites/movimientocaso.entity';
import { EstadoRequirenteCaso } from '../SIU/Tramites/estadorequirentecaso.entity';
import { Cita } from '../SIU/Agenda/cita.entity';
import { MovimientoCasoConAgendadoModel } from '../SIU/Tramites/movimientocasoconagendado.model';
import { VencimientosDestinatariosModel } from '../SIU/Tramites/vencimientosdestinatarios.model';
import { RequirenteCasoModel } from '../SIU/Tramites/requirentecaso.model';
import { CasoPenalModel } from '../SIU/Tramites/casopenal.model';
import { MovimientoCasoModel } from '../SIU/Tramites/movimientocaso.model';
import { EstadoRequirenteCasoModel } from '../SIU/Tramites/estadorequirentecaso.model';
import { CitaModel } from '../SIU/Agenda/cita.model';
import { MovimientoCasoConAgendadoCollection } from '../SIU/Tramites/movimientocasoconagendado.collection';
import { VencimientosDestinatariosCollection } from '../SIU/Tramites/vencimientosdestinatarios.collection';
import { RequirenteCasoCollection } from '../SIU/Tramites/requirentecaso.collection';
import { CasoPenalCollection } from '../SIU/Tramites/casopenal.collection';
import { MovimientoCasoCollection } from '../SIU/Tramites/movimientocaso.collection';
import { EstadoRequirenteCasoCollection } from '../SIU/Tramites/estadorequirentecaso.collection';
import { CitaCollection } from '../SIU/Agenda/cita.collection';
//#endregion

@Injectable()
export class MovimientosCasoService extends ODataEntityService<MovimientoCaso> {
  constructor(protected client: ODataClient) {
    super(client, 'movimientosCaso', 'SIU.Tramites.MovimientoCaso');
  }

  //#region ODataApi Model
  movimientoCasoModel(): MovimientoCasoModel<MovimientoCaso> {
    return this.entity().asModel() as MovimientoCasoModel<MovimientoCaso>;
  }
  //#endregion
  //#region ODataApi Collection
  movimientoCasoCollection(): MovimientoCasoCollection<MovimientoCaso, MovimientoCasoModel<MovimientoCaso>> {
    return this.entities().asCollection() as MovimientoCasoCollection<MovimientoCaso, MovimientoCasoModel<MovimientoCaso>>;
  }
  //#endregion
  //#region ODataApi Actions
  public insertar(): ODataActionResource<{movimientoCaso: MovimientoCaso, vencimientosDestinatarios: VencimientosDestinatarios}, MovimientoCaso> {
    const resource = this.entities().action<{movimientoCaso: MovimientoCaso, vencimientosDestinatarios: VencimientosDestinatarios}, MovimientoCaso>('SIU.Insertar');
    return resource;
  }
  public actualizar(entity: EntityKey<MovimientoCaso>): ODataActionResource<{movimientoCaso: MovimientoCaso, vencimientosDestinatarios: VencimientosDestinatarios}, MovimientoCaso> {
    const resource = this.entity(entity).action<{movimientoCaso: MovimientoCaso, vencimientosDestinatarios: VencimientosDestinatarios}, MovimientoCaso>('SIU.Actualizar');
    return resource;
  }
  //#endregion
  //#region ODataApi Functions
  public getMovimientosPersonaCaso(): ODataFunctionResource<{casoId: number, personaId: number}, MovimientoCasoConAgendado> {
    const resource = this.entities().function<{casoId: number, personaId: number}, MovimientoCasoConAgendado>('SIU.GetMovimientosPersonaCaso');
    return resource;
  }
  //#endregion
  //#region ODataApi Navigations
  public casoPenal(entity: EntityKey<MovimientoCaso>): ODataNavigationPropertyResource<CasoPenal> {
    return this.entity(entity).navigationProperty<CasoPenal>('casoPenal');
  }
  public citas(entity: EntityKey<MovimientoCaso>): ODataNavigationPropertyResource<Cita> {
    return this.entity(entity).navigationProperty<Cita>('citas');
  }
  public estadoCaso(entity: EntityKey<MovimientoCaso>): ODataNavigationPropertyResource<EstadoRequirenteCaso> {
    return this.entity(entity).navigationProperty<EstadoRequirenteCaso>('estadoCaso');
  }
  public requirenteCaso(entity: EntityKey<MovimientoCaso>): ODataNavigationPropertyResource<RequirenteCaso> {
    return this.entity(entity).navigationProperty<RequirenteCaso>('requirenteCaso');
  }
  //#endregion
}
