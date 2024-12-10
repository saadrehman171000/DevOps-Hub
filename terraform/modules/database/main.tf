resource "helm_release" "postgresql" {
  name       = "postgresql"
  repository = "bitnami"
  chart      = "postgresql"
  version    = "12.5.6"
  namespace  = var.namespace

  values = [
    <<-EOT
    auth:
      postgresPassword: "${var.postgres_password}"
      database: "${var.postgres_database}"
    primary:
      persistence:
        size: "10Gi"
      resources:
        requests:
          memory: "256Mi"
          cpu: "250m"
    EOT
  ]
}