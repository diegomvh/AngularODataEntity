import { firstValueFrom } from "rxjs";
import { CategoriesService, OrdersService, ProductsService } from "../../northwind";
import { Injector } from "@angular/core";

async function usingProductsServiceForFilteringAndSorting(injector: Injector) {
  const productsService = injector.get(ProductsService);

  // GET /Products?$filter=UnitPrice gt 50 and Discontinued eq false&$orderby=UnitPrice desc&$select=...
  const expensive = productsService.entities().query((q) => {
    q.filter(({ e, t }) => e().gt(t.UnitPrice, 50).and(e().eq(t.Discontinued, false)));
    q.orderBy(({ e, t }) => e().descending(t.UnitPrice));
    q.select(({ e, t }) => e().fields(t.ProductName, t.UnitPrice, t.UnitsInStock));
  });
  console.log(`${expensive}`);
  console.log('Expensive Products: ', await firstValueFrom(expensive.fetchEntities()));

  // String functions and the `in` operator
  const some = productsService.entities().query((q) =>
    q.filter(({ e, t }) => e().startsWith(t.ProductName, 'Ch').or(e().in(t.CategoryID, [1, 2])))
  );
  console.log('Some Products: ', await firstValueFrom(some.fetchEntities()));
}

async function usingCategoriesServiceForExpandingWithOptions(injector: Injector) {
  const categoriesService = injector.get(CategoriesService);

  // Expand with nested options: only the three cheapest products in stock of each category
  const categories = categoriesService.entities().query((q) =>
    q.expand(({ e, t }) =>
      e().field(t.Products, (f) => {
        f.select(({ e, t }) => e().fields(t.ProductName, t.UnitPrice));
        f.filter(({ e, t }) => e().gt(t.UnitsInStock, 0));
        f.orderBy(({ e, t }) => e().ascending(t.UnitPrice));
        f.top(3);
      })
    )
  );
  console.log(`${categories}`);
  console.log('Categories: ', await firstValueFrom(categories.fetchEntities()));
}

async function usingOrdersServiceForFilteringWithLambdas(injector: Injector) {
  const ordersService = injector.get(OrdersService);

  // Orders with at least one line of more than 100 units
  // GET /Orders?$filter=Order_Details/any(d:d/Quantity gt 100)
  const big = ordersService.entities().query((q) =>
    q.filter(({ e, t }) => e().any(t.Order_Details!, ({ e, t }) => e().gt(t.Quantity, 100)))
  );
  console.log('Big Orders: ', await firstValueFrom(big.fetchEntities()));

  // Orders where every line has a discount
  // GET /Orders?$filter=Order_Details/all(d:d/Discount gt 0)
  const discounted = ordersService.entities().query((q) =>
    q.filter(({ e, t }) => e().all(t.Order_Details!, ({ e, t }) => e().gt(t.Discount, 0)))
  );
  console.log('Discounted Orders: ', await firstValueFrom(discounted.fetchEntities()));
}

async function usingOrdersServiceForPaging(injector: Injector) {
  const ordersService = injector.get(OrdersService);
  const orders = ordersService.entities().query((q) => q.orderBy(({ e, t }) => e().descending(t.OrderDate)));

  // Fetch page by page: $skip / $top, with the total count
  const pageSize = 10;
  for (let page = 0; page < 3; page++) {
    const { entities, annots } = await firstValueFrom(
      orders.clone().query((q) => q.paging({ skip: page * pageSize, top: pageSize })).fetch({ withCount: true })
    );
    console.log(`Page ${page + 1} of ${Math.ceil((annots.count ?? 0) / pageSize)}: `, entities);
  }
}

export default async (injector: Injector) => {
  await usingProductsServiceForFilteringAndSorting(injector);
  await usingCategoriesServiceForExpandingWithOptions(injector);
  await usingOrdersServiceForFilteringWithLambdas(injector);
  await usingOrdersServiceForPaging(injector);
}
