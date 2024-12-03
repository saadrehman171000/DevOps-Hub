# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Accept build arguments
ARG KINDE_CLIENT_ID
ARG KINDE_CLIENT_SECRET
ARG KINDE_ISSUER_URL

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy prisma schema
COPY prisma ./prisma/

# Generate Prisma client
RUN npx prisma generate

# Copy the rest of the application
COPY . .

# Set environment variables for build
ENV KINDE_CLIENT_ID=$KINDE_CLIENT_ID
ENV KINDE_CLIENT_SECRET=$KINDE_CLIENT_SECRET
ENV KINDE_ISSUER_URL=$KINDE_ISSUER_URL

# Build the Next.js application
RUN npm run build

# Production stage
FROM node:18-alpine AS runner

WORKDIR /app

# Copy necessary files from builder
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/prisma ./prisma

# Expose the port the app runs on
EXPOSE 3000

# Set environment variables
ENV NODE_ENV production
ENV PORT 3000

# Start the application
CMD ["node", "server.js"]