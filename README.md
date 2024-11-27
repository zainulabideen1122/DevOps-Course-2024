# DevOps-Course-2024


## 📝 **Blogs and Insights**  
### Blog 1: A Beginner’s Guide to Docker Networking: Bridge, Host, and Overlay Networks
Docker networking is essential for enabling communication between containers, the host system, and external networks. It simplifies the management of containerized applications, ensuring secure, scalable, and efficient communication. The blog explores three key Docker network types:
- **Bridge Networks:**<br/>
The default network in Docker, bridge networks allow containers on the same host to communicate internally using IP addresses while isolating them from the host and external networks. Ideal for scenarios requiring container isolation and internal communication, such as a web server and database running on the same machine.
- **Host Networks:** <br/>
Host networks remove isolation, allowing containers to use the host's network stack directly. This improves performance for high-throughput applications that require minimal latency.
- **Overlay Networks** <br/>
Overlay networks connect containers across multiple hosts, making them ideal for distributed systems like Docker Swarm or Kubernetes. They enable containers on different machines to communicate as if on the same local network.

Selecting the right Docker network—bridge, host, or overlay—depends on your application’s needs for isolation, scalability, and performance. These networks are the foundation of secure and efficient containerized systems.
<a name="unique-anchor-name" href="https://medium.com/@zainnsar/a-beginners-guide-to-docker-networking-bridge-host-and-overlay-networks-edc6d50083f2">Read full blog here</a>

### Blog 2: A Beginner’s Guide to Docker Networking: Bridge, Host, and Overlay Networks
K3s is a lightweight Kubernetes distribution designed by Rancher Labs for resource-constrained environments like edge computing, IoT devices, and ARM-based hardware. It simplifies Kubernetes by reducing unnecessary components and combining them into a single binary, making it ideal for low-power devices like Raspberry Pi. <br/><br/>
**Key Benefits:**
- Resource-efficient: Runs on devices with as little as 512MB of RAM.
- Simple Setup: Easy to install and manage with a single binary.
- Flexible: Supports both ARM and x86 devices.
- Secure: Comes with built-in security features.
- Use Cases include IoT management, smart cities, and edge AI applications.

Getting Started involves installing K3s on a master node, adding worker nodes with a token, and deploying applications using Kubernetes commands. K3s is perfect for running Kubernetes on low-resource edge devices.


### Assignment 3: Deploying a Cryptocurrency React App on Kubernetes Using Minikube
<a href="">Read here</a>
