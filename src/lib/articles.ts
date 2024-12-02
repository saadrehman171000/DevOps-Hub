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
    id: '1',
    title: 'Introduction to CI/CD',
    excerpt: 'Learn the basics of Continuous Integration and Continuous Deployment.',
    content: 'Full article content goes here...',
    author: 'Jane Doe',
    date: '2023-05-15',
    category: 'CI/CD',
    tags: ['DevOps', 'Automation', 'CI/CD'],
    thumbnail: '/placeholder.svg?height=200&width=300',
  },
  {
    id: '2',
    title: 'Getting Started with Jenkins',
    excerpt: 'A comprehensive guide to setting up and using Jenkins for CI.',
    content: 'Full article content goes here...',
    author: 'John Smith',
    date: '2023-06-01',
    category: 'CI/CD',
    tags: ['Jenkins', 'CI/CD', 'Automation'],
    thumbnail: '/placeholder.svg?height=200&width=300',
  },
  {
    id: '3',
    title: 'Docker Containerization Best Practices',
    excerpt: 'Learn how to effectively containerize your applications with Docker.',
    content: 'Full article content goes here...',
    author: 'Alice Johnson',
    date: '2023-06-15',
    category: 'Containerization',
    tags: ['Docker', 'Containers', 'DevOps'],
    thumbnail: '/placeholder.svg?height=200&width=300',
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
    thumbnail: '/placeholder.svg?height=200&width=300',
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
    thumbnail: '/placeholder.svg?height=200&width=300',
  },
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

