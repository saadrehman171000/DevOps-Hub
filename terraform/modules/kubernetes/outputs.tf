output "namespace" {
  description = "The namespace where resources are deployed"
  value       = kubernetes_namespace.devopshub.metadata[0].name
}

output "service_ip" {
  description = "LoadBalancer IP of the Next.js service"
  value       = kubernetes_service.nextjs.status[0].load_balancer[0].ingress[0].ip
}