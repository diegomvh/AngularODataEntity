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
import { Circunscripcion } from '../SIU/Lugares/circunscripcion.entity';
import { Fiscalia } from '../SIU/Lugares/fiscalia.entity';
import { Oficina } from '../SIU/Lugares/oficina.entity';
import { Institucion } from '../SIU/Lugares/institucion.entity';
import { LugarDetencion } from '../SIU/Lugares/lugardetencion.entity';
import { Localidad } from '../SIU/Lugares/localidad.entity';
import { Provincia } from '../SIU/Lugares/provincia.entity';
import { RequirenteOficina } from '../SIU/Personas/requirenteoficina.entity';
import { CasoPenal } from '../SIU/Tramites/casopenal.entity';
import { Detencion } from '../SIU/Tramites/detencion.entity';
import { CircunscripcionModel } from '../SIU/Lugares/circunscripcion.model';
import { FiscaliaModel } from '../SIU/Lugares/fiscalia.model';
import { OficinaModel } from '../SIU/Lugares/oficina.model';
import { InstitucionModel } from '../SIU/Lugares/institucion.model';
import { LugarDetencionModel } from '../SIU/Lugares/lugardetencion.model';
import { LocalidadModel } from '../SIU/Lugares/localidad.model';
import { ProvinciaModel } from '../SIU/Lugares/provincia.model';
import { RequirenteOficinaModel } from '../SIU/Personas/requirenteoficina.model';
import { CasoPenalModel } from '../SIU/Tramites/casopenal.model';
import { DetencionModel } from '../SIU/Tramites/detencion.model';
import { CircunscripcionCollection } from '../SIU/Lugares/circunscripcion.collection';
import { FiscaliaCollection } from '../SIU/Lugares/fiscalia.collection';
import { OficinaCollection } from '../SIU/Lugares/oficina.collection';
import { InstitucionCollection } from '../SIU/Lugares/institucion.collection';
import { LugarDetencionCollection } from '../SIU/Lugares/lugardetencion.collection';
import { LocalidadCollection } from '../SIU/Lugares/localidad.collection';
import { ProvinciaCollection } from '../SIU/Lugares/provincia.collection';
import { RequirenteOficinaCollection } from '../SIU/Personas/requirenteoficina.collection';
import { CasoPenalCollection } from '../SIU/Tramites/casopenal.collection';
import { DetencionCollection } from '../SIU/Tramites/detencion.collection';
//#endregion

@Injectable()
export class LocalidadesService extends ODataEntityService<Localidad> {
  constructor(protected client: ODataClient) {
    super(client, 'localidades', 'SIU.Lugares.Localidad');
  }

  //#region ODataApi Model
  localidadModel(): LocalidadModel<Localidad> {
    return this.entity().asModel() as LocalidadModel<Localidad>;
  }
  //#endregion
  //#region ODataApi Collection
  localidadCollection(): LocalidadCollection<Localidad, LocalidadModel<Localidad>> {
    return this.entities().asCollection() as LocalidadCollection<Localidad, LocalidadModel<Localidad>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public casosPenales(entity: EntityKey<Localidad>): ODataNavigationPropertyResource<CasoPenal> {
    return this.entity(entity).navigationProperty<CasoPenal>('casosPenales');
  }
  public circunscripcion(entity: EntityKey<Localidad>): ODataNavigationPropertyResource<Circunscripcion> {
    return this.entity(entity).navigationProperty<Circunscripcion>('circunscripcion');
  }
  public detenciones(entity: EntityKey<Localidad>): ODataNavigationPropertyResource<Detencion> {
    return this.entity(entity).navigationProperty<Detencion>('detenciones');
  }
  public fiscalias(entity: EntityKey<Localidad>): ODataNavigationPropertyResource<Fiscalia> {
    return this.entity(entity).navigationProperty<Fiscalia>('fiscalias');
  }
  public instituciones(entity: EntityKey<Localidad>): ODataNavigationPropertyResource<Institucion> {
    return this.entity(entity).navigationProperty<Institucion>('instituciones');
  }
  public lugaresDetencion(entity: EntityKey<Localidad>): ODataNavigationPropertyResource<LugarDetencion> {
    return this.entity(entity).navigationProperty<LugarDetencion>('lugaresDetencion');
  }
  public oficinas(entity: EntityKey<Localidad>): ODataNavigationPropertyResource<Oficina> {
    return this.entity(entity).navigationProperty<Oficina>('oficinas');
  }
  public provincia(entity: EntityKey<Localidad>): ODataNavigationPropertyResource<Provincia> {
    return this.entity(entity).navigationProperty<Provincia>('provincia');
  }
  public requirenteOficinas(entity: EntityKey<Localidad>): ODataNavigationPropertyResource<RequirenteOficina> {
    return this.entity(entity).navigationProperty<RequirenteOficina>('requirenteOficinas');
  }
  //#endregion
}
