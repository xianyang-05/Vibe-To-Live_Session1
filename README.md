# 🛠️ Workshop Handbook: Building DailyFit with Antigravity & MCP

Welcome to the **DailyFit** workshop! This handbook will guide you through the journey of building a premium, AI-powered fitness tracking application from scratch using the modern agentic stack.

---

## 📋 Part 1: Prerequisites

Before we begin, ensure you have the following tools installed on your machine:

### 1. Node.js Installation
Node.js is the runtime environment required to run our development server and manage dependencies.
- **Download**: Visit [nodejs.org](https://nodejs.org/) and install the **LTS version**.
- **Verify**: Open your terminal and run:
  ```bash
  node -v
  npm -v
  ```

### 2. Antigravity Installation
Antigravity is your high-performance AI coding assistant.
- Follow the official setup guide provided by your organization to install the Antigravity desktop application or extension.
- Ensure you are logged in and have access to the necessary AI models.

---

## 🚀 Part 2: Step-by-Step Implementation

### Phase 1: Rapid Prototyping with Stitch
We start by visualizing our idea and generating the core UI.
1.  Open **Stitch**.
2.  Use the `create_project` tool to initialize the "DailyFit" project.
3.  Use `generate_screen_from_text` to describe your vision: *"A premium fitness app with a dark mode dashboard, workout tracking, and profile pages."*
4.  Refine the design using `edit_screens` until it feels premium and state-of-the-art.

### Phase 2: Connecting with MCP (Model Context Protocol)
MCP allows Antigravity to talk to external services directly.
1.  **Configure MCP Servers**: Ensure your `mcp_config.json` includes the necessary servers:
    - `github-mcp-server`: For repository management.
    - `firebase-mcp-server`: For backend and authentication.
2.  Verify the connection in Antigravity by asking: *"List my GitHub repositories"* or *"Get my Firebase project status."*

### Phase 3: Building Logic with Antigravity
Now we turn the static designs into a functional app.
1.  Ask Antigravity to build the core logic: *"Implement the exercise filtering logic in details.html using JavaScript."*
2.  Use the `view_file` and `write_to_file` tools to manage your codebase efficiently.

### Phase 4: Backend Integration with Firebase MCP
Secure your app with real-world authentication.
1.  **Initialize Firebase**: Use Antigravity to run `firebase_init` to set up Authentication.
2.  **Enable Auth**: Go to the Firebase Console and enable the **Email/Password** provider.
3.  **Build Auth Flow**: Tell Antigravity: *"Create a dedicated signup.html and integrate Firebase Auth for registration and login."*
4.  **Personalize**: Use `updateProfile` to store and display user names dynamically on the Dashboard.

### Phase 5: Pushing to GitHub
Time to share your work with the world.
1.  **Initialize Git**:
    ```bash
    git init
    git remote add origin <your-repo-url>
    ```
2.  **Commit & Push**:
    ```bash
    git add .
    git commit -m "Initial commit: DailyFit complete with Firebase Auth"
    git push -u origin main
    ```

---

## 🎯 Summary
By the end of this workshop, you have successfully built a full-stack application using an **Agentic Workflow**. You've moved from a simple text prompt to a live, authenticated, and version-controlled project!

---
*Happy Coding!* 🚀
