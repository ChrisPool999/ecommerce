# TODO / Roadmap
test
## IGNORING FOR NOW
# prio
- add healthcheck to railway since health check only exists on docker compose with is purely local
- can click Button place order button when information isnt filled out OOPS
- consider adding zod validation (types for req.body, can even use middleware to make validating simplier)
- fix middleware error to show unauthorized not 500 error (in general show some logged out UI) 
- IF LOGGED OUT (TOKEN EXPIRES, REDIRECT TO LOGIN PAGE)
- FIX IMPORTS TO USE PATH ALIAS (better than "../../../blah blah blah)
- modularize and extract out components causing "use client" to not get as much performance decrease from CSR (key to understanding nextJS SSR)
- fetching cart if not signed in...

# lower prio
- move fetch logic out of login/page, and move it into authcontext
- refactor seed file, so instead of doing create() 16+ times, we creates 16 objects then loop through
- move public folder in web to be on ecommerce (root) directory (expected there)
- log and create account errors for server error
- refactor backend endpoints for token generation (bad code design)
- inside create account page, but email already exists?
- consider automating prisma migration + seeding into docker
- figure out why can't api can't use path alias 
- solve unoptimized bug leading to images not loading
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
- [] Stripe
- [] Tests
- [] CI/CD
- [] Basic analytics
- [] Simple caching OR performance tuning
- [] Deployment + uptime

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

