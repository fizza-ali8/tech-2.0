# Aurora Nexus - Tech Company Website

A modern, interactive website for Aurora Nexus built with Next.js 14, React, TypeScript, and Tailwind CSS. Features beautiful animations powered by Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Fully Responsive**: Works perfectly on all devices
- **Interactive Animations**: Powered by Framer Motion for engaging user experience
- **All Homepage Sections**:
  - Hero Section with animated background
  - About Section
  - Services Section (9 services)
  - Best IT Solutions Section
  - How It Works (Process) Section
  - Case Studies
  - Testimonials
  - Our Team
  - Blogs Section
  - Footer with contact information

## 🛠️ Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.tsx       # Navigation bar
│   ├── HeroSection.tsx  # Hero section
│   ├── AboutSection.tsx # About section
│   ├── ServicesSection.tsx # Services section
│   ├── BestITSolutions.tsx # Best IT Solutions
│   ├── HowItWorks.tsx   # Process section
│   ├── CaseStudies.tsx  # Case studies
│   ├── Testimonials.tsx # Testimonials
│   ├── OurTeam.tsx      # Team section
│   ├── Blogs.tsx        # Blogs section
│   └── Footer.tsx       # Footer
└── package.json
```

## 🎨 Customization

- Colors: Edit `tailwind.config.ts` to change the primary color scheme
- Content: Update content in respective component files
- Animations: Modify Framer Motion animations in component files

## 📝 Notes

- All sections are fully responsive
- Smooth scroll navigation between sections
- Hover effects and animations throughout
- Modern gradient backgrounds and effects

## 🔄 Next Steps

- Add more pages (Services, About, Contact, etc.)
- Integrate with a CMS for content management
- Add contact form functionality
- Implement blog post pages


