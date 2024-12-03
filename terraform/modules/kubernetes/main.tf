resource "kubernetes_namespace" "devopshub" {
  metadata {
    name = var.namespace
  }
}

resource "kubernetes_deployment" "nextjs" {
  metadata {
    name      = "nextjs"
    namespace = kubernetes_namespace.devopshub.metadata[0].name
  }

  spec {
    replicas = var.replicas

    selector {
      match_labels = {
        app = "nextjs"
      }
    }

    template {
      metadata {
        labels = {
          app = "nextjs"
        }
      }

      spec {
        container {
          name  = "nextjs"
          image = var.nextjs_image

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

          port {
            container_port = 3000
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