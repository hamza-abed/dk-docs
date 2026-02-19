import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://hamza-abed.github.io',
  base: '/dk-docs',
  integrations: [
    starlight({
      title: 'DispatchKit',
      social: {
        github: 'https://github.com/hamza-abed',
      },
      logo: {
        light: './src/assets/logo-light.svg',
        dark: './src/assets/logo-dark.svg',
        alt: 'DispatchKit logo',
      },
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Pour commencer',
          items: [
            { label: 'Introduction', slug: 'index' },
            { label: 'Démarrage rapide', slug: 'quickstart' },
            { label: 'Concepts', slug: 'concepts' },
          ],
        },
        {
          label: 'Guides',
          items: [
            { label: 'Missions', slug: 'guides/missions' },
            { label: 'Opérateurs', slug: 'guides/operators' },
            { label: 'Clients', slug: 'guides/clients' },
            { label: 'Temps réel', slug: 'guides/real-time' },
            { label: 'Multi-organisations', slug: 'guides/multi-org' },
          ],
        },
        {
          label: 'Architecture',
          items: [
            { label: "Vue d'ensemble", slug: 'architecture/overview' },
            { label: 'Services', slug: 'architecture/services' },
          ],
        },
        {
          label: 'API Reference',
          items: [
            { label: 'Introduction', slug: 'api-reference/introduction' },
            {
              label: 'Authentification',
              items: [
                { label: 'Inscription', slug: 'api-reference/auth/register' },
                { label: 'Connexion', slug: 'api-reference/auth/login' },
                { label: 'Refresh token', slug: 'api-reference/auth/refresh' },
                { label: 'Profil', slug: 'api-reference/auth/me' },
              ],
            },
            {
              label: 'Missions',
              items: [
                { label: 'Lister', slug: 'api-reference/missions/list' },
                { label: 'Créer', slug: 'api-reference/missions/create' },
                { label: 'Détail', slug: 'api-reference/missions/get' },
                { label: 'Modifier', slug: 'api-reference/missions/update' },
                { label: 'Assigner', slug: 'api-reference/missions/assign' },
                { label: 'Compléter', slug: 'api-reference/missions/complete' },
              ],
            },
            {
              label: 'Opérateurs',
              items: [
                { label: 'Lister', slug: 'api-reference/operators/list' },
                { label: 'Inviter', slug: 'api-reference/operators/invite' },
                { label: 'Détail', slug: 'api-reference/operators/get' },
                { label: 'Modifier', slug: 'api-reference/operators/update' },
                { label: 'Positions', slug: 'api-reference/operators/positions' },
              ],
            },
            {
              label: 'Clients',
              items: [
                { label: 'Lister', slug: 'api-reference/clients/list' },
                { label: 'Créer', slug: 'api-reference/clients/create' },
                { label: 'Détail', slug: 'api-reference/clients/get' },
                { label: 'Modifier', slug: 'api-reference/clients/update' },
              ],
            },
            {
              label: 'Organisations',
              items: [
                { label: 'Lister', slug: 'api-reference/organizations/list' },
                { label: 'Détail', slug: 'api-reference/organizations/get' },
                { label: 'Membres', slug: 'api-reference/organizations/members' },
              ],
            },
            {
              label: 'Temps réel',
              items: [
                { label: 'SSE Events', slug: 'api-reference/real-time/sse' },
                { label: 'Positions GPS', slug: 'api-reference/real-time/positions' },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
