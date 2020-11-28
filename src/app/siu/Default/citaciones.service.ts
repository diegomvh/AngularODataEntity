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
import { CitacionConParticipante } from '../SIU/Tramites/citacionconparticipante.entity';
import { Audiencia } from '../SIU/Tramites/audiencia.entity';
import { Citacion } from '../SIU/Tramites/citacion.entity';
import { RequirenteCitacion } from '../SIU/Tramites/requirentecitacion.entity';
import { CitacionConParticipanteModel } from '../SIU/Tramites/citacionconparticipante.model';
import { AudienciaModel } from '../SIU/Tramites/audiencia.model';
import { CitacionModel } from '../SIU/Tramites/citacion.model';
import { RequirenteCitacionModel } from '../SIU/Tramites/requirentecitacion.model';
import { CitacionConParticipanteCollection } from '../SIU/Tramites/citacionconparticipante.collection';
import { AudienciaCollection } from '../SIU/Tramites/audiencia.collection';
import { CitacionCollection } from '../SIU/Tramites/citacion.collection';
import { RequirenteCitacionCollection } from '../SIU/Tramites/requirentecitacion.collection';
//#endregion

@Injectable()
export class CitacionesService extends ODataEntityService<Citacion> {
  constructor(protected client: ODataClient) {
    super(client, 'citaciones', 'SIU.Tramites.Citacion');
  }

  //#region ODataApi Model
  citacionModel(): CitacionModel<Citacion> {
    return this.entity().asModel() as CitacionModel<Citacion>;
  }
  //#endregion
  //#region ODataApi Collection
  citacionCollection(): CitacionCollection<Citacion, CitacionModel<Citacion>> {
    return this.entities().asCollection() as CitacionCollection<Citacion, CitacionModel<Citacion>>;
  }
  //#endregion
  //#region ODataApi Actions
  public insertar(): ODataActionResource<{citacion: Citacion, destinatarios: RequirenteCitacion[]}, Citacion> {
    const resource = this.entities().action<{citacion: Citacion, destinatarios: RequirenteCitacion[]}, Citacion>('SIU.Insertar');
    return resource;
  }
  //#endregion
  //#region ODataApi Functions
  public getCitacionesAudiencia(): ODataFunctionResource<{audienciaId: number}, CitacionConParticipante> {
    const resource = this.entities().function<{audienciaId: number}, CitacionConParticipante>('SIU.GetCitacionesAudiencia');
    return resource;
  }
  //#endregion
  //#region ODataApi Navigations
  public audiencia(entity: EntityKey<Citacion>): ODataNavigationPropertyResource<Audiencia> {
    return this.entity(entity).navigationProperty<Audiencia>('audiencia');
  }
  //#endregion
}
