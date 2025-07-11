 QuickBlog AI — AI-Integrated Blogging Platform

QuickBlog AI is a full-stack blogging platform enhanced with generative AI to help admins generate blog content such as titles, summaries, or full articles with just a topic prompt. Built using the **MERN stack** with integrated AI capabilities.


🚀 Key Features

 📰 Blog Features
- View blog posts with category filtering
- Detailed blog pages with timestamps
- User-friendly and responsive frontend
- Add and display comments on each post

 AI-Driven Content Generation
- Generate blog titles, summaries, and full articles using AI
- Powered by GeminiAI (configurable)
- One-click generation from prompt (e.g., "AI in healthcare")
- Editable content before publishing

👩‍💻 Admin Panel
- Create, edit, and delete blogs
- Use AI to auto-generate content
- Upload images and assign categories



## 🛠 Tech Stack

| Technology       | Purpose                  |
|------------------|---------------------------|
| React.js         | Frontend UI               |
| Node.js + Express| Backend API               |
| MongoDB          | Database                  |
| GEMINI AI        | AI Content Generation     |
| ImageKit      | Image Uploads (optional)  |

 Installation & Setup

 1. Clone the repository
 git clone https://github.com/Keerthana2811200/QuickBlog-AI.git
cd QuickBlog-AI

2. Install dependencies

cd server
npm install

Frontend (React):

cd ../client
npm install

 3. Add environment variables
PORT=5000
MONGO_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_key

 ▶️ Running the App

 Start backend:

cd server
npm start

 Start frontend:


cd ../client
npm start

Visit: (http://localhost:5173/)


 How AI Integration Works

* Admin enters a blog topic or keyword
* Backend sends request to AI model (e.g., OpenAI's GPT)
* AI returns structured content (title + body + summary)
* Admin can review, edit, and publish instantly


Live Demo

[🔗 View Live](https://your-deployed-site-link.com)

