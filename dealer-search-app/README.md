# Dealer Management System

A professional dealer search and management system with advanced filtering capabilities.

## Features

- 🔍 Real-time dealer name search
- 🎯 Advanced filtering (State, City, SCode)
- 📊 Clean, responsive corporate design
- 📱 Mobile-friendly interface
- ⚡ Fast, client-side filtering

## Deploy to GitHub Pages

### Prerequisites
- Node.js installed (download from nodejs.org)
- Git installed
- GitHub account

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Update package.json
Edit `package.json` and change the `homepage` field:
```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/dealer-search-app"
```
Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username.

### Step 3: Create GitHub Repository
1. Go to github.com and create a new repository named `dealer-search-app`
2. Don't initialize with README (we already have one)

### Step 4: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/dealer-search-app.git
git push -u origin main
```

### Step 5: Deploy
```bash
npm run deploy
```

Your site will be live at: `https://YOUR_GITHUB_USERNAME.github.io/dealer-search-app`

## Local Development

Run locally:
```bash
npm start
```

Build for production:
```bash
npm run build
```

## Data

The system contains 2,859 unique dealer-manager combinations loaded from the escalation matrix.

## Tech Stack

- React 18
- Tailwind CSS
- Lucide React Icons
- GitHub Pages
