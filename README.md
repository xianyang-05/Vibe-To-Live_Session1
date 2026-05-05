# 🛠️ Workshop Handbook: Building DailyFit with Antigravity & MCP

Welcome to the **DailyFit** workshop! This handbook will guide you through the journey of building a premium, AI-powered fitness tracking application from scratch using the modern agentic stack.

---

📋 Part 1: Prerequisites

Before we begin, make sure you have the following tools installed or prepared.

1. Node.js Installation

Node.js is required to run development tools and manage dependencies.

Download:
Visit nodejs.org and install the LTS version.

Verify installation:

node -v
npm -v
2. Antigravity Installation

Antigravity is the AI coding workspace used in this workshop.

Make sure:

Antigravity is installed
You are logged in
You have access to the required AI models
3. Docker Desktop Installation

Docker is needed to run some MCP servers locally, especially GitHub MCP.

Download:
Install Docker Desktop for your operating system.

Make sure:

Docker Desktop is installed
Docker Desktop is running before connecting GitHub MCP
Docker is using Linux containers

Verify installation:

docker --version

Verify Docker engine is running:

docker info

If docker info shows an error, open Docker Desktop and wait until it is fully running.

4. Accounts Required

Please sign in or create accounts for:

Stitch
Firebase
GitHub
5. Recommended Preparation

Before the workshop, prepare:

A website URL for UI design reference
A simple app idea
A GitHub repository name
Access to your Google account for Firebase and Stitch

---

🚀 Part 2: Step-by-Step Implementation
Overview

In this workshop, participants will build a web app using:

Stitch — to design the frontend UI
Antigravity — to build the app from the Stitch design
Stitch MCP — to let Antigravity access the Stitch project
Firebase MCP — to set up authentication
GitHub MCP — to push and manage the project code

Participants can choose their own app idea and use their creativity.

The only required condition:

The app must include an authentication page with Sign In and Sign Up.

Phase 1: Choose Your App Idea

Before opening Stitch, choose a simple app idea.

Your app should include at least:

1. Landing page
2. Authentication page with Sign In and Sign Up
3. Dashboard page
4. Statistics / Progress page
5. Profile page

Important:

Authentication page is required.
It must include both Sign In and Sign Up.

Phase 2: Build Frontend Design with Stitch
1. Open Stitch

Open Stitch in your browser and sign in with your Google account.

2. Create a new Stitch project

Create a new project using your app name.

Example:

DailyFit
3. Paste a website URL as design reference

Paste a website URL that has the UI style you want to follow.

The website URL is mainly used as a UI style reference.

Stitch can refer to:

Layout style
Color theme
Card design
Typography
Spacing
Overall design vibe

Simple explanation:

Website URL = UI style reference

It does not copy the full backend or functionality of the website.

4. Use this prompt in Stitch

You can modify the app name and app type based on theiyourr own idea.

Create a modern web app called [Your App Name] based on the UI style of the website URL I provided.

The app is for [briefly describe your app idea].

Include 5 main pages:
1. Landing page
2. Authentication page with Sign In and Sign Up
3. Dashboard page
4. Statistics / Progress page
5. Profile page

The app should feel clean, modern, and easy to use. Make the design consistent across all pages.

Example for fitness app:

Create a modern fitness web app called DailyFit based on the UI style of the website URL I provided.

The app is for tracking workouts, calories, progress, and personal fitness goals.

Include 5 main pages:
1. Landing page
2. Authentication page with Sign In and Sign Up
3. Dashboard page
4. Statistics page
5. Profile page

The app should feel clean, premium, and suitable for tracking workouts, progress, calories, workout streaks, and personal fitness goals.
5. Refine the design if needed
Make the design cleaner and more premium. Improve the spacing, buttons, cards, and page consistency.

Keep the Stitch project open because Antigravity will access it later through Stitch MCP.

Phase 3: Open Project Folder in Antigravity
1. Create a new folder

Create a folder on your computer using your app name.

Example:

DailyFit

Example location:

C:\Users\User\Documents\DailyFit
2. Open Antigravity

Open Antigravity.

3. Open the project folder

In Antigravity:

File
→ Open Folder
→ Select your project folder
Phase 4: Connect Stitch MCP with Antigravity
Purpose

Stitch MCP allows Antigravity to access your Stitch project and use the UI design as reference.

Simple explanation:

Stitch = UI design
Stitch MCP = connection bridge
Antigravity = builds the app from the design
1. Get Stitch API key

In Stitch:

Profile / Settings
→ API Keys
→ Create API Key

Copy the generated API key.

Do not show the API key during the workshop.

2. Connect Stitch MCP in Antigravity

In Antigravity, open the MCP section.

MCP Servers
→ Add Stitch MCP
→ Paste Stitch API Key
→ Connect
3. Test Stitch MCP connection

Ask Antigravity:

