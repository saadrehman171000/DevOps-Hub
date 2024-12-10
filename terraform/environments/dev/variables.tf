variable "namespace" {
  description = "Kubernetes namespace"
  type        = string
  default     = "devopshub-dev"
}

variable "replicas" {
  description = "Number of application replicas"
  type        = number
  default     = 2
}

variable "nextjs_image" {
  description = "Docker image for Next.js application"
  type        = string
}

variable "postgres_password" {
  description = "PostgreSQL password"
  type        = string
  sensitive   = true
}

variable "postgres_database" {
  description = "PostgreSQL database name"
  type        = string
  default     = "devopshub"
}

variable "kinde_client_id" {
  description = "Kinde Client ID"
  type        = string
}

variable "kinde_client_secret" {
  description = "Kinde Client Secret"
  type        = string
  sensitive   = true
}

variable "kinde_issuer_url" {
  description = "Kinde Issuer URL"
  type        = string
}

variable "kinde_site_url" {
  description = "Kinde Site URL"
  type        = string
  default     = "http://localhost:3000"
}

variable "kinde_redirect_url" {
  description = "Kinde Redirect URL"
  type        = string
  default     = "http://localhost:3000/api/auth/kinde_callback"
}