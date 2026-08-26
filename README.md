# markiz-site

Маркетинговый сайт Маркиза — десктопного приложения для работы с Честным знаком.

`dist/` в репозитории нет. Для ежедневной работы нужен **dev-сервер**, не preview.

## Запуск (dev)

Локально:

```bash
npm install
npm run dev
```

Сайт: [http://localhost:4321/](http://localhost:4321/)

Через Docker:

```bash
docker compose up --build
```

Если в браузере 404: остановите старый процесс на 4321 (`Ctrl+C` в том терминале или `docker compose down`) и снова запустите `npm run dev`. Preview без свежей сборки как раз отдаёт 404, потому что `dist/` больше не хранится в git.

## Сборка

```bash
npm run build
```

## Превью сборки

Собирает сайт и поднимает статику:

```bash
npm run preview
```