Use Stitch MCP to access my Stitch project.

Or, if your project has a specific name:

Use Stitch MCP to access my DailyFit Stitch project.
Phase 5: Build UI from Stitch Design
1. Ask Antigravity to build the app UI

Use this prompt. Replace the project name and page names if needed.

Use my Stitch design as the visual reference.

Build the app UI with these pages:
- Landing page
- Authentication page with Sign In and Sign Up
- Dashboard page
- Statistics / Progress page
- Profile page

Make the design match the Stitch UI style.
Add working navigation between pages.
Make buttons clickable and connect them to the correct pages.
2. Ask Antigravity to improve the interaction
Improve the page navigation and button interactions.

Make:
- Get Started go to the authentication page
- Sign In and Sign Up switch correctly
- After successful login, user goes to the dashboard
- Dashboard navigation can go to Statistics / Progress and Profile
- Profile button goes to the profile page
- Logout button returns user to the landing page
3. Preview the app

Run the app from Antigravity and check:

Landing page
Authentication page
Dashboard page
Statistics / Progress page
Profile page
Navigation buttons
Page layout
Phase 6: Connect Firebase MCP
Purpose

Firebase MCP allows Antigravity to connect the app with Firebase and set up authentication.

For this workshop, Firebase will be used for:

Email and password authentication
1. Create Firebase project

Go to Firebase Console and create a new project using your app name.

Example:

DailyFit

You can disable Google Analytics to keep setup simple.

2. Connect Firebase MCP in Antigravity

In Antigravity, open the MCP section.

MCP Servers
→ Add Firebase MCP
→ Connect Firebase account / project

If Antigravity asks for login, sign in with the same Google account used for Firebase.

3. Download Firebase tools and login

In the Antigravity terminal, install Firebase tools:

npm install -g firebase-tools

Then login using the same Google account that you used to create the Firebase project:

firebase login

A browser window will open. Complete the login process.

4. Ask Antigravity to list Firebase projects

Use this prompt:

Use Firebase MCP to list my Firebase projects.

Then choose your project.

Example:

DailyFit
5. Ask Antigravity to set up authentication

Use this simple prompt:

Use Firebase MCP to set up authentication for this app using email and password.

Connect the Sign Up and Sign In forms to Firebase Authentication.
After sign up or login, redirect the user to the dashboard.
Add logout function on the profile page.
6. Test authentication

Run the app and test:

Go to Sign Up
Create a new account
Redirect to Dashboard
Logout from Profile
Sign In again
Redirect to Dashboard
7. View users in Firebase Console

After signing up, go to:

Firebase Console
→ Select your project
→ Build
→ Authentication
→ Users

You should see the new registered user there.

Phase 7: Connect GitHub MCP
Purpose

GitHub MCP allows Antigravity to connect with your GitHub repository and manage the project code.

It can help with:

Creating or connecting repository
Reading project files
Preparing commits
Pushing code to GitHub
Important: Docker is needed

For the local GitHub MCP server, Docker is usually required.

Before connecting GitHub MCP, make sure:

Docker Desktop is installed
Docker Desktop is running
Docker is using Linux containers

To check Docker:

docker --version

Then check if Docker engine is running:

docker info

If docker info shows an error, open Docker Desktop first and wait until it is running.

Simple explanation:

GitHub token = gives permission to access GitHub
Docker = runs the GitHub MCP server locally
GitHub MCP = connects Antigravity with GitHub
1. Create GitHub repository

Go to GitHub and create a new repository using your app name.

Example:

DailyFit

Copy the repository URL.

2. Create GitHub token

In GitHub:

Profile picture
→ Settings
→ Developer settings
→ Personal access tokens
→ Fine-grained tokens
→ Generate new token

Recommended permission:

Repository access: Your project repository only
Contents: Read and write
Metadata: Read-only

Copy the token and keep it private.

3. Connect GitHub MCP in Antigravity

Before connecting, make sure Docker Desktop is open and running.

In Antigravity, open the MCP section.

MCP Servers
→ Add GitHub MCP
→ Paste GitHub token
→ Connect

If Docker is not running, you may see an error like:

dockerDesktopLinuxEngine: The system cannot find the file specified

If this happens:

Open Docker Desktop
→ Wait until Docker is running
→ Try connecting GitHub MCP again
4. Ask Antigravity to push the project

Use this prompt:

Use GitHub MCP to connect this project to my GitHub repository.

Initialize Git if needed, commit the current project, and push it to the main branch.

Use this commit message:
"Initial commit: app UI with Firebase authentication"
5. Check GitHub

Go to your GitHub repository and confirm that the project files are uploaded.

---

## 🎯 Summary
By the end of this workshop, you have successfully built a full-stack application using an **Agentic Workflow**. You've moved from a simple text prompt to a live, authenticated, and version-controlled project!

---
*Happy Coding!* 🚀
