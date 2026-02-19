# TODO / Roadmap

## IGNORING FOR NOW
# prio
- consider adding zod validation (types for req.body, can even use middleware to make validating simplier)

- fix middleware error to show unauthorized not 500 error (in general show some logged out UI) 
- IF LOGGED OUT (TOKEN EXPIRES, REDIRECT TO LOGIN PAGE)

- FIX IMPORTS TO USE PATH ALIAS (better than "../../../blah blah blah)

- modularize and extract out components causing "use client" to not get as much performance decrease from CSR (key to understanding nextJS SSR)

- fetching cart if not signed in...

# lower prio
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
- [ ] Checkout flow
- [ ] Deployment to production

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

