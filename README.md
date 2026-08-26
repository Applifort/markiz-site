# markiz-site

Одностраничная заглушка для сервиса Markiz на Astro с запуском в Docker.

## Запуск (dev)

```bash
docker compose up --build
```

Сайт будет доступен на `http://localhost:4321`.

## Сборка

```bash
docker compose run --rm dev npm run build
```

## Превью сборки

```bash
docker compose run --rm dev npm run preview -- --host 0.0.0.0
```