import type { MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react';

import SiteHeader from '~/components/SiteHeader';

import styles from '~/styles/app.css';

export function links() {
  return [
    { rel: 'icon', href: '/images/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    { rel: 'stylesheet', href: styles }
  ];
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Joe Attardi',
  viewport: 'width=device-width,initial-scale=1'
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <SiteHeader />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
