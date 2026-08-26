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

Если **http://127.0.0.1:4321/** открывается, а **http://localhost:4321/** даёт 404 — Docker уже работает. Браузер резолвит `localhost` в IPv6 (`::1`), а там старый `astro preview` отвечает 404. Пока этот процесс принимает соединение, браузер не переключается на IPv4.

Убить только IPv6-слушателя на 4321 (контейнер на `127.0.0.1` не трогает):

```bash
npm run free-localhost
```

или вручную:

```bash
kill $(lsof -ti6TCP:4321 -sTCP:LISTEN)
```

После этого обновите вкладку `http://localhost:4321/`. Docker перезапускать не нужно.

Проверка:

```bash
lsof -nP -iTCP:4321 | grep LISTEN
curl -4 -I http://127.0.0.1:4321/
curl -6 -I http://[::1]:4321/
```

## Сборка

```bash
npm run build
```

## Превью сборки

```bash
npm run preview
```
