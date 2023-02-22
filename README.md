# MERN-Full-Stack-Pet-Adoption-App

A demo full-stack app to shop for and adopt your next pet!
See it live at https://petconnect.parkcrest.dev/pets/

Backend

Node.js, Express, and Mongoose communicate with collections on MongoDB.

The API handles filtering and sorting pets results based on client search params. See the All Pets page to use the sorting and filtering features.

The API also handles registering users, and authenticating users using HTTP-only cookies and JWT. See the Login page to login as a test user, or register for a new account using the Register page.

The backend processes payments using Stripe's API via the Checkout page.

Frontend

Client side the React app builds search params and calls to the API.
The shopping basket / cart is managed as state using React context in browser local storage. The total cost is transmitted to the backend for processing through Stripe at checkout.

Routing is handled clientside by React Router, with useLoaderData hook making API calls where possible.

User authentication state is managed with React context.

The app is styled with Tailwind and uses Typescript.

See it live at https://petconnect.parkcrest.dev/pets/

![](https://github.com/CaseyConlin/MERN-Full-Stack-Pet-Adoption-App/blob/main/petConnect-sort-filter-page-link.gif)
