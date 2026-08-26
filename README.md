# markiz-site

Маркетинговый сайт Маркиза — десктопного приложения для работы с Честным знаком.

## Запуск (dev)

```bash
docker compose up --build
```

Сайт будет доступен на `http://localhost:4321`.

Локально без Docker:

```bash
npm install
npm run dev
```

## Сборка

```bash
docker compose run --rm dev npm run build
```

или `npm run build`.

## Превью сборки

```bash
docker compose run --rm dev npm run preview -- --host 0.0.0.0
```
