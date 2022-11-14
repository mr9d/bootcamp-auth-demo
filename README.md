# Authentication demo for PASHA Bootcamp

## About

Demo application developed for security module of [PASHA Coding Bootcamp](https://pasha-holding.az/en/press-media/news/pasha-coding-bootcamp/) in 2020. The goal was to demonstrate different approaches to registration, authorization, and authentication mechanisms on a website. At the same time, the application should not be complete, so students could not use the provided code for their projects.

The source code and the aplication itself was used for livestream for students.

## Running application

If you want to run the application, you can do the following:

- `git clone` the repository
- Run `npm install`
- Build application with `npm run build`
- In two different windows:
  - Start back-end part with `npm run server`
  - Start front-end part with `npm run start`

After the successful execution the application should be available at <http://localhost:3000>

Back-end REST API should be available for calls from a REST client at <http://localhost:3001>

## How to use

Back-end provides a number of REST API endpoints. Some of them are not used by the front-end and are only accessible by [Insomnia](https://insomnia.rest/), [Postman](https://www.postman.com/), or similar client. That was done intentionally for educational purposes.

### POST /register

Expects user credentials JSON body:

```
{
  "login": "...",
  "pass": "..."
}
```

Returns login on successful registration.

### POST /token

Expects user credentials JSON body:

```
{
  "login": "...",
  "pass": "..."
}
```

Returns login on successful authentication and set `token` cookie.

### GET /credits

Returns list of credits. Authentication is not required.

### GET /credits/:id

Returns one credit by provided id. Authentication is not required.

### POST /credits

Creates a new credit. Expects following JSON bosy:

```
{
  "name": "...",
  "purpose": "...",
  "sum": "...",
  "date": "..."
}
```

Returns new entity on success, or `401` status on invalid authentication.

### DELETE /credits/:id

Creates a credit by id.

Returns deleted entity on success, or `401` status on invalid authentication.

## Used technologies

- React 16 ([documentation](https://reactjs.org/docs/getting-started.html))
- Express 4.17 ([documentation](https://expressjs.com/en/4x/api.html))
- [Insomnia](https://insomnia.rest/)
- [Postman](https://www.postman.com/)
