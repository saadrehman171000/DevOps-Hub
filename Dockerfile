# Build stage
FROM node:18-alpine AS builder

WORKDIR /app


# Define build arguments
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

# Set environment variables
ENV KINDE_CLIENT_ID=$KINDE_CLIENT_ID
ENV KINDE_CLIENT_SECRET=$KINDE_CLIENT_SECRET
ENV KINDE_ISSUER_URL=$KINDE_ISSUER_URL
ENV KINDE_SITE_URL=$KINDE_SITE_URL
ENV KINDE_POST_LOGOUT_REDIRECT_URL=$KINDE_POST_LOGOUT_REDIRECT_URL
ENV KINDE_POST_LOGIN_REDIRECT_URL=$KINDE_POST_LOGIN_REDIRECT_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ENV KINDE_REDIRECT_URL=$KINDE_REDIRECT_URL
ENV NEXT_PUBLIC_URL=$NEXT_PUBLIC_URL
ENV DATABASE_URL=$DATABASE_URL
ENV DIRECT_URL=$DIRECT_URL

# Copy package files
COPY package*.json ./
COPY tsconfig.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy prisma schema and generate client
COPY prisma ./prisma/
RUN npx prisma generate

# Copy source code
COPY src ./src
COPY public ./public
COPY next.config.js ./

# Build the application
RUN npm run build

# Production stage
FROM node:18-alpine AS runner

WORKDIR /app

# Copy necessary files from builder
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/prisma ./prisma

# Set environment variables for production
ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["npm", "start"]