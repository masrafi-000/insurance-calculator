# Swiss Insurance Calculator

A multilingual Next.js 16 web app to estimate Swiss health insurance profitability.

Users can:
- Enter policy and profile data
- Compare current premium vs estimated premium
- See profitability metrics instantly
- Receive results by email (user + admin notification)

## Tech Stack

- Next.js 16 (App Router, TypeScript)
- React 19
- Tailwind CSS v4 + shadcn/ui
- next-intl (i18n)
- TanStack Query
- Zustand
- Zod validation
- Axios
- Nodemailer

## Features

- Locale-prefixed routing with 4 languages: `fr`, `en`, `de`, `it`
- Landing page calculator flow:
1. Form input + validation
2. API call to `/api/calculate`
3. Premium and outcome computation
4. Result card rendering
5. Email delivery of result summary
- Static pages:
1. `/[locale]/about`
2. `/[locale]/privacy`
3. `/[locale]/terms`
4. `/[locale]/cookies`
- Google AdSense blocks and ad placeholders

## Project Structure

```txt
app/
  api/
    calculate/route.ts     # Main calculator API
    test/route.ts          # Sample test API endpoint
  [locale]/
    (landing)/             # Home page sections and calculator UI
    about/                 # About page
    globals.css
    layout.tsx

components/
  shared/                  # Navbar, Footer
  ui/                      # Reusable UI components

data/shared.ts             # Static data (nav links, canton/franchise options, etc.)
hooks/queries/             # React Query hooks
i18n/                      # next-intl routing and request config
lib/
  api/                     # API wrappers
  email/mailer.ts          # SMTP email sending
  insurance/               # Premium and outcome engines
messages/                  # Translation JSON files
providers/                 # QueryProvider
scripts/                   # Translation/content patch scripts
store/                     # Zustand state stores
validators/zod.ts          # Form schemas
```

## Prerequisites

- Node.js 20+ (recommended)
- npm (or bun)

## Local Setup

1. Install dependencies:

```bash
npm install

# or 

bun install

# or 

pnpm install

# or

yarn install
```


1. Configure environment variables in `.env.local`:

```env
NODE_ENV=development

# SMTP (required for successful email sending)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASSWORD=your_app_password
ADMIN_EMAIL=admin@example.com
```

Notes:
- `SMTP_HOST` is optional in code and defaults to `smtp.gmail.com`.
- If SMTP vars are missing, calculations still return, but email sending logs an error.
- Do not commit real credentials.

3. Run the dev server:

```bash
npm run dev

# or 

bun dev

# or

yarn dev

# or

pnpm dev
```

4. Open:

```txt
http://localhost:3000
```

With locale prefix mode enabled (`localePrefix: "always"`), pages resolve under locale paths such as:
- `http://localhost:3000/fr`
- `http://localhost:3000/en`

## Available Scripts

```bash
npm run dev     # Start local dev server
npm run build   # Production build
npm run start   # Start production server
npm run lint    # ESLint checks
```


## API Endpoints

### `POST /api/calculate`

Validates request body with `calculatorSchema`, computes premium + outcome, and attempts to send emails.

Required body shape:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "phoneNumber": "123456789",
  "dateOfBirth": "1990",
  "email": "john@example.com",
  "canton": "GE",
  "monthlyPremium": "380",
  "deductible": "2500",
  "medicalExpenses": "1200",
  "copayCap": "700",
  "model": "Standard",
  "adults": "1",
  "children": "0",
  "accident": false
}
```

Success response includes merged premium + outcome result data.

### `GET /api/test`

Returns sample static JSON array.

## i18n Behavior

- Supported locales: `en`, `de`, `it`, `fr`
- Default locale: `fr`
- Locale detection: disabled
- Locale prefix: always required in URL
- Message files:
1. `messages/en.json`
2. `messages/fr.json`
3. `messages/de.json`
4. `messages/it.json`

## Current Lint Status

`npm run lint` currently passes with 1 warning:
- Unused variable `tGoogle` in `app/[locale]/(landing)/_components/calcSection.tsx`

## Deployment Notes

- `next.config.ts` uses `output: "standalone"` for container/server deployment.
- Remote image domain is currently limited to `images.unsplash.com`.
- Google AdSense script is injected in root layout.

## Security Notes

- Keep SMTP credentials in `.env.local` only.
- Rotate credentials immediately if they were exposed anywhere.
