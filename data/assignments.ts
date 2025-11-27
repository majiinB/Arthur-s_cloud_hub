export type Assignment = {
  id: string
  title: string
  description: string
  category: string
  overview: string   // NEW
  content?: string
  pdfUrl: string | null
}


export const assignments: Assignment[] = [
  {
    id: "assignment-rest-api",
    title: "REST API - CRUD Operations",
    description: "Introduction to basic REST API CRUD operations using POST, GET, PUT, and DELETE.",
    category: "Backend / APIs",
    overview: `
  This assignment teaches the fundamentals of REST API CRUD operations.

  🎯 Learning Goals
  - Understand what POST, GET, PUT, and DELETE do.
  - Practice creating routes for each operation.
  - Learn how data flows from client → server → database.
  - Demonstrate retrieving, updating, and deleting data.
  `,
    pdfUrl: "/assignments/ARTUGUE_ARTHUR-ASSIGN1_REST_API.pdf"
  },
  {
    id: "assignment-aws-how-to-guide",
    title: "How-To Guide: Hosting a Website on AWS",
    description: "Step-by-step guide on AWS fundamentals, account setup, EC2/S3/RDS configuration, and deploying a sample website.",
    category: "AWS",
    overview: `
  This assignment walks you through the practical side of working with Amazon Web Services (AWS) by guiding you in setting up a full web hosting environment.

  🎯 Learning Objectives
  - Understand what AWS is and the benefits of using cloud infrastructure.
  - Learn how to sign up for AWS using the Free Tier.
  - Explore the AWS Management Console and choose appropriate regions.
  - Launch and configure an EC2 instance to host a web application.
  - Create and configure an S3 bucket for storing and serving images.
  - Create and set up an RDS database for storing application data.
  - Connect to an EC2 instance and run commands to deploy a Node.js web application.
  - Learn basic cost-saving strategies to avoid unexpected AWS charges.
  - Gain awareness of advanced AWS services such as AI, ML, and certifications.

  📃 Summary
  You will follow the scenario of building a website for "Mike's Macaroon Market," requiring compute resources, storage, and a database.  
  Through this guide, you will:
  - Create and configure cloud resources  
  - Deploy an app using Git, Node.js, and AWS credentials  
  - Access your hosted website via a browser  

  This assignment builds foundational cloud skills needed for real-world deployments.
  `,
    pdfUrl: "/assignments/ARTUGUE_ASSIGNMENT2-HOW_TO_GUIDE.pdf"
  },
  {
    id: "assignment-docker-history-best-practices",
    title: "Docker & Containerization – History, Best Practices, and Study Plan",
    description: "An in-depth guide covering the evolution of containerization, Docker fundamentals, optimization techniques, security best practices, and a structured study plan.",
    category: "Containerization",
    overview: `
  This assignment provides a comprehensive deep dive into Docker and the broader containerization ecosystem. It begins with the historical evolution of process isolation—from chroot, FreeBSD Jails, and LXC—to Docker’s breakthrough and modern OCI-standardized tooling. It then progresses into Docker architecture, CLI mastery, best practices, and advanced production-focused strategies.

  🎯 Learning Objectives
  - Understand the full historical evolution of containerization technologies.
  - Learn how Docker standardized the modern container ecosystem and influenced Kubernetes.
  - Gain mastery over Docker fundamentals: images, containers, Dockerfiles, and core CLI commands.
  - Compare containers vs. virtual machines and understand kernel-level isolation.
  - Learn best practices for writing optimized Dockerfiles (layer caching, build context control, multi-stage builds).
  - Explore advanced BuildKit caching techniques for CI/CD environments.
  - Understand container security, privilege minimization, and host hardening.
  - Learn multi-container development using Docker Compose.
  - Compare Docker Swarm and Kubernetes orchestration models.
  - Follow a structured 12-week study plan designed for full Docker mastery.
  - Complete hands-on labs covering registries, security, Compose overrides, and more.

  📄 Summary
  The document serves as a complete containerization curriculum—from fundamental history to advanced production practices. It teaches students how Docker works internally, how to build efficient and secure containerized applications, and how to scale toward multi-container orchestration using Compose, Swarm, and Kubernetes. The included study plan and hands-on labs simulate real-world conditions and help develop practical mastery.
  `,
    pdfUrl: "/assignments/Arthur_Artugue_DC.pdf"
  },
  {
    id: "assignment-virtualization-vs-containerization-edge",
    title: "Virtualization vs. Containerization for Edge Computing",
    description: "A narrative report comparing virtualization and containerization for efficient application deployment in edge environments.",
    category: "Virtualization & Containerization",
    overview: `
  This report summarizes a study comparing Virtual Machines (VMs) and Containers (Docker, Podman, Kubernetes) for deploying applications across the computing continuum, with a focus on edge computing.

  🔭 Study Overview
  - Evaluated performance, energy usage, and deployment efficiency.
  - Tested on ARM devices (e.g., Raspberry Pi) and x86 environments.
  - Included a real-world drone image-processing workload.

  🔍 Key Insights
  - Containers are more lightweight, faster, and energy-efficient than VMs.
  - Kubernetes is effective for scaling and long-running workloads.
  - ARM systems showed strong efficiency for edge deployments.
  - Container-based task distribution improved processing speed.

  ✅ Conclusion
  Containers are ideal for flexible, efficient edge deployments, while VMs remain useful when full OS isolation is required.
  `,
    pdfUrl: "/assignments/ARTUGUE-ELECT-3_NARRATIVE_REPORT.pdf"
  },
  {
    id: "home-lab-minikube-activity",
    title: "Minikube Home Lab Activity: Deployments and Persistent Volumes",
    description: "A Kubernetes home lab activity using Minikube to practice deployments, Services, container interaction, and stateful applications with Persistent Volumes.",
    category: "Kubernetes",
    overview: `
  🎯 Learning Objectives
  - Understand how to create and manage a local Kubernetes cluster using Minikube.
  - Deploy applications using Kubernetes Deployments and expose them with Services.
  - Interact with running containers using \`kubectl exec\`.
  - Enable and use cluster addons such as metrics-server.
  - Deploy stateful applications using kustomization and PersistentVolumeClaims.

  📃 Summary
  - This activity guides you through building a functional Kubernetes environment using Minikube on Windows with the Hyper-V driver.  
  - You deploy a simple application (\`hello-node\`), expose it through a LoadBalancer Service, and interact directly with running containers.  
  - You also enable resource monitoring through metrics-server and deploy a complete WordPress + MySQL stack that uses Persistent Volumes for data persistence.  
  - The lab concludes with proper resource cleanup and shutting down the Minikube cluster.
  `,
    pdfUrl: "/assignments/ARTUGUE_Home_Lab_Activity.pdf"
  }
]

export default assignments
