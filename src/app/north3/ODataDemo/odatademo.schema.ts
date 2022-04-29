//#region ODataApiGen ODataImports
import {
  SchemaConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AddressComplexConfig } from './address.complex.config';
import { ProductEntityConfig } from './product.entity.config';
import { FeaturedProductEntityConfig } from './featuredproduct.entity.config';
import { ProductDetailEntityConfig } from './productdetail.entity.config';
import { CategoryEntityConfig } from './category.entity.config';
import { SupplierEntityConfig } from './supplier.entity.config';
import { PersonEntityConfig } from './person.entity.config';
import { CustomerEntityConfig } from './customer.entity.config';
import { EmployeeEntityConfig } from './employee.entity.config';
import { PersonDetailEntityConfig } from './persondetail.entity.config';
import { AdvertisementEntityConfig } from './advertisement.entity.config';
import { DemoServiceContainer } from './demoservice.container';
//#endregion

//#region ODataApiGen SchemaConfig
export const ODataDemoSchema = {
  namespace: 'ODataDemo',
  enums: [],
  entities: [AddressComplexConfig,
    ProductEntityConfig,
    FeaturedProductEntityConfig,
    ProductDetailEntityConfig,
    CategoryEntityConfig,
    SupplierEntityConfig,
    PersonEntityConfig,
    CustomerEntityConfig,
    EmployeeEntityConfig,
    PersonDetailEntityConfig,
    AdvertisementEntityConfig],
  callables: [],
  containers: [DemoServiceContainer]
} as SchemaConfig;
//#endregion