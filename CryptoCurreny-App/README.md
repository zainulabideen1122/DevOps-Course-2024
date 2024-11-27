# Deploying a Cryptocurrency React App on Kubernetes using Minikube

This project demonstrates how to transition a React app from basic code to containers and deploy it on a Kubernetes cluster using Minikube.

---

## Tech Stack & Tools

- **React**: Frontend framework to build the app
- **Docker**: Containerization tool to create the Docker image
- **Kubernetes**: Container orchestration platform
- **kubectl**: Command-line tool for Kubernetes
- **Minikube**: Local Kubernetes cluster setup

---

## Setting Up the React App ⚛

### 1. Create the React App 

Run the following command to create a new React app:

```bash
npx create-react-app client
```
I will be deploying this CryptoCurrency React App: <a href="https://github.com/zainulabideen1122/React-Cryptocurrency-App/tree/master">App</a>

### 2. Start the React App
Run the following command to start the React app:
```bash
npm start
```
## Containerizing with Docker 🐋

### 1. Create a Dockerfile
In the root folder, Create the DockerFile using this command:
```bash
touch Dockerfile
```
### 2. Add this code to docker file:
```bash
# Use an official Node runtime as a base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the app's source code to the working directory
COPY . .

# Expose the port that the app will run on
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "start"]
```
### 3. Build the Docker Image
Build the Docker image using the following command:
```bash
docker build -t k8s-react .
```

### 4. Test the Docker Image Locally
Run the image locally to ensure it works:
```bash
docker run -p 3000:3000 k8s-react
```
Check in your browser at **localhost:3000** 
![image](https://github.com/user-attachments/assets/87cf91eb-1809-4213-8506-f711470ae2bb)

### 5. Push the Docker Image to Docker Hub
Tag and push the image to Docker Hub:
```bash
docker tag k8s-react:latest your-dockerhub-username/my-react-app:latest
docker push your-dockerhub-username/my-react-app:latest
```
## Deploying to Kubernetes ☸️
### 1. Install kubectl & Minikube
Follow these guides to install the tools:
- <a href="https://kubernetes.io/docs/tasks/tools/">Install Kubectl</a>
- <a href="https://minikube.sigs.k8s.io/docs/start/?arch=%2Fwindows%2Fx86-64%2Fstable%2F.exe+download">Install Kubectl</a>

### 2. Start Minikube
Start the Minikube cluster:
```bash
minikube start
```
### 3. Create Deployment YAML
Create a deploy.yaml file:
```bash
touch deploy.yaml
```

**Add the following configuration:**
```bash
apiVersion: apps/v1
kind: Deployment
metadata:
  name: react-app
spec:
  replicas: 2
  selector:
    matchLabels:
      app: react-app
  template:
    metadata:
      labels:
        app: react-app
    spec:
      containers:
        - name: react-app
          image: your-dockerhub-username/my-react-app:latest
          imagePullPolicy: Always
          ports:
            - containerPort: 80
```

### 4. Create Service YAML
Create a service.yaml file:
```bash
touch service.yaml
```
**Add the following configuration:**
```bash
apiVersion: v1
kind: Service
metadata:
  name: react-app
spec:
  type: NodePort
  selector:
    app: react-app
  ports:
    - port: 80
      protocol: TCP
      targetPort: 80
      nodePort: 31000
```

### 5. Apply YAML Files
Deploy the React app using the following commands:
```bash
kubectl apply -f deploy.yaml
kubectl apply -f service.yaml
```


### 6. Verify the Deployment
Check the status of the pods and nodes:
```bash
kubectl get pods
kubectl get nodes
```
### 7. Expose the Service
Expose the service with the following command:
```bash
kubectl expose deployment react-app --type=NodePort --port=3000
```
**Access the app in the browser:**
```bash
minikube service react-app
```
This will open the borwser, where you app will be running<br></br>
**Note: If window will not be opened, try to access your app at: http://localhost:31000**

