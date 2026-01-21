# Falcon - Faculty Analytics & Learning Console

AI-powered analytics dashboard for competitive exam coaching institutes (JEE/NEET).

## Overview

Falcon is a comprehensive faculty analytics platform designed to help senior subject faculty make data-driven decisions about teaching and test creation. It converts raw test performance data into clear, actionable insights at the chapter, topic, and question-type level.

## Features

- **Faculty Home Dashboard** - High-level performance snapshot with metrics, alerts, and heatmaps
- **Chapter & Topic Analytics** - Detailed hierarchical breakdown with expandable accordions
- **Question-Type Analysis** - Error patterns and misconceptions with AI insights
- **Test Creation Strategy** - AI-powered recommendations for optimal test design
- **Teaching Focus Planner** - Priority-based teaching recommendations
- **AI Assistant** - Coming soon feature for interactive analytics

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: JavaScript (ES Modules)
- **Styling**: Tailwind CSS v3
- **Charts**: Recharts
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
falcon/
├── src/
│   ├── app/              # Next.js app router pages
│   │   ├── page.jsx      # Home dashboard
│   │   ├── analytics/    # Chapter analytics
│   │   ├── questions/    # Question analysis
│   │   ├── test-strategy/
│   │   ├── teaching-focus/
│   │   └── ai-chat/
│   ├── components/       # Reusable UI components
│   ├── data/            # Mock data
│   └── utils/           # Helper functions
├── public/              # Static assets
└── package.json
```

## Key Components

- **MetricCard** - Performance indicators with trends
- **PerformanceHeatmap** - Color-coded chapter performance grid
- **ChapterAccordion** - Expandable topic hierarchies
- **QuestionTypeBreakdown** - Bar charts with error analysis
- **RecommendationCard** - AI-generated test strategies

## Mock Data

The dashboard includes comprehensive mock data for:
- 18 chapters across Physics, Chemistry, and Mathematics
- Topic-level performance metrics
- Question type analysis
- AI-generated insights and recommendations

## Design Philosophy

- **Insight-first**: No raw data tables, only actionable insights
- **Faculty-friendly**: Large readable fonts, minimal clutter
- **Professional**: Academic color scheme with clean typography
- **Quick understanding**: Faculty can grasp insights within 5 minutes

## License

MIT

## Author

Built for competitive exam coaching institutes to eliminate intuition-based teaching decisions.
