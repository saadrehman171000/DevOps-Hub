terraform {
  required_providers {
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "~> 2.0"
    }
    helm = {
      source  = "hashicorp/helm"
      version = "~> 2.0"
    }
  }
}

provider "kubernetes" {
  config_path = "~/.kube/config"
}

provider "helm" {
  kubernetes {
    config_path = "~/.kube/config"
  }
}

module "database" {
  source = "../../modules/database"

  namespace          = var.namespace
  postgres_password  = var.postgres_password
  postgres_database  = var.postgres_database
}

module "kubernetes" {
  source = "../../modules/kubernetes"

  namespace           = var.namespace
  nextjs_image        = var.nextjs_image
  replicas           = var.replicas
  database_url        = module.database.database_url
  kinde_client_id     = var.kinde_client_id
  kinde_client_secret = var.kinde_client_secret
  kinde_issuer_url    = var.kinde_issuer_url
  kinde_site_url      = var.kinde_site_url
  kinde_redirect_url  = var.kinde_redirect_url
}