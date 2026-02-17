# DispatchKit Docs — Copilot Instructions

## Stack
- Astro 5, Starlight 0.32
- MDX pour les pages de documentation
- TypeScript

## Structure
- Pages dans `src/content/docs/`
- Guides fonctionnels dans `guides/`
- Architecture technique dans `architecture/`
- API Reference dans `api-reference/`
- Contenu en français

## Code Review — Points critiques
- Vérifier la cohérence des slugs avec la sidebar (`astro.config.mjs`)
- Vérifier que les liens internes pointent vers des pages existantes
- Vérifier l'orthographe et la grammaire française
- Vérifier que les exemples de code API sont corrects et à jour
- Pas de secrets, tokens ou credentials dans les exemples
- Vérifier que les frontmatter (title, description) sont présents
