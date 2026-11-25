# Day Well

Day Well is an adaptive multi-condition health platform that helps people organize the lifestyle instructions they already received (diet, activity, sleep, habits) into one simple daily plan.

> Day Well is a lifestyle organization and tracking tool. It does not diagnose conditions or give medical treatment advice.

Built for the TechTalks Internship Program.

## Tech stack
- Next.js (frontend pages and backend API routes in one project)
- Supabase (PostgreSQL database and Auth)
- GitHub, Postman

## Team
- Farah Al Abdallah (Team Leader, Database and Backend)
- Leen Khalil (Database and Backend)
- Hanin Maarouf (Frontend)
- Mariam Al Asadi (Frontend)

## Project structure
```
src/
  app/
    api/            backend API routes (each folder has a route.js)
      health/       test route
    page.js         home page
    layout.js       shared layout
  components/       shared UI parts (Button, Input, Card)
  lib/supabase/     Supabase clients (client.js for browser, server.js for API routes)
  services/         functions that call our API from the pages
```

## Getting started
```bash
git clone <repository-url>
cd <repository-folder>
npm install
cp .env.example .env.local     # then fill in the Supabase values
npm run dev
```
Open http://localhost:3000 and http://localhost:3000/api/health

Get the Supabase values from Supabase, Project Settings, API. Ask Farah if you cannot find them.

## Git workflow
- `main`: stable version for demos
- `dev`: combined work from everyone
- One branch per task, created from `dev`, for example `feature/login-page`

1. `git checkout dev` then `git pull`
2. `git checkout -b feature/your-task-name`
3. Work, then `git add .` and `git commit -m "Clear message"`
4. `git push -u origin feature/your-task-name`
5. Open a pull request into `dev` and ask a teammate to review
6. Never commit `.env.local` or Supabase keys
