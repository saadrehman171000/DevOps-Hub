output "namespace" {
  description = "Kubernetes namespace"
  value       = module.kubernetes.namespace
}

output "nextjs_service_ip" {
  description = "LoadBalancer IP for Next.js application"
  value       = module.kubernetes.service_ip
}

output "database_service" {
  description = "PostgreSQL service name"
  value       = module.database.postgresql_service
}