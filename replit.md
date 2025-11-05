# Fitness Tracker Web App

## Overview
A comprehensive fitness tracking web application built with vanilla HTML, CSS, and JavaScript. This app allows users to record workouts, track progress with visualizations, and export data - all running in the browser with no backend required.

**Current State:** Fully functional MVP with all core features implemented
**Last Updated:** October 27, 2025

## Key Features

### 1. Exercise Recording
- **6 Exercise Categories:**
  - Strength Training (Push-ups, Pull-ups, Squats, Deadlifts, etc.)
  - Cardio/Aerobic (Running, Cycling, Swimming, etc.)
  - Flexibility/Yoga (Downward Dog, Child's Pose, Warrior Pose, etc.)
  - HIIT (Mountain Climbers, High Knees, Squat Jumps, etc.)
  - Core/Ab Workouts (Planks, Russian Twists, Crunches, etc.)
  - Balance/Stability (Single-Leg Stands, Tree Pose, Side Planks, etc.)

- **Exercise-Specific Forms:** Each exercise has customized input fields
  - Push-ups → sets, reps, weight
  - Running → distance, duration, pace
  - Planks → duration (seconds), sets
  - And 40+ more exercises with tailored fields

### 2. Data Visualization
- Category distribution pie chart
- Weekly activity bar chart
- Summary statistics (total workouts, monthly count, most frequent exercise)

### 3. Multilingual Support
- English
- Chinese (中文)
- Spanish (Español)
- Malay (Bahasa Melayu)
- All UI text and descriptions adapt to selected language

### 4. Customization
- **Themes:** Light mode, Dark mode, System default
- **Background Images:** Upload custom background images
- **Responsive Design:** Optimized for mobile (especially Android browsers)

### 5. Data Management
- **localStorage Persistence:** All data saved in browser
- **Edit & Delete:** Modify or remove past workouts
- **CSV Export:** Download workout history for Excel/Google Sheets
- **Multiple entries per day:** Track multiple workouts on the same day

## Project Structure

```
fitness-tracker/
├── index.html          # Main HTML structure with all screens
├── style.css           # Complete styling with themes & responsive design
├── app.js              # All application logic and functionality
├── .gitignore          # Git ignore file
└── replit.md           # This documentation file
```

## Technical Architecture

### Data Storage (localStorage)
- **Key:** `workouts` - Array of workout objects
- **Key:** `language` - Current language preference
- **Key:** `theme` - Theme preference (light/dark/system)
- **Key:** `backgroundImage` - Base64 encoded background image

### Workout Object Structure
```javascript
{
    id: "unique_timestamp",
    date: "YYYY-MM-DD",
    timestamp: "ISO_timestamp",
    category: "strength|cardio|flexibility|hiit|core|balance",
    exercise: "Exercise Name",
    fields: {
        // Dynamic fields based on exercise type
        sets: "value",
        reps: "value",
        weight: "value",
        // etc.
    },
    notes: "Optional notes"
}
```

### External Dependencies
- **Chart.js v4.4.0** - Data visualization library (loaded from CDN)
- **Python HTTP Server** - Simple static file server for development

## How It Works

### 1. Exercise-Specific Dynamic Forms
The app uses an exercise database (`exerciseDatabase` object in app.js) that defines:
- All exercise categories with descriptions and colors
- Specific exercises under each category
- Custom form fields for each exercise type

When a user selects an exercise, the `generateExerciseForm()` function dynamically creates the appropriate input fields based on the exercise's requirements.

### 2. localStorage for Data Persistence
- All workout data is saved to `localStorage` as JSON strings
- The `saveWorkout()` function serializes data and stores it
- Data persists across browser sessions
- No backend server needed - everything runs client-side

### 3. Chart.js Visualization
- `renderCategoryChart()` creates a pie chart showing workout distribution
- `renderWeeklyChart()` generates a bar chart of the last 7 days
- Charts update automatically when workouts are added/deleted

### 4. CSV Export
- `generateCSV()` function converts workout array to CSV format
- Creates a downloadable Blob with proper CSV formatting
- Includes all workout details in a spreadsheet-friendly format

### 5. Multilingual System
- All UI text stored in `translations` object
- Language changes update all `[data-lang]` elements
- Form fields and chart labels adapt to selected language

## User Preferences
- **Language:** English (beginner-friendly)
- **Design:** Modern gym aesthetic with vibrant colors
- **Platform:** Optimized for Android mobile browsers
- **Code Style:** Well-commented, beginner-friendly JavaScript

## Running the App

The app is served using Python's built-in HTTP server:
```bash
python -m http.server 5000
```

Access at: `http://localhost:5000` or through Replit's webview

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (especially Chrome on Android)
- Requires JavaScript enabled
- Uses localStorage API (supported in all modern browsers)

## Future Enhancements (Not Yet Implemented)
- User account system with cloud backup
- Workout reminders and scheduling
- Social sharing features
- Workout templates and programs
- Photo upload for progress tracking

## Notes for Beginners

### Understanding localStorage
Think of localStorage like a filing cabinet in your browser. Each time you save a workout, it's like putting a file in the cabinet. When you close the browser and come back, the files are still there!

### How Dynamic Forms Work
Instead of creating separate HTML for each exercise, we use JavaScript to build the form "on the fly" based on what exercise you pick. It's like having a template that adapts to what you need.

### Why Chart.js?
Chart.js is a library that makes it easy to create beautiful charts without writing lots of code. We just give it our data, and it draws the graphs for us!

### CSV Export Magic
When you click "Download CSV", the app creates a text file with your data formatted so Excel can read it. Then it triggers a download - all done in your browser without sending data anywhere!

## Important Security Notes
- All data stays in your browser - nothing is sent to any server
- Background images are stored as Base64 (encoded text) in localStorage
- No user accounts or passwords required
- No tracking or analytics

---

**Developer:** Built for beginners with extensive code comments
**License:** Free to use and modify
**Support:** All code is commented to help you learn and customize
