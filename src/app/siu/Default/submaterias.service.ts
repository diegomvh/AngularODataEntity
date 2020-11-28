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
import { RequirenteEnEspera } from '../SIU/Personas/requirenteenespera.entity';
import { Caso } from '../SIU/Tramites/caso.entity';
import { RequirenteCaso } from '../SIU/Tramites/requirentecaso.entity';
import { Avenimiento } from '../SIU/Tramites/avenimiento.entity';
import { NotaAvenimiento } from '../SIU/Tramites/notaavenimiento.entity';
import { Materia } from '../SIU/Tramites/materia.entity';
import { SubMateria } from '../SIU/Tramites/submateria.entity';
import { RequirenteEnEsperaModel } from '../SIU/Personas/requirenteenespera.model';
import { CasoModel } from '../SIU/Tramites/caso.model';
import { RequirenteCasoModel } from '../SIU/Tramites/requirentecaso.model';
import { AvenimientoModel } from '../SIU/Tramites/avenimiento.model';
import { NotaAvenimientoModel } from '../SIU/Tramites/notaavenimiento.model';
import { MateriaModel } from '../SIU/Tramites/materia.model';
import { SubMateriaModel } from '../SIU/Tramites/submateria.model';
import { RequirenteEnEsperaCollection } from '../SIU/Personas/requirenteenespera.collection';
import { CasoCollection } from '../SIU/Tramites/caso.collection';
import { RequirenteCasoCollection } from '../SIU/Tramites/requirentecaso.collection';
import { AvenimientoCollection } from '../SIU/Tramites/avenimiento.collection';
import { NotaAvenimientoCollection } from '../SIU/Tramites/notaavenimiento.collection';
import { MateriaCollection } from '../SIU/Tramites/materia.collection';
import { SubMateriaCollection } from '../SIU/Tramites/submateria.collection';
//#endregion

@Injectable()
export class SubMateriasService extends ODataEntityService<SubMateria> {
  constructor(protected client: ODataClient) {
    super(client, 'subMaterias', 'SIU.Tramites.SubMateria');
  }

  //#region ODataApi Model
  subMateriaModel(): SubMateriaModel<SubMateria> {
    return this.entity().asModel() as SubMateriaModel<SubMateria>;
  }
  //#endregion
  //#region ODataApi Collection
  subMateriaCollection(): SubMateriaCollection<SubMateria, SubMateriaModel<SubMateria>> {
    return this.entities().asCollection() as SubMateriaCollection<SubMateria, SubMateriaModel<SubMateria>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public avenimientos(entity: EntityKey<SubMateria>): ODataNavigationPropertyResource<Avenimiento> {
    return this.entity(entity).navigationProperty<Avenimiento>('avenimientos');
  }
  public casos(entity: EntityKey<SubMateria>): ODataNavigationPropertyResource<Caso> {
    return this.entity(entity).navigationProperty<Caso>('casos');
  }
  public materia(entity: EntityKey<SubMateria>): ODataNavigationPropertyResource<Materia> {
    return this.entity(entity).navigationProperty<Materia>('materia');
  }
  public notaAvenimientos(entity: EntityKey<SubMateria>): ODataNavigationPropertyResource<NotaAvenimiento> {
    return this.entity(entity).navigationProperty<NotaAvenimiento>('notaAvenimientos');
  }
  public requirenteCasos(entity: EntityKey<SubMateria>): ODataNavigationPropertyResource<RequirenteCaso> {
    return this.entity(entity).navigationProperty<RequirenteCaso>('requirenteCasos');
  }
  public requirentesEnEsperas(entity: EntityKey<SubMateria>): ODataNavigationPropertyResource<RequirenteEnEspera> {
    return this.entity(entity).navigationProperty<RequirenteEnEspera>('requirentesEnEsperas');
  }
  //#endregion
}
