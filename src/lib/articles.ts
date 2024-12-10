export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  thumbnail: string;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Introduction to CI/CD",
    excerpt: "Learn the basics of Continuous Integration and Continuous Deployment.",
    content: `
      # Introduction to CI/CD

Continuous Integration and Continuous Delivery/Deployment (CI/CD) are modern software development practices that enable teams to deliver code changes more frequently and reliably.

      ## Core Components

      ### 1. Continuous Integration (CI)
      - Automated code integration
      - Regular code commits
      - Automated testing
      - Code quality checks

      ### 2. Continuous Delivery (CD)
      - Automated build processes
      - Deployment automation
      - Environment management
      - Release coordination

      ## CI/CD Pipeline Stages

      ### 1. Source Control
      - Code commits
      - Branch management
      - Code review process
      - Version control

      ### 2. Build
      \`\`\`yaml
      # Example GitHub Actions workflow
      name: Build
      on: [push]
      jobs:
        build:
          runs-on: ubuntu-latest
          steps:
            - uses: actions/checkout@v2
            - name: Build
              run: |
                npm install
                npm run build
      \`\`\`

### 3. Test
\`\`\`yaml
# Example test workflow
name: Test
on: [pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run Tests
        run: |
          npm install
          npm test
\`\`\`

### 4. Deploy
\`\`\`yaml
# Example deployment workflow
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy
        run: |
          echo "Deploying to production..."
\`\`\`

      ## Best Practices

### 1. Automate Everything
- Build process
- Testing
- Deployment
- Monitoring

### 2. Version Control
- Use meaningful commit messages
- Branch naming conventions
- Pull request reviews
- Clean git history

### 3. Testing Strategy
- Test early and often
- Automated test suites
- Test coverage metrics
- Performance testing

      ## Popular CI/CD Tools

### 1. GitHub Actions
- Cloud-hosted
- Easy GitHub integration
- YAML configuration
- Free for public repos

### 2. GitLab CI
- Built into GitLab
- Container-native
- Auto DevOps
- Integrated registry

### 3. Jenkins
- Self-hosted
- Highly customizable
- Rich plugin ecosystem
- Community support

      ## Implementation Steps

### 1. Set Up Version Control
\`\`\`bash
# Initialize git repository
git init

# Add remote repository
git remote add origin https://github.com/username/repo.git

# Create main branch
git checkout -b main
\`\`\`

### 2. Configure Build Process
\`\`\`yaml
# Example build configuration
build:
  steps:
    - name: Install dependencies
      run: npm install
    - name: Build application
      run: npm run build
    - name: Run tests
      run: npm test
\`\`\`

### 3. Implement Testing
\`\`\`javascript
// Example test suite
describe('Application Tests', () => {
  test('should build successfully', () => {
    expect(build()).toBeTruthy();
  });
  
  test('should pass integration tests', () => {
    expect(integrate()).toBeTruthy();
  });
});
\`\`\`

### 4. Automate Deployment
\`\`\`yaml
# Example deployment configuration
deploy:
  production:
    steps:
      - name: Deploy to production
        run: |
          docker build -t app .
          docker push app
          kubectl apply -f k8s/
\`\`\`

      ## Monitoring and Metrics

### 1. Key Metrics
- Deployment frequency
- Lead time for changes
- Change failure rate
- Mean time to recovery

### 2. Monitoring Tools
- Prometheus
- Grafana
- ELK Stack
- New Relic

## Next Steps
1. Choose your CI/CD tools
2. Set up your first pipeline
3. Implement automated testing
4. Configure deployment strategies
5. Establish monitoring
    `,
    author: "Jane Doe",
    date: "2023-05-15",
    category: "CI/CD",
    tags: ["DevOps", "Automation", "CI/CD"],
    thumbnail: "https://www.parasoft.com/wp-content/uploads/2021/04/CICD_CICD.png"
  },
  {
    id: '2',
    title: 'Getting Started with Jenkins',
    excerpt: 'A comprehensive guide to setting up and using Jenkins for CI.',
    content: `
# Getting Started with Jenkins

Jenkins is one of the most popular open-source automation servers that helps automate the parts of software development related to building, testing, and deploying.

      ## Installation and Setup

      ### Prerequisites
      - Java 11 or Java 17 (either JRE or JDK)
      - 256MB+ of RAM
      - 1GB+ of drive space

### Installation Steps

1. Download Jenkins from [jenkins.io](https://jenkins.io)
2. Run the installer appropriate for your operating system
3. Access Jenkins through your web browser at \`http://localhost:8080\`
4. Follow the initial setup wizard to:
   - Unlock Jenkins using the initial admin password
   - Install suggested plugins
   - Create your first admin user

## Basic Concepts

### 1. Jobs/Projects
\`\`\`groovy
pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
    }
}
\`\`\`

      ### 2. Builds
      - Each execution of a job
      - Assigned an incremental build number
      - Stores logs and artifacts

      ### 3. Workspace
      - Directory where Jenkins performs its work
      - Contains source code and build outputs
      - Cleaned automatically or manually

      ## Creating Your First Pipeline

      \`\`\`groovy
      pipeline {
          agent any
          
          stages {
              stage('Build') {
                  steps {
                      echo 'Building..'
                      // Add your build commands here
                  }
              }
              stage('Test') {
                  steps {
                      echo 'Testing..'
                      // Add your test commands here
                  }
              }
              stage('Deploy') {
                  steps {
                      echo 'Deploying....'
                      // Add your deployment commands here
                  }
              }
          }
      }
      \`\`\`

      ## Best Practices

### 1. Security
- Use role-based access control
- Keep Jenkins behind a firewall
- Regular security updates
- Use credentials management

### 2. Performance
- Regular cleanup of old builds
- Optimize workspace cleanup
- Configure proper build retention policies
- Monitor resource usage

### 3. Pipeline Management
- Use Jenkinsfile in source control
- Implement proper error handling
- Use shared libraries for common functionality
- Keep pipelines modular
    `,
    author: 'John Smith',
    date: '2023-06-01',
    category: 'CI/CD',
    tags: ['Jenkins', 'CI/CD', 'Automation'],
    thumbnail: 'https://www.jenkins.io/images/logos/jenkins/jenkins.png'
  },
  {
    id: "3",
    title: "Docker Containerization Best Practices",
    excerpt: "Learn how to effectively containerize your applications with Docker.",
    content: `
      # Docker Containerization Best Practices

Docker has revolutionized how we deploy and manage applications. This guide covers essential practices for containerizing your applications effectively.

## Prerequisites
- A 64-bit processor
- At least 4GB of RAM
- Windows 10/11 Pro/Enterprise (for Windows users)
- macOS 10.15 or newer (for Mac users)
- Linux kernel 3.10 or higher (for Linux users)

## Installation Steps

1. Download Docker Desktop from [docker.com](https://www.docker.com/products/docker-desktop)
2. Run the installer for your operating system
3. Verify installation by running:
\`\`\`bash
# Check Docker version
docker --version

# Check Docker Compose version
docker-compose --version
\`\`\`

## Basic Docker Commands

### Container Management
\`\`\`bash
# Pull an image
docker pull nginx

      # Run a container
      docker run -d -p 8080:80 nginx

      # List running containers
      docker ps

      # Stop a container
      docker stop container_id

# Remove a container
docker rm container_id

# View container logs
docker logs container_id
\`\`\`

### Image Management
\`\`\`bash
# List images
docker images

# Remove image
docker rmi image_name

# Build image from Dockerfile
docker build -t myapp:latest .
\`\`\`

## Creating Your First Dockerfile

\`\`\`dockerfile
# Use an official Node runtime as base
FROM node:18-alpine

      # Set working directory
      WORKDIR /app

      # Copy package files
      COPY package*.json ./

      # Install dependencies
      RUN npm install

      # Copy application code
      COPY . .

      # Expose port
      EXPOSE 3000

      # Start application
      CMD ["npm", "start"]
      \`\`\`

## Docker Compose Example

\`\`\`yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      NODE_ENV: production
    volumes:
      - .:/app
  
  db:
    image: mongodb:latest
    volumes:
      - db_data:/data/db

      volumes:
        db_data:
      \`\`\`

      ## Best Practices

      ### 1. Image Building
      - Use official base images
      - Minimize layer count
      - Implement multi-stage builds
      - Use .dockerignore file

### 2. Security
\`\`\`dockerfile
# Example of security best practices
FROM node:18-alpine

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Set working directory
WORKDIR /app

# Switch to non-root user
USER appuser

# Rest of your Dockerfile...
\`\`\`

      ### 3. Performance
      - Optimize image size
      - Use appropriate base images
      - Implement layer caching
      - Clean up unused objects

      ## Common Issues and Solutions

### 1. Container Access
\`\`\`bash
# Fix permission issues
chmod 755 /docker/volumes

# Check container networking
docker network ls
docker network inspect bridge

# View container resources
docker stats container_id
\`\`\`

### 2. Build Problems
\`\`\`bash
# Clear build cache
docker builder prune

# Debug build process
docker build --progress=plain .

# Check resource limits
docker info
\`\`\`

## Advanced Topics

### 1. Multi-stage Builds
\`\`\`dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
\`\`\`

### 2. Docker Networks
\`\`\`bash
# Create network
docker network create myapp-network

# Connect containers
docker network connect myapp-network container1
docker network connect myapp-network container2
\`\`\`

## Next Steps
1. Learn Docker networking
2. Explore Docker volumes
3. Study container orchestration
4. Implement CI/CD with Docker
    `,
    author: "Alice Johnson",
    date: "2023-06-15",
    category: "Containerization",
    tags: ["Docker", "Containers", "DevOps"],
    thumbnail: "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png"
  },
  {
    id: '4',
    title: 'Kubernetes Deployment Tutorial',
    excerpt: 'Step-by-step guide to deploying applications on Kubernetes.',
    content: `
# Kubernetes Deployment Tutorial

Learn how to effectively deploy and manage applications on Kubernetes, the leading container orchestration platform.

## Prerequisites
- Docker installed and configured
- kubectl CLI tool installed
- Access to a Kubernetes cluster
- Basic understanding of containers
- Familiarity with YAML

## Core Concepts

### 1. Pods
\`\`\`yaml
# Basic Pod configuration
apiVersion: v1
kind: Pod
metadata:
  name: myapp-pod
  labels:
    app: myapp
spec:
  containers:
  - name: myapp-container
    image: nginx:latest
    ports:
    - containerPort: 80
\`\`\`

### 2. Deployments
\`\`\`yaml
# Deployment configuration
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp-container
        image: nginx:latest
        ports:
        - containerPort: 80
\`\`\`

### 3. Services
\`\`\`yaml
# Service configuration
apiVersion: v1
kind: Service
metadata:
  name: myapp-service
spec:
  type: LoadBalancer
  selector:
    app: myapp
  ports:
  - port: 80
    targetPort: 80
\`\`\`

## Basic Commands

### Cluster Management
\`\`\`bash
# Check cluster status
kubectl cluster-info

# Get nodes information
kubectl get nodes

# View cluster events
kubectl get events
\`\`\`

### Application Deployment
\`\`\`bash
# Create resources
kubectl apply -f deployment.yaml

# Check deployment status
kubectl get deployments

# Scale deployment
kubectl scale deployment myapp-deployment --replicas=5

# Rolling update
kubectl set image deployment/myapp-deployment myapp-container=nginx:1.19
\`\`\`

## Advanced Configurations

### 1. ConfigMaps
\`\`\`yaml
# ConfigMap example
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  DATABASE_URL: "mongodb://db:27017"
  API_KEY: "your-api-key"
\`\`\`

### 2. Secrets
\`\`\`yaml
# Secret configuration
apiVersion: v1
kind: Secret
metadata:
  name: app-secrets
type: Opaque
data:
  username: dXNlcm5hbWU=  # base64 encoded
  password: cGFzc3dvcmQ=  # base64 encoded
\`\`\`

## Health Checks

### 1. Liveness Probe
\`\`\`yaml
# Liveness probe configuration
livenessProbe:
  httpGet:
    path: /health
    port: 8080
  initialDelaySeconds: 15
  periodSeconds: 10
\`\`\`

### 2. Readiness Probe
\`\`\`yaml
# Readiness probe configuration
readinessProbe:
  httpGet:
    path: /ready
    port: 8080
  initialDelaySeconds: 5
  periodSeconds: 5
\`\`\`

## Resource Management

### 1. Resource Limits
\`\`\`yaml
# Resource limits and requests
resources:
  limits:
    cpu: "1"
    memory: "512Mi"
  requests:
    cpu: "0.5"
    memory: "256Mi"
\`\`\`

### 2. Horizontal Pod Autoscaling
\`\`\`yaml
# HPA configuration
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: myapp-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: myapp-deployment
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 80
\`\`\`

## Monitoring and Debugging

### 1. Logs and Events
\`\`\`bash
# View pod logs
kubectl logs pod-name

# Stream logs
kubectl logs -f pod-name

# View pod events
kubectl describe pod pod-name
\`\`\`

### 2. Debugging
\`\`\`bash
# Execute command in pod
kubectl exec -it pod-name -- /bin/bash

# Port forwarding
kubectl port-forward pod-name 8080:80

# View pod details
kubectl get pod pod-name -o yaml
\`\`\`

## Best Practices

### 1. Security
- Use RBAC for access control
- Implement network policies
- Regular security updates
- Use private container registry

### 2. High Availability
- Use multiple replicas
- Implement pod disruption budgets
- Configure proper resource requests/limits
- Use pod anti-affinity rules

### 3. Maintenance
- Regular monitoring and logging
- Implement proper backup strategies
- Use rolling updates
- Monitor cluster health

## Next Steps
1. Learn Helm package manager
2. Explore service mesh (Istio)
3. Implement CI/CD pipelines
4. Study advanced networking
5. Master monitoring solutions
    `,
    author: 'Bob Wilson',
    date: '2023-07-01',
    category: 'Orchestration',
    tags: ['Kubernetes', 'Containers', 'DevOps'],
    thumbnail: 'https://kubernetes.io/images/kubernetes-horizontal-color.png'
  },
  {
    id: '5',
    title: 'Infrastructure as Code with Terraform',
    excerpt: 'Learn how to manage your cloud infrastructure using Terraform.',
    content: `
# Infrastructure as Code with Terraform

Learn how to automate your infrastructure deployment and management using HashiCorp Terraform.

## Prerequisites
- Basic understanding of cloud concepts
- AWS/Azure/GCP account
- Command line familiarity
- Git basics

## Installation and Setup

### 1. Install Terraform
\`\`\`bash
# macOS (using Homebrew)
brew install terraform

# Windows (using Chocolatey)
choco install terraform

# Verify installation
terraform version
\`\`\`

### 2. Configure Cloud Provider
\`\`\`bash
# AWS credentials setup
export AWS_ACCESS_KEY_ID="your-access-key"
export AWS_SECRET_ACCESS_KEY="your-secret-key"
export AWS_REGION="us-west-2"
\`\`\`

## Basic Concepts

### 1. Provider Configuration
\`\`\`hcl
# AWS provider configuration
provider "aws" {
  region = "us-west-2"
}

# Azure provider configuration
provider "azurerm" {
  features {}
}

# GCP provider configuration
provider "google" {
  project = "your-project-id"
  region  = "us-central1"
}
\`\`\`

### 2. Resource Creation
\`\`\`hcl
# Create AWS EC2 instance
resource "aws_instance" "web_server" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"

  tags = {
    Name = "WebServer"
    Environment = "Production"
  }
}

# Create VPC
resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
  
  tags = {
    Name = "MainVPC"
  }
}
\`\`\`

## Variables and Outputs

### 1. Variable Definitions
\`\`\`hcl
# variables.tf
variable "environment" {
  type        = string
  description = "Deployment environment"
  default     = "development"
}

variable "instance_type" {
  type        = string
  description = "EC2 instance type"
  default     = "t2.micro"
}

variable "vpc_cidr" {
  type        = string
  description = "VPC CIDR block"
  default     = "10.0.0.0/16"
}
\`\`\`

### 2. Output Definitions
\`\`\`hcl
# outputs.tf
output "instance_ip" {
  value       = aws_instance.web_server.public_ip
  description = "Public IP of the web server"
}

output "vpc_id" {
  value       = aws_vpc.main.id
  description = "ID of the VPC"
}
\`\`\`

## Terraform Commands

### 1. Basic Workflow
\`\`\`bash
# Initialize Terraform
terraform init

# Plan changes
terraform plan

# Apply changes
terraform apply

# Destroy infrastructure
terraform destroy
\`\`\`

### 2. State Management
\`\`\`bash
# Show current state
terraform show

# List resources
terraform state list

# Remove resource from state
terraform state rm aws_instance.web_server
\`\`\`

## Advanced Concepts

### 1. Modules
\`\`\`hcl
# modules/vpc/main.tf
module "vpc" {
  source = "./modules/vpc"
  
  vpc_cidr     = var.vpc_cidr
  environment  = var.environment
  
  tags = {
    Environment = var.environment
    Terraform   = "true"
  }
}
\`\`\`

### 2. Data Sources
\`\`\`hcl
# Find latest Amazon Linux 2 AMI
data "aws_ami" "amazon_linux_2" {
  most_recent = true
  owners      = ["amazon"]
  
  filter {
    name   = "name"
    values = ["amzn2-ami-hvm-*-x86_64-gp2"]
  }
}
\`\`\`

## Best Practices

### 1. State Management
- Use remote state storage
- Enable state locking
- Implement state backup
\`\`\`hcl
# backend configuration
terraform {
  backend "s3" {
    bucket = "terraform-state-bucket"
    key    = "prod/terraform.tfstate"
    region = "us-west-2"
    dynamodb_table = "terraform-locks"
    encrypt = true
  }
}
\`\`\`

### 2. Code Organization
- Use modules for reusability
- Implement consistent naming
- Separate environments
- Version control

### 3. Security
- Encrypt sensitive data
- Use IAM roles
- Implement least privilege
- Regular security audits

## Common Patterns

### 1. Multi-Environment Setup
\`\`\`hcl
# environments/prod/main.tf
module "prod_infrastructure" {
  source = "../../modules/infrastructure"
  
  environment = "production"
  vpc_cidr    = "10.0.0.0/16"
  
  tags = {
    Environment = "production"
    Managed_by  = "terraform"
  }
}
\`\`\`

### 2. Resource Tagging
\`\`\`hcl
# Define common tags
locals {
  common_tags = {
    Environment = var.environment
    Project     = var.project_name
    Terraform   = "true"
    Owner       = "DevOps"
  }
}

# Apply tags to resources
resource "aws_instance" "example" {
  # ... other configuration ...
  
  tags = merge(
    local.common_tags,
    {
      Name = "ExampleInstance"
    }
  )
}
\`\`\`

## Troubleshooting

### 1. Common Issues
\`\`\`bash
# Debug logging
export TF_LOG=DEBUG
terraform plan

# Clear cache
rm -rf .terraform

# Refresh state
terraform refresh
\`\`\`

### 2. Best Practices
- Use detailed error messages
- Implement proper logging
- Version control state files
- Regular testing

## Next Steps
1. Learn about Terraform Cloud
2. Explore advanced modules
3. Implement CI/CD pipelines
4. Study compliance and security
5. Master state management
    `,
    author: 'Eve Anderson',
    date: '2023-07-15',
    category: 'Infrastructure',
    tags: ['Terraform', 'IaC', 'Cloud'],
    thumbnail: 'https://www.datocms-assets.com/2885/1620155116-brandhcterraformverticalcolor.svg'
  },
  {
    id: "getting-started-with-devops",
    title: "Getting Started with DevOps: A Comprehensive Guide",
    excerpt: "Learn the fundamental principles and practices of DevOps methodology.",
    content: `
      DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). 
      It aims to shorten the systems development life cycle and provide continuous delivery with high software quality.

      ## Key Principles of DevOps

      1. **Continuous Integration (CI)**
         - Automated code integration
         - Regular code commits
         - Automated testing

      2. **Continuous Delivery (CD)**
         - Automated deployment
         - Infrastructure as Code
         - Release automation

      3. **Automation**
         - Automated testing
         - Automated deployment
         - Configuration management

      ## Getting Started

      To begin your DevOps journey:
      1. Learn version control with Git
      2. Understand CI/CD pipelines
      3. Master containerization with Docker
      4. Learn infrastructure as code
      5. Practice automation
    `,
    author: "Sarah Jenkins",
    date: "2024-03-15",
    thumbnail: "https://www.parasoft.com/wp-content/uploads/2021/04/devops-pipeline.png",
    tags: ["DevOps", "CI/CD", "Automation"],
    category: "Fundamentals"
  },
  {
    id: "docker-containerization",
    title: "Docker Containerization: From Beginner to Pro",
    excerpt: "Master Docker containerization and learn how to build, ship, and run applications efficiently.",
    content: `
      Docker has revolutionized how we deploy and manage applications. 
      This guide will take you from basic concepts to advanced Docker practices.

      ## Docker Basics

      1. **Containers vs VMs**
         - Lightweight and portable
         - Shared OS kernel
         - Fast startup times

      2. **Key Concepts**
         - Images
         - Containers
         - Dockerfile
         - Docker Compose

      ## Best Practices

      1. Use official base images
      2. Minimize layer count
      3. Implement multi-stage builds
      4. Follow security guidelines
    `,
    author: "Mike Chen",
    date: "2024-03-14",
    thumbnail: "https://www.docker.com/wp-content/uploads/2023/04/docker-container.png",
    tags: ["Docker", "Containers", "DevOps"],
    category: "Containerization"
  },
  {
    id: "kubernetes-orchestration",
    title: "Kubernetes: Container Orchestration Made Simple",
    excerpt: "Explore Kubernetes architecture and learn how to manage containerized applications at scale.",
    content: `
      Kubernetes is the leading container orchestration platform. 
      Learn how to manage containerized applications effectively.

      ## Kubernetes Architecture

      1. **Control Plane Components**
         - API Server
         - etcd
         - Scheduler
         - Controller Manager

      2. **Node Components**
         - Kubelet
         - Container Runtime
         - Kube Proxy

      ## Key Concepts

      1. Pods
      2. Services
      3. Deployments
      4. StatefulSets
    `,
    author: "Lisa Rodriguez",
    date: "2024-03-13",
    thumbnail: "https://kubernetes.io/images/kubernetes-horizontal-color.png",
    tags: ["Kubernetes", "Container Orchestration", "DevOps"],
    category: "Orchestration"
  },
  {
    id: "ci-cd-pipeline-mastery",
    title: "Mastering CI/CD Pipelines",
    excerpt: "Learn how to build robust CI/CD pipelines for automated software delivery.",
    content: `
      Continuous Integration and Continuous Delivery (CI/CD) are essential practices in modern software development.
      
      ## Understanding CI/CD

      1. **Continuous Integration**
         - Automated builds
         - Code quality checks
         - Unit testing

      2. **Continuous Delivery**
         - Deployment automation
         - Environment management
         - Release strategies

      ## Popular CI/CD Tools

      1. Jenkins
      2. GitLab CI
      3. GitHub Actions
      4. CircleCI

      ## Best Practices

      1. Automate everything
      2. Implement proper testing
      3. Use infrastructure as code
      4. Monitor and log everything
    `,
    author: "David Wilson",
    date: "2024-03-12",
    thumbnail: "https://www.jenkins.io/images/logos/jenkins/jenkins.png",
    tags: ["CI/CD", "Automation", "DevOps"],
    category: "Automation"
  },
  {
    id: "cloud-native-development",
    title: "Cloud-Native Development Essentials",
    excerpt: "Discover the principles and practices of cloud-native application development.",
    content: `
      Cloud-native development is transforming how we build and deploy applications.

      ## Cloud-Native Principles

      1. **Microservices Architecture**
         - Service independence
         - Loose coupling
         - API-first approach

      2. **Containerization**
         - Docker containers
         - Container orchestration
         - Image management

      3. **DevOps Practices**
         - Automation
         - Continuous delivery
         - Infrastructure as code

      ## Cloud Platforms

      1. AWS
      2. Azure
      3. Google Cloud
      4. Digital Ocean
    `,
    author: "Emma Thompson",
    date: "2024-03-11",
    thumbnail: "https://www.docker.com/wp-content/uploads/2023/04/cloud-native.png",
    tags: ["Cloud-Native", "Microservices", "DevOps"],
    category: "Cloud Computing"
  }
];

export const getArticles = (page: number = 1, pageSize: number = 10) => {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  return {
    articles: articles.slice(start, end),
    totalPages: Math.ceil(articles.length / pageSize),
  };
};

export const getArticleById = (id: string) => {
  return articles.find(article => article.id === id);
};

export const getCategories = () => {
  return Array.from(new Set(articles.map(article => article.category)));
};

export const getTags = () => {
  return Array.from(new Set(articles.flatMap(article => article.tags)));
};

