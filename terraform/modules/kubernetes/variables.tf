variable "app_name" {
  description = "Name of the application"
  type        = string
  default     = "nextjs-app"
}

variable "image_name" {
  description = "Docker image name"
  type        = string
  default     = "saadrehman17100/devopshub-web"
}

variable "image_tag" {
  description = "Docker image tag"
  type        = string
  default     = "v1.0.0"
}

variable "image_digest" {
  description = "Docker image digest (SHA256)"
  type        = string
  default     = "sha256:abc123..."
}