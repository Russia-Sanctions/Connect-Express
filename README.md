# Russia Sanctions - Connect.js / Express.js

A small Connect/Express/Nuxt.js Middleware Plugin which blocks requests
from IP addresses linked with Russia and Belarus. A message explaining
the war and these sanctions is displayed.

## Installation

Install the package via npm:

```
npm i @russia-sanctions/connect-express
```

Or via yarn:

```
yarn add @russia-sanctions/connect-express
```

## Use with Nuxt.js

After installation, edit your `nuxt.config.js` file and add the
following:

```
serverMiddleware: [
  // ... anyOther Middleware you may have

  '@russia-sanctions/connect-express',
]
```
