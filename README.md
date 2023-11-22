Effortless Micro-Frontends with Vite and Module Federation!
In today's tech landscape, everyone's buzzing about Microservices for backend systems. While Microservices excel for robust backend services, when it comes to frontend operations, growth and continuous user engagement demand a different approach. Nobody wants downtime in a 24/7 active application. That's where Micro-Frontends shine—they're an ideal choice to ensure uninterrupted experiences in such scenarios.

Consider this scenario: within your frontend, various modules exist—authentication, dashboard, user management, and more. Let's say you aim to implement design updates in the dashboard, perhaps adding sleek charts. Once your development team completes their task, the challenge arises: making changes to the dashboard module might necessitate shutting down the entire application. This interruption isn't feasible, especially for large user-based applications.

Enter Micro-frontends: the solution here involves creating individual frontend projects for each module and encapsulating them within another frontend project known as the container project. This approach allows for isolated updates to specific modules without disrupting the entire application, ensuring smoother development and implementation processes.

Certainly!

There are two approaches to implement Micro-frontends:

Build-time integration: Here, you construct your micro-frontends before going live and integrate their dependencies into the main project (Container). However, a challenge arises: each time you build a micro-frontend, you must also update the container project and deploy it onto the server. This approach works well when you have multiple micro-frontends and wish to share common components across them.

Run-time integration: In this approach, each micro-frontend runs on a separate server port and integrates into your main project dynamically. This setup offers resilience—if, for instance, the dashboard application encounters an issue, users can still access the remaining features of your application without disruption.

In this project I have created application using Run-time integration approach.
I have created project using vite react.

There are four project here.
1) vite-container
2) vite-dashboard 
3) vite-login
4) vite-signup

Remember you have to provide dedicated port for your micro-frontend because every time when you run the project it will assign a random port. So add this line.

 "scripts": {
    "dev": "vite --port 5001 --strictPort",
    "preview": "vite preview --port 5001 --strictPort"
  },

For allowing to share your component through remotly you need to install vite federation

npm install @originjs/vite-plugin-federation --save-dev

Modify the vite.config.ts file.

![image](https://github.com/imran-momin4041/Vite-micro-frontend/assets/39003300/83a6807c-723a-4197-b5e2-40514a731b28)

Now you need configure in your host/container project.

1) Install vite-plugin-federation
2) Modify the vite.config.ts file as below image.
   
![image](https://github.com/imran-momin4041/Vite-micro-frontend/assets/39003300/b31d91ef-5dbe-4887-9a92-20c3da6bc3a3)

Now How to use remote component in container project. ?
const LoginForm = import("loginApp/LoginForm");

![image](https://github.com/imran-momin4041/Vite-micro-frontend/assets/39003300/59477f6f-21f5-4ef9-a37a-75d2ea7db363)

