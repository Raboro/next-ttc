## Demo:

coming soon

## Development:

```bash
npm run dev
```

=> starts next on localhost:3000 and strapi on localhost:1337

## Env files:

/strapi/.env

```bash
HOST=0.0.0.0
PORT=1337
APP_KEYS="toBeModified1,toBeModified2"
API_TOKEN_SALT=tobemodified
ADMIN_JWT_SECRET=tobemodified
TRANSFER_TOKEN_SALT=tobemodified
JWT_SECRET=tobemodified
```

/next/.env.local

```bash
# for testing on local machine
NEXT_PUBLIC_STRAPI_URL_PUBLIC=http://127.0.0.1:1337

# for deployment
# NEXT_PUBLIC_STRAPI_URL_PUBLIC=https://yourdomain.com

STRAPI_URL_LOCAL=http://127.0.0.1:1337
MY_TISCHTENNIS_LINK=https://www.mytischtennis.de/...
```

## Deployment:

Nginx config: coming soon
