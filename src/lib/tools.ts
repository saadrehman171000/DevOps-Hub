export interface Tool {
    id: string;
    name: string;
    description: string;
    category: string;
    icon: string;
    tutorialLink: string;
  }
  
  export const tools: Tool[] = [
    {
      id: "docker",
      name: "Docker",
      description: "Platform for developing, shipping, and running applications in containers",
      category: "Containerization",
      icon: "docker",
      tutorialLink: "/tutorials/docker-getting-started",
    },
    {
      id: "kubernetes",
      name: "Kubernetes",
      description: "Open-source system for automating deployment, scaling, and management of containerized applications",
      category: "Orchestration",
      icon: "kubernetes",
      tutorialLink: "/tutorials/kubernetes-basics",
    },
    {
      id: "jenkins",
      name: "Jenkins",
      description: "Open-source automation server for building, deploying, and automating any project",
      category: "CI/CD",
      icon: "jenkins",
      tutorialLink: "/tutorials/jenkins-pipeline",
    },
    {
      id: "terraform",
      name: "Terraform",
      description: "Infrastructure as Code tool for building, changing, and versioning infrastructure safely and efficiently",
      category: "Infrastructure as Code",
      icon: "terraform",
      tutorialLink: "/tutorials/terraform-basics",
    },
    {
      id: "ansible",
      name: "Ansible",
      description: "Automation tool for configuration management, application deployment, and task automation",
      category: "Configuration Management",
      icon: "ansible",
      tutorialLink: "/tutorials/ansible-playbooks",
    },
    {
      id: "prometheus",
      name: "Prometheus",
      description: "Open-source monitoring and alerting toolkit designed for reliability and scalability",
      category: "Monitoring",
      icon: "prometheus",
      tutorialLink: "/tutorials/prometheus-monitoring",
    },
    {
      id: "git",
      name: "Git",
      description: "Distributed version control system for tracking changes in source code during software development",
      category: "Version Control",
      icon: "git",
      tutorialLink: "/tutorials/git-basics",
    },
    {
      id: "grafana",
      name: "Grafana",
      description: "Open-source platform for monitoring and observability with beautiful dashboards and visualizations",
      category: "Monitoring",
      icon: "grafana",
      tutorialLink: "/tutorials/grafana-dashboards",
    },
  ];
  
  export const getTools = () => tools;
  
  export const getToolCategories = () => {
    return Array.from(new Set(tools.map(tool => tool.category)));
  };
  
  