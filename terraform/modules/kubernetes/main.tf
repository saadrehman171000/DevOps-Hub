resource "kubernetes_namespace" "devopshub" {
  metadata {
    name = var.namespace
  }
}

resource "kubernetes_deployment" "nextjs" {
  metadata {
    name      = var.app_name
    namespace = var.namespace
    labels = {
      app = var.app_name
    }
  }

  spec {
    replicas = var.replicas

    selector {
      match_labels = {
        app = var.app_name
      }
    }

    template {
      metadata {
        labels = {
          app = var.app_name
        }
      }

      spec {
        # Add security context for the pod
        security_context {
          run_as_non_root = true
          run_as_user     = 1000
          fs_group        = 1000
        }

        container {
          name  = var.app_name
          image = "${var.image_name}@${var.image_digest}"  # Use digest instead of tag

          # Add resource limits and requests
          resources {
            limits = {
              cpu    = "500m"
              memory = "512Mi"
            }
            requests = {
              cpu    = "250m"
              memory = "256Mi"
            }
          }

          # Add liveness probe
          liveness_probe {
            http_get {
              path = "/api/health"
              port = 3000
            }
            initial_delay_seconds = 30
            period_seconds       = 10
          }

          # Add readiness probe
          readiness_probe {
            http_get {
              path = "/api/health"
              port = 3000
            }
            initial_delay_seconds = 5
            period_seconds       = 5
          }

          # Add security context for the container
          security_context {
            allow_privilege_escalation = false
            read_only_root_filesystem = true
            capabilities {
              drop = ["ALL"]
              add  = []
            }
          }

          port {
            container_port = 3000
          }

          env {
            name  = "DATABASE_URL"
            value = var.database_url
          }

          env {
            name  = "KINDE_CLIENT_ID"
            value = var.kinde_client_id
          }

          env {
            name  = "KINDE_CLIENT_SECRET"
            value = var.kinde_client_secret
          }

          env {
            name  = "KINDE_ISSUER_URL"
            value = var.kinde_issuer_url
          }

          env {
            name  = "KINDE_SITE_URL"
            value = var.kinde_site_url
          }

          env {
            name  = "KINDE_REDIRECT_URL"
            value = var.kinde_redirect_url
          }
        }
      }
    }
  }
}

resource "kubernetes_service" "nextjs" {
  metadata {
    name      = "nextjs"
    namespace = kubernetes_namespace.devopshub.metadata[0].name
  }

  spec {
    selector = {
      app = "nextjs"
    }

    port {
      port        = 80
      target_port = 3000
    }

    type = "LoadBalancer"
  }
} 