FROM node:20-alpine

WORKDIR /app

COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

COPY package.json package-lock.json ./
# esbuild postinstall can hit ETXTBSY (binary exec'd while still being written); retry is safe because npm ci wipes node_modules first
RUN npm ci || npm ci

ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "4321"]
