# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Add build arguments
ARG KINDE_CLIENT_ID
ARG KINDE_CLIENT_SECRET
ARG KINDE_ISSUER_URL
ARG KINDE_SITE_URL
ARG KINDE_POST_LOGOUT_REDIRECT_URL
ARG KINDE_POST_LOGIN_REDIRECT_URL
ARG NEXT_PUBLIC_API_URL
ARG KINDE_REDIRECT_URL
ARG NEXT_PUBLIC_URL
ARG DATABASE_URL
ARG DIRECT_URL

# Copy package files
COPY package*.json ./
COPY tsconfig.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy project files
COPY prisma ./prisma/
COPY src ./src
COPY public ./public
COPY next.config.js ./

# Create .env file from build arguments
RUN echo "KINDE_CLIENT_ID=${KINDE_CLIENT_ID}" >> .env && \
    echo "KINDE_CLIENT_SECRET=${KINDE_CLIENT_SECRET}" >> .env && \
    echo "KINDE_ISSUER_URL=${KINDE_ISSUER_URL}" >> .env && \
    echo "KINDE_SITE_URL=${KINDE_SITE_URL}" >> .env && \
    echo "KINDE_POST_LOGOUT_REDIRECT_URL=${KINDE_POST_LOGOUT_REDIRECT_URL}" >> .env && \
    echo "KINDE_POST_LOGIN_REDIRECT_URL=${KINDE_POST_LOGIN_REDIRECT_URL}" >> .env && \
    echo "NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}" >> .env && \
    echo "KINDE_REDIRECT_URL=${KINDE_REDIRECT_URL}" >> .env && \
    echo "NEXT_PUBLIC_URL=${NEXT_PUBLIC_URL}" >> .env && \
    echo "DATABASE_URL=${DATABASE_URL}" >> .env && \
    echo "DIRECT_URL=${DIRECT_URL}" >> .env

# Generate Prisma client
RUN npx prisma generate

# Build application
RUN npm run build

# Production stage
FROM node:18-alpine AS runner

WORKDIR /app

# Copy necessary files from builder
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/.env ./

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]