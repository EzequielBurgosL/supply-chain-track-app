# Supply Chain Tracker

This repository contains the source code for the **Supply Chain Tracker** application, which includes both the **API** (server) and **Frontend** (client). You can run the entire application stack using Docker and Docker Compose.

## Prerequisites

Clone the repository:

```bash
git clone https://github.com/EzequielBurgosL/supply-chain-track-app.git
```

Before running the application, ensure that you have the following installed:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Running the Application

To get the application up and running, you can use **Docker Compose** to build and start both the backend API and frontend simultaneously.

### 1. Start the Application

Run the following command to **build** and **start** both the backend API and frontend:

```bash
docker-compose up --build
```

This command will:

- Build the Docker images for both the frontend and backend.
- Start the application with all services, including the API and frontend, in the background.

You can stop the application using `ctrl + c` or using:

```bash
docker-compose down
```

### 2. API Docs (Swagger)

Once the application is running, you can access the **API documentation** through Swagger. To access the API documentation:

1. Open your browser and navigate to:  
   [http://localhost:3000/api-docs/](http://localhost:3000/api-docs/)

2. Here, you will find details of all the available API endpoints, including their methods, request bodies, and expected responses.

### 3. Frontend

The frontend of the application runs a development server that you can access in your browser.

To access the frontend:

1. Open your browser and navigate to:  
   [http://localhost:5173/](http://localhost:5173/)

2. You should now see the user interface of the **Supply Chain Tracker**.
