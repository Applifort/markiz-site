# markiz-site

Маркетинговый сайт Маркиза — десктопного приложения для работы с Честным знаком.

`dist/` в репозитории нет. Для работы нужен **dev-сервер** (`astro dev`), не preview.

## Запуск

Локально, без Docker:

```bash
npm install
npm run dev
```

Сайт: [http://localhost:4321/](http://localhost:4321/)

Через Docker — из корня репозитория:

```bash
docker compose down -v
docker compose up --build
```

`-v` удаляет старый том `node_modules`. Обычный `--build` образ пересобирает, том нет — из‑за этого 404 мог остаться после «пересборки».

В логах должно быть `Markiz site: http://localhost:4321/` и `astro ... local`. Если контейнер сразу падает с `index.astro not found` — команда запущена не из корня `markiz-site`.

## Сборка

```bash
npm run build
```

## Превью сборки

```bash
npm run preview
```
