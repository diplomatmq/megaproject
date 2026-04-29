import { Navigate, createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../ui/MainLayout';
import { CartPage } from '../pages/CartPage';
import { ProductDetailsPage } from '../pages/ProductDetailsPage';
import { CatalogPage } from '../pages/CatalogPage';

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
]);
