output "postgresql_service" {
  description = "Name of the PostgreSQL service"
  value       = "${helm_release.postgresql.name}"
}

output "postgresql_port" {
  description = "PostgreSQL service port"
  value       = 5432
}

output "database_url" {
  description = "PostgreSQL connection string"
  value       = "postgresql://postgres:${var.postgres_password}@${helm_release.postgresql.name}:5432/${var.postgres_database}"
  sensitive   = true
}