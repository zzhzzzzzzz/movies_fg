FROM node:14-alpine
COPY index.js /index.js
CMD /usr/local/bin/node /index.js