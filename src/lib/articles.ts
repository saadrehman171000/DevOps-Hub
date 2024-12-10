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

      ## What is CI/CD?

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
      - Unit testing
      - Integration testing
      - Security scanning
      - Performance testing

      ### 4. Deploy
      - Staging deployment
      - Production deployment
      - Rollback procedures
      - Health checks

      ## Best Practices

      1. **Automate Everything**
         - Build process
         - Testing
         - Deployment
         - Monitoring

      2. **Version Control**
         - Use meaningful commit messages
         - Branch naming conventions
         - Pull request reviews
         - Clean git history

      3. **Testing Strategy**
         - Test early and often
         - Automated test suites
         - Test coverage metrics
         - Performance testing

      ## Popular CI/CD Tools

      1. **GitHub Actions**
         - Cloud-hosted
         - Easy GitHub integration
         - YAML configuration
         - Free for public repos

      2. **GitLab CI**
         - Built into GitLab
         - Container-native
         - Auto DevOps
         - Integrated registry

      3. **Jenkins**
         - Self-hosted
         - Highly customizable
         - Rich plugin ecosystem
         - Community support

      ## Implementation Steps

      1. **Set Up Version Control**
         - Choose a git platform
         - Define branching strategy
         - Configure access controls

      2. **Configure Build Process**
         - Define build steps
         - Set up dependencies
         - Configure artifacts

      3. **Implement Testing**
         - Write automated tests
         - Set up test environments
         - Configure test runners

      4. **Automate Deployment**
         - Define deployment stages
         - Configure environments
         - Set up monitoring

      ## Common Workflows

      ### Feature Development
      \`\`\`bash
      # Feature branch workflow
      git checkout -b feature/new-feature
      # Make changes
      git commit -m "Add new feature"
      git push origin feature/new-feature
      # Create pull request
      # Automated tests run
      # Code review
      # Merge to main branch
      # Automated deployment
      \`\`\`

      ## Monitoring and Metrics

      1. **Key Metrics**
         - Deployment frequency
         - Lead time for changes
         - Change failure rate
         - Mean time to recovery

      2. **Monitoring Tools**
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

      Jenkins is one of the most popular open-source automation servers that helps automate the parts of software development related to building, testing, and deploying, facilitating continuous integration and continuous delivery (CI/CD).

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
      - The basic unit of work in Jenkins
      - Can be freestyle projects, pipelines, or multi-branch pipelines
      - Contains build steps and post-build actions

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

      1. **Security**
         - Use role-based access control
         - Keep Jenkins behind a firewall
         - Regular security updates
         - Use credentials management

      2. **Performance**
         - Regular cleanup of old builds
         - Optimize workspace cleanup
         - Configure proper build retention policies
         - Monitor resource usage

      3. **Pipeline Management**
         - Use Jenkinsfile in source control
         - Implement proper error handling
         - Use shared libraries for common functionality
         - Keep pipelines modular

      ## Common Plugins

      1. **Git Plugin**
         - Integrates Git version control
         - Supports branches and tags
         - Handles webhooks

      2. **Pipeline Plugin**
         - Implements Pipeline as Code
         - Supports parallel execution
         - Provides visualization

      3. **Docker Plugin**
         - Manages Docker containers
         - Supports Docker agents
         - Handles container lifecycle

      ## Troubleshooting Tips

      1. **Build Failures**
         - Check console output
         - Verify environment variables
         - Validate source code access
         - Check resource constraints

      2. **Performance Issues**
         - Monitor memory usage
         - Check disk space
         - Review concurrent builds
         - Analyze plugin impact

      ## Next Steps

      1. Learn Pipeline as Code
      2. Implement automated testing
      3. Set up deployment pipelines
      4. Configure notifications
      5. Integrate with other tools

      Remember to regularly backup your Jenkins configuration and keep the system updated with the latest security patches.
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
         docker --version
         docker-compose --version
         \`\`\`

      ## Basic Docker Commands
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
      - Run containers as non-root
      - Scan images for vulnerabilities
      - Keep base images updated
      - Use specific tags instead of 'latest'

      ### 3. Performance
      - Optimize image size
      - Use appropriate base images
      - Implement layer caching
      - Clean up unused objects

      ## Common Issues and Solutions

      ### 1. Container Access
      - Port mapping issues
      - Volume permissions
      - Network connectivity
      - Resource constraints

      ### 2. Build Problems
      - Cache invalidation
      - Dependencies issues
      - Platform compatibility
      - Resource limits

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
    content: 'Full article content goes here...',
    author: 'Bob Wilson',
    date: '2023-07-01',
    category: 'Orchestration',
    tags: ['Kubernetes', 'Containers', 'DevOps'],
    thumbnail: 'https://kubernetes.io/images/kubernetes-horizontal-color.png',
  },
  {
    id: '5',
    title: 'Infrastructure as Code with Terraform',
    excerpt: 'Learn how to manage your cloud infrastructure using Terraform.',
    content: 'Full article content goes here...',
    author: 'Eve Anderson',
    date: '2023-07-15',
    category: 'Infrastructure',
    tags: ['Terraform', 'IaC', 'Cloud'],
    thumbnail: 'https://www.datocms-assets.com/2885/1620155116-brandhcterraformverticalcolor.svg',
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

