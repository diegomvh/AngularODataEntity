import { firstValueFrom } from "rxjs";
import { OrderDetailsService, ProductsService } from "../../northwind";
import { Injector } from "@angular/core";

async function usingProductsServiceForGroupingByCategory(injector: Injector) {
  const productsService = injector.get(ProductsService);

  // GET /Products?$apply=groupby((CategoryID),aggregate(UnitPrice with average as AveragePrice,UnitsInStock with sum as Stock))
  const byCategory = productsService.entities().transform<{ CategoryID: number; AveragePrice: number; Stock: number }>(
    ({ e, t }) => e().groupBy(
      () => [t.CategoryID],
      (g) => g.aggregate(t.UnitPrice, 'average', 'AveragePrice').sum(t.UnitsInStock, 'Stock')
    )
  );
  console.log(`${byCategory}`);
  console.log('By Category: ', await firstValueFrom(byCategory.fetchEntities()));
}

async function usingOrderDetailsServiceForFilteringBeforeAggregating(injector: Injector) {
  const orderDetailsService = injector.get(OrderDetailsService);

  // Transformations are applied in order: first filter, then group
  // GET /Order_Details?$apply=filter(Discount gt 0)/groupby((ProductID),aggregate(Quantity with sum as Quantity))
  const discountedQuantities = orderDetailsService.entities().transform<{ ProductID: number; Quantity: number }>(
    ({ e, t }) => e()
      .filter(({ e }) => e().gt(t.Discount, 0))
      .groupBy(() => [t.ProductID], (g) => g.sum(t.Quantity, 'Quantity'))
  );
  console.log(`${discountedQuantities}`);
  console.log('Discounted Quantities: ', await firstValueFrom(discountedQuantities.fetchEntities()));
}

export default async (injector: Injector) => {
  await usingProductsServiceForGroupingByCategory(injector);
  await usingOrderDetailsServiceForFilteringBeforeAggregating(injector);
}
