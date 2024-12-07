variable "app_name" {
  description = "Name of the application"
  type        = string
  default     = "nextjs-app"
}

variable "image_name" {
  description = "Docker image name"
  type        = string
  default     = "saadrehman17100/devopshub-web:latest"
}