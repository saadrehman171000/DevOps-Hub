# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Add build arguments
ARG KINDE_ISSUER_URL
ARG KINDE_CLIENT_ID
ARG KINDE_CLIENT_SECRET
ARG KINDE_SITE_URL
ARG DATABASE_URL

# Set environment variables
ENV KINDE_ISSUER_URL=$KINDE_ISSUER_URL
ENV KINDE_CLIENT_ID=$KINDE_CLIENT_ID
ENV KINDE_CLIENT_SECRET=$KINDE_CLIENT_SECRET
ENV KINDE_SITE_URL=$KINDE_SITE_URL
ENV DATABASE_URL=$DATABASE_URL
ENV NEXT_TELEMETRY_DISABLED=1

# Copy package files
COPY package*.json ./
COPY tsconfig.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy application files
COPY prisma ./prisma/
COPY src ./src
COPY public ./public
COPY next.config.js ./
COPY .env ./

# Generate Prisma client
RUN npx prisma generate

# Build the application
RUN npm run build

# Production stage
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Copy necessary files from builder
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.env ./

# Expose the port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]