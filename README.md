# Eurocottage GH

Skelet voor het Eurocottage-platform: Next.js op Vercel, Supabase als database.

## Lokaal draaien

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Checks

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

De GitHub Actions-pipeline (`.github/workflows/ci.yml`) draait dezelfde checks bij elke pull request en push naar `main`.

## Deployment

Vercel bouwt automatisch bij een push naar `main`. Omgevingsvariabelen uit `.env.example` moeten in Vercel worden ingesteld.
