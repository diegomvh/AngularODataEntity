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
import { Caso } from '../SIU/Tramites/caso.entity';
import { Audiencia } from '../SIU/Tramites/audiencia.entity';
import { Avenimiento } from '../SIU/Tramites/avenimiento.entity';
import { RequirenteAvenimiento } from '../SIU/Tramites/requirenteavenimiento.entity';
import { SubMateria } from '../SIU/Tramites/submateria.entity';
import { OficinaModel } from '../SIU/Lugares/oficina.model';
import { CasoModel } from '../SIU/Tramites/caso.model';
import { AudienciaModel } from '../SIU/Tramites/audiencia.model';
import { AvenimientoModel } from '../SIU/Tramites/avenimiento.model';
import { RequirenteAvenimientoModel } from '../SIU/Tramites/requirenteavenimiento.model';
import { SubMateriaModel } from '../SIU/Tramites/submateria.model';
import { OficinaCollection } from '../SIU/Lugares/oficina.collection';
import { CasoCollection } from '../SIU/Tramites/caso.collection';
import { AudienciaCollection } from '../SIU/Tramites/audiencia.collection';
import { AvenimientoCollection } from '../SIU/Tramites/avenimiento.collection';
import { RequirenteAvenimientoCollection } from '../SIU/Tramites/requirenteavenimiento.collection';
import { SubMateriaCollection } from '../SIU/Tramites/submateria.collection';
//#endregion

@Injectable()
export class AvenimientosService extends ODataEntityService<Avenimiento> {
  constructor(protected client: ODataClient) {
    super(client, 'avenimientos', 'SIU.Tramites.Avenimiento');
  }

  //#region ODataApi Model
  avenimientoModel(): AvenimientoModel<Avenimiento> {
    return this.entity().asModel() as AvenimientoModel<Avenimiento>;
  }
  //#endregion
  //#region ODataApi Collection
  avenimientoCollection(): AvenimientoCollection<Avenimiento, AvenimientoModel<Avenimiento>> {
    return this.entities().asCollection() as AvenimientoCollection<Avenimiento, AvenimientoModel<Avenimiento>>;
  }
  //#endregion
  //#region ODataApi Actions
  public insertar(): ODataActionResource<{avenimiento: Avenimiento, destinatarios: RequirenteAvenimiento[]}, Avenimiento> {
    const resource = this.entities().action<{avenimiento: Avenimiento, destinatarios: RequirenteAvenimiento[]}, Avenimiento>('SIU.Insertar');
    return resource;
  }
  public actualizar(entity: EntityKey<Avenimiento>): ODataActionResource<{avenimiento: Avenimiento, destinatarios: RequirenteAvenimiento[]}, Avenimiento> {
    const resource = this.entity(entity).action<{avenimiento: Avenimiento, destinatarios: RequirenteAvenimiento[]}, Avenimiento>('SIU.Actualizar');
    return resource;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public audiencias(entity: EntityKey<Avenimiento>): ODataNavigationPropertyResource<Audiencia> {
    return this.entity(entity).navigationProperty<Audiencia>('audiencias');
  }
  public caso(entity: EntityKey<Avenimiento>): ODataNavigationPropertyResource<Caso> {
    return this.entity(entity).navigationProperty<Caso>('caso');
  }
  public oficina(entity: EntityKey<Avenimiento>): ODataNavigationPropertyResource<Oficina> {
    return this.entity(entity).navigationProperty<Oficina>('oficina');
  }
  public subMateria(entity: EntityKey<Avenimiento>): ODataNavigationPropertyResource<SubMateria> {
    return this.entity(entity).navigationProperty<SubMateria>('subMateria');
  }
  //#endregion
}
