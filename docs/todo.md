# TODO / Roadmap

LATER TODAY:
change docker files based on FROM and AS, eg prod uses RUN npm build, dev doesnt 

bugs (high prio):
- can click Button place order button when information isnt filled out OOPS
- IF LOGGED OUT (TOKEN EXPIRES, REDIRECT TO LOGIN PAGE)
- inside create account page, but email already exists?
- log and create account errors for server error
- fetching cart if not signed in...
- fix middleware error to show unauthorized not 500 error (in general show some logged out UI) 
- solve nextJS images needing to be unoptimized 

features (kinda need):
- consider adding zod validation (types for req.body, can even use middleware to make validating simplier)
- modularize and extract out components causing "use client" to not get as much performance decrease from CSR (key to understanding nextJS SSR)
- consider automating prisma migration + seeding into docker
- add healthcheck to railway since health check only exists on docker compose with is purely local
- add step in pipeline to automatically update cors based on preview website url...

tech debt:
- actually post orders to backend, instead of pretending to
- FIX IMPORTS TO USE PATH ALIAS (better than "../../../blah blah blah)
- move fetch logic out of login/page, and move it into authcontext
- refactor seed file, so instead of doing create() 16+ times, we creates 16 objects then loop through
- move public folder in web to be on ecommerce (root) directory (expected there)
- refactor backend endpoints for token generation (bad code design)
- figure out why can't api can't use path alias 
- clean up tailwind
- figure out why tailwind themes wont work (and change certain themes such as bg-gray-200 to be consistent eg bg-app-background-gray)

## Current MVP (v1.0)
- [x] Prisma schema + migrations
- [x] Database connected (currently using JSON file)
- [x] Authentication (signup/login)
- [x] Shopping cart
- [x] Checkout flow
- [x] Deployment to production

## MVP+ (v2.0)
- [] CI/CD (tests included)
- [] AWS
- [] Observation + analytics + uptime
- [] REDIS CACHING
- [] SYSTEM DESIGN


## Post-MVP Improvements (while applying)
- [ ] Complete Responsive design
- [ ] UI Improvements / Rebrand
- [ ] Product details page
- [ ] Product search
- [ ] Testing
- [ ] Add loading states for all async operations
- [ ] Redis caching

## Future Features
- [ ] Add password reset flow
- [ ] Implement proper error boundaries
- [ ] User details page
- [ ] Product recommendation / Landing page
- [ ] Product reviews and ratings
- [ ] Order history page
- [ ] Admin dashboard
- [ ] Stripe Payment
- [ ] Redis Caching
- [ ] Images from MinIO/storage
- [ ] Email verification for new users

