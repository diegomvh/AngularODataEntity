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
import { Oficina } from '../SIU/Lugares/oficina.entity';
import { Audiencia } from '../SIU/Tramites/audiencia.entity';
import { Cita } from '../SIU/Agenda/cita.entity';
import { TemaCita } from '../SIU/Agenda/temacita.entity';
import { OficinaModel } from '../SIU/Lugares/oficina.model';
import { AudienciaModel } from '../SIU/Tramites/audiencia.model';
import { CitaModel } from '../SIU/Agenda/cita.model';
import { TemaCitaModel } from '../SIU/Agenda/temacita.model';
import { OficinaCollection } from '../SIU/Lugares/oficina.collection';
import { AudienciaCollection } from '../SIU/Tramites/audiencia.collection';
import { CitaCollection } from '../SIU/Agenda/cita.collection';
import { TemaCitaCollection } from '../SIU/Agenda/temacita.collection';
//#endregion

@Injectable()
export class TemasCitaService extends ODataEntityService<TemaCita> {
  constructor(protected client: ODataClient) {
    super(client, 'temasCita', 'SIU.Agenda.TemaCita');
  }

  //#region ODataApi Model
  temaCitaModel(): TemaCitaModel<TemaCita> {
    return this.entity().asModel() as TemaCitaModel<TemaCita>;
  }
  //#endregion
  //#region ODataApi Collection
  temaCitaCollection(): TemaCitaCollection<TemaCita, TemaCitaModel<TemaCita>> {
    return this.entities().asCollection() as TemaCitaCollection<TemaCita, TemaCitaModel<TemaCita>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public comunesEntreOficinas(): ODataFunctionResource<{ids: number[]}, TemaCita> {
    const resource = this.entities().function<{ids: number[]}, TemaCita>('SIU.ComunesEntreOficinas');
    return resource;
  }
  public comunesEntreEmpleados(): ODataFunctionResource<{ids: number[]}, TemaCita> {
    const resource = this.entities().function<{ids: number[]}, TemaCita>('SIU.ComunesEntreEmpleados');
    return resource;
  }
  //#endregion
  //#region ODataApi Navigations
  public audiencias(entity: EntityKey<TemaCita>): ODataNavigationPropertyResource<Audiencia> {
    return this.entity(entity).navigationProperty<Audiencia>('audiencias');
  }
  public citas(entity: EntityKey<TemaCita>): ODataNavigationPropertyResource<Cita> {
    return this.entity(entity).navigationProperty<Cita>('citas');
  }
  public oficinas(entity: EntityKey<TemaCita>): ODataNavigationPropertyResource<Oficina> {
    return this.entity(entity).navigationProperty<Oficina>('oficinas');
  }
  //#endregion
}
