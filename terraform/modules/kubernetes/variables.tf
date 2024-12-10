variable "namespace" {
  description = "Kubernetes namespace for the application"
  type        = string
}

variable "replicas" {
  description = "Number of replicas for the Next.js application"
  default     = 2
  type        = number
}

variable "nextjs_image" {
  description = "Docker image for the Next.js application"
  type        = string
}

variable "database_url" {
  description = "PostgreSQL database URL"
  type        = string
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
}

variable "kinde_redirect_url" {
  description = "Kinde Redirect URL"
  type        = string
}