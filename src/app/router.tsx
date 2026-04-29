import { Navigate, createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../shared/ui/layout/MainLayout';
import { CartPage } from '../pages/cart/CartPage';
import { ProductDetailsPage } from '../pages/product-details/ProductDetailsPage';
import { CatalogPage } from '../pages/catalog/CatalogPage';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <CatalogPage /> },
      { path: 'product/:productId', element: <ProductDetailsPage /> },
      { path: 'cart', element: <CartPage /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
], {
  future: {
    v7_startTransition: true,
  },
});
