# 🚀 DreamCraft AI

An AI-powered web application that helps users transform their goals into personalized learning roadmaps. Instead of manually planning every step, users simply enter their goal, and the AI generates a structured roadmap with actionable guidance.

This project was built as part of a React frontend assignment while integrating an AI model to provide dynamic, personalized responses.

---

# 🌟 Features

* 🤖 AI-powered roadmap generation
* 🎯 Personalized learning and career guidance
* 💬 Interactive AI chat interface
* 📱 Fully responsive design
* 🎨 Modern and clean UI
* ⚡ Fast React-based frontend
* ☁️ Deployed online using Vercel

---

# 🧠 AI Feature

The core feature of DreamCraft AI is its intelligent roadmap generator.

Users enter a goal such as:

* Learn React
* Become a Data Scientist
* Start Freelancing
* Learn Python
* Become a UI/UX Designer

The application sends the prompt to the AI model, which generates:

* A structured roadmap
* Step-by-step learning plan
* Recommended topics
* Practical project ideas
* Helpful learning advice

This makes learning more organized and personalized.

---

# 🛠️ Technologies Used

### Frontend

* React
* JavaScript (ES6)
* HTML5
* CSS3

### AI

* Google Gemini API

### Deployment

* Vercel

### Version Control

* Git
* GitHub

---

# 📂 Project Structure

```
DreamCraft-AI/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── AIChat.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Pricing.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── screenshots/
│
├── package.json
├── README.md
└── .gitignore
```

---

# ⚙️ Installation & Setup

## 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

---

## 2. Navigate to the Project

```bash
cd YOUR_REPOSITORY
```

---

## 3. Install Dependencies

```bash
npm install
```

---

## 4. Create Environment Variables

Create a `.env` file in the project root.

```
VITE_GEMINI_API_KEY=YOUR_API_KEY
```

**Important:** Never commit your API key to GitHub.

---

## 5. Run the Development Server

```bash
npm run dev
```

---

## 6. Build for Production

```bash
npm run build
```

---

# 🤖 AI Prompt Used

The application sends a structured prompt to the AI model to generate personalized roadmaps.

Example:

```
Create a detailed learning roadmap for the following goal:

Goal:
Learn React Development

Provide:

1. Beginner topics
2. Intermediate topics
3. Advanced topics
4. Practice projects
5. Learning tips
6. Estimated learning timeline

Return the roadmap in a clear and easy-to-read format.
```

---

# 📸 Screenshots

Create a folder named **screenshots** inside your repository and place your images there.

Example structure:

```
screenshots/
│
├── home.png
├── features.png
├── ai-chat.png
├── roadmap.png
├── mobile-view.png
```

Then reference them like this:

## Home Page

![Home](screenshots/home.png)

---

## Features Section

![Features](screenshots/features.png)

---

## AI Chat

![AI Chat](screenshots/ai-chat.png)

---

## Generated Roadmap

![Roadmap](screenshots/roadmap.png)

---

## Mobile View

![Mobile](screenshots/mobile-view.png)

---

# 🚀 Deployment

The project is deployed using **Vercel**.

Deployment process:

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add the environment variable:

   * `VITE_GEMINI_API_KEY`
4. Deploy the application.

---

# 💡 Future Improvements

* User authentication
* Save generated roadmaps
* Download roadmap as PDF
* Dark mode
* Voice input
* AI conversation history
* Progress tracking
* Learning reminders

---

# 📖 Learning Outcomes

This project helped in learning:

* React component architecture
* State management using hooks
* API integration
* Environment variable management
* Responsive web design
* Git and GitHub workflow
* Vercel deployment
* AI-powered application development

---

# 🙏 Acknowledgements

Special thanks to:

* React
* Google Gemini API
* Vercel
* GitHub

for providing the tools and platform used to build this project.

---

# 📄 License

This project is created for educational purposes as part of a frontend development assignment.
