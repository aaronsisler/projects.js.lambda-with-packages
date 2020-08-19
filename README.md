rm -rf node_modules \
&& rm -f bundle.zip \
&& npm ci \
&& npm run build \
&& rm -rf node_modules \
&& npm install --production \
&& zip -r bundle.zip ./dist node_modules
