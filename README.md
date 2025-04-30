# Chat App – Apache Frontend with Node.js Backend

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://shields.io)
[![Version](https://img.shields.io/badge/version-1.0-blue)](https://semver.org)
[![Made with](https://img.shields.io/badge/Made%20with-Docker-blue)](https://www.docker.com/)
[![Author](https://img.shields.io/badge/author-Brenda%20Gouveia-blueviolet)](https://github.com/brenda-gouveia)


This project was developed as part of my journey into **containerization and multi-service architecture**. The main objective is to build a real-time chat application using **Docker**, integrating a **frontend served by Apache HTTP Server** and a **Node.js backend** powered by **Express** and **Socket.IO**.

A key architectural choice in this project is the use of **Apache not only to serve static frontend files**, but also as a **reverse proxy** that forwards requests to the backend, enabling communication between the client and server while handling CORS and routing transparently.

Each service runs in its own container, following Docker best practices for isolation, portability, and scalability.


<p align="center">
  <img src="images/chat_denis_brenda.png" alt="chat project UI" width="600"/>
</p>

## 📦 Technologies Used

- **Apache HTTP Server (httpd)** – Serves the frontend
- **Node.js + Express** – REST and WebSocket backend
- **Socket.IO** – Enables real-time bi-directional communication
- **Docker + Docker Compose** – Service containerization and orchestration

## ⚙️ Architecture Overview

<p align="center">
  <img src="images/config.png" alt="architecture overview" width="400"/>
</p>

- The **Apache container** serves the static frontend files on port **8080**.
- The **Node.js container** runs a Socket.IO server on port **3000**, handling real-time communication with clients.
- Communication between containers is managed via Docker’s internal network.

## 📁 Project Structure

```bash
project-root/
├── backend/                   # Node.js + Express + Socket.IO backend
│   ├── index.js               # Main backend entry point
│   ├── ...                    # Other backend logic and dependencies
│   └── Dockerfile
├── frontend/                  # Static frontend files (HTML, JS, CSS)
│   ├── index.html             # Main HTML file
│   ├── publica/               # JavaScript and CSS assets
│   |   └── index.html 
|   ├── apache_cors/               # Apache configuration files
│   │   ├── my_httpd.conf          # Custom Apache HTTPD config
│   │   └── proxy.conf             # Proxy and CORS settings
│   └── Dockerfile
├── docker-compose.yml         # Docker Compose configuration
├── README.md                  # Project documentation
└── Dockerfile                 # Apache Dockerfile (could also be in its own folder)
```
## 🚀 Getting Started

1. Clone the repository
2. Run `docker-compose up --build`
3. Access `http://localhost:8080` in your browser

## 🛠️ Future Improvements

This is the **first version** of the project. Future updates may include:

- Automated testing (Jest, Supertest)
- Authentication and user management
- UI/UX enhancements
- Deployment to cloud platforms (AWS, GCP)
- CI/CD setup

---

Built with ❤️ by **Brenda Gouveia** as a practical learning project focused on containerization and multi-service architecture.
