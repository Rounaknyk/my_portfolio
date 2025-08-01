# 🎨 Modern Portfolio Website

A beautiful, responsive portfolio website built with Next.js, TypeScript, and modern CSS. Features a centralized configuration system for easy content management.

## ✨ Features

- **Modern Design**: Beautiful gradients, animations, and hover effects
- **Fully Responsive**: Optimized for all devices
- **Centralized Configuration**: All content in one JSON file
- **TypeScript**: Full type safety
- **Performance Optimized**: Fast loading and smooth animations
- **SEO Ready**: Meta tags and structured data

## 🚀 Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to `http://localhost:3000`

## 📝 Configuration

All website content is managed through the centralized configuration file:

### `src/data/siteConfig.json`

This file contains all the content for your portfolio. Simply edit this file to update your website:

#### Site Information
```json
{
  "site": {
    "title": "Your Name | Full Stack Developer",
    "description": "Your portfolio description",
    "logo": "Your Name",
    "copyright": "© 2024 Your Name. All rights reserved."
  }
}
```

#### Personal Information
```json
{
  "personalInfo": {
    "name": "Your Name",
    "title": "Your Title",
    "bio": "Your bio description",
    "image": "Your profile image URL",
    "email": "your.email@example.com",
    "phone": "+1 (555) 123-4567",
    "location": "Your Location"
  }
}
```

#### Social Links
```json
{
  "socialLinks": {
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername",
    "twitter": "https://twitter.com/yourusername"
  }
}
```

#### Projects
```json
{
  "projects": [
    {
      "id": 1,
      "title": "Project Title",
      "description": "Project description",
      "image": "Project image URL",
      "githubLink": "GitHub repository URL",
      "liveLink": "Live demo URL (optional)",
      "technologies": ["React", "Node.js", "MongoDB"]
    }
  ]
}
```

#### Tech Stack
```json
{
  "techStack": [
    {
      "name": "JavaScript",
      "proficiency": "Advanced",
      "icon": "JS",
      "description": "Technology description"
    }
  ]
}
```

#### Awards & Recognition
```json
{
  "awards": [
    {
      "id": 1,
      "title": "Award Title",
      "year": "2023",
      "organization": "Organization Name",
      "image": "Award image URL",
      "description": "Award description"
    }
  ]
}
```

#### Journey/Timeline
```json
{
  "journey": [
    {
      "year": "2023",
      "title": "Milestone Title",
      "description": "Milestone description"
    }
  ]
}
```

## 🎨 Customization

### Colors & Styling
Edit `src/app/globals.css` to customize:
- Color scheme
- Typography
- Animations
- Shadows and effects

### Layout & Components
Each page has its own CSS module:
- `src/app/page.module.css` - Home page
- `src/app/projects/page.module.css` - Projects page
- `src/app/about/page.module.css` - About page
- `src/app/techstack/page.module.css` - Tech stack page
- `src/app/awards/page.module.css` - Awards page
- `src/app/journey/page.module.css` - Journey page

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Fonts**: Inter (Google Fonts)
- **Images**: Next.js Image Optimization
- **Deployment**: Vercel

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you have any questions or need help customizing your portfolio, feel free to reach out!

---

**Happy coding! 🎉**
