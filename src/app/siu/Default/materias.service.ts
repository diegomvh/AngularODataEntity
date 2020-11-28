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
import { Materia } from '../SIU/Tramites/materia.entity';
import { SubMateria } from '../SIU/Tramites/submateria.entity';
import { OficinaModel } from '../SIU/Lugares/oficina.model';
import { MateriaModel } from '../SIU/Tramites/materia.model';
import { SubMateriaModel } from '../SIU/Tramites/submateria.model';
import { OficinaCollection } from '../SIU/Lugares/oficina.collection';
import { MateriaCollection } from '../SIU/Tramites/materia.collection';
import { SubMateriaCollection } from '../SIU/Tramites/submateria.collection';
//#endregion

@Injectable()
export class MateriasService extends ODataEntityService<Materia> {
  constructor(protected client: ODataClient) {
    super(client, 'materias', 'SIU.Tramites.Materia');
  }

  //#region ODataApi Model
  materiaModel(): MateriaModel<Materia> {
    return this.entity().asModel() as MateriaModel<Materia>;
  }
  //#endregion
  //#region ODataApi Collection
  materiaCollection(): MateriaCollection<Materia, MateriaModel<Materia>> {
    return this.entities().asCollection() as MateriaCollection<Materia, MateriaModel<Materia>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public oficinas(entity: EntityKey<Materia>): ODataNavigationPropertyResource<Oficina> {
    return this.entity(entity).navigationProperty<Oficina>('oficinas');
  }
  public subMaterias(entity: EntityKey<Materia>): ODataNavigationPropertyResource<SubMateria> {
    return this.entity(entity).navigationProperty<SubMateria>('subMaterias');
  }
  //#endregion
}
