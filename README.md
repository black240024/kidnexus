
# KIDNEXUS Website

A fully responsive, multi-page React website for KIDNEXUS - an organization focused on nurturing creative thinkers and social innovators through child-centered learning approaches.

## 🌟 Features

- **Fully Responsive Design** - Optimized for all device sizes
- **Modern React Architecture** - Built with React 18, TypeScript, and Vite
- **Beautiful UI Components** - Custom components with Tailwind CSS styling
- **Multi-page Navigation** - Complete routing system with React Router
- **KidFuture-inspired Design** - Bright, playful design with rounded corners and engaging colors
- **Interactive Elements** - Hover effects, animations, and dynamic content
- **Accessibility Focused** - Semantic HTML and keyboard navigation support

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd kidnexus-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to view the website

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Navigation component
│   ├── Footer.tsx      # Footer component
│   ├── SectionTitle.tsx # Section header component
│   ├── TeamCard.tsx    # Team member card
│   └── ProgramCard.tsx # Program display card
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── About.tsx       # About us page
│   ├── Team.tsx        # Team showcase
│   ├── Programs.tsx    # Programs overview
│   ├── Impact.tsx      # Impact and statistics
│   ├── Support.tsx     # Support and donations
│   ├── Contact.tsx     # Contact information
│   └── NotFound.tsx    # 404 error page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── App.tsx             # Main application component
```

## 🎨 Design System

### Colors
- **Primary Orange**: `#f97316` - Used for CTAs and highlights
- **Primary Teal**: `#14b8a6` - Used for secondary elements
- **Accent Indigo**: `#6366f1` - Used for special features
- **Background**: `#f9fafb` - Light gray for page backgrounds

### Typography
- **Font Family**: Nunito (Google Fonts)
- **Headings**: Bold weights (600-800)
- **Body Text**: Regular weight (400)

### Components
- **Cards**: Rounded corners (12px radius) with subtle shadows
- **Buttons**: Rounded-full style with hover animations
- **Images**: Responsive with rounded corners

## 📱 Pages Overview

### 🏠 Home Page
- Hero section with KIDNEXUS branding
- About preview with call-to-action
- Featured programs showcase
- Testimonials carousel
- Impact statistics

### 🧠 About Us Page
- Mission and vision statements
- Organizational story and history
- Approach methodology
- Impact by numbers

### 👥 Team Page
- Tabbed interface for different team categories
- Program team member profiles
- Technical advisory board
- Apprentice showcase

### 🎨 Programs Page
- Core programs (PILIPA, KUWA)
- Additional program offerings
- Program approach explanation
- Enrollment call-to-actions

### 🌍 Impact Page
- Impact statistics and metrics
- Success story showcases
- Interactive impact map of Kenya
- Future goals and projections

### 🙌 Support Us Page
- Donation tiers and mobile money integration
- Volunteer opportunities
- Partnership information
- Merchandise shop preview

### 📬 Contact Us Page
- Contact form with subject categories
- Office information and hours
- Social media links
- Location map placeholder

## 🛠 Customization Guide

### Updating Content

1. **Text Content**: Most content is hardcoded in the page components. Edit the relevant `.tsx` files in the `src/pages/` directory.

2. **Images**: Currently using Unsplash placeholder images. Replace with actual images by:
   - Adding images to the `public/` directory
   - Updating image URLs in components
   - Using the format: `/path-to-your-image.jpg`

3. **Contact Information**: Update contact details in:
   - `src/components/Footer.tsx`
   - `src/pages/Contact.tsx`

4. **Team Members**: Modify team data arrays in `src/pages/Team.tsx`

5. **Programs**: Update program information in `src/pages/Programs.tsx`

### Styling Changes

- **Colors**: Modify the color palette in `tailwind.config.ts`
- **Fonts**: Change font imports in `index.html` and update `tailwind.config.ts`
- **Layout**: Adjust spacing and sizing using Tailwind utility classes

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route to `src/App.tsx`
3. Update navigation in `src/components/Navbar.tsx`

## 🔧 Build and Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

## 📋 TODO / Future Enhancements

- [ ] Add actual Google Maps integration
- [ ] Implement contact form backend
- [ ] Add blog/news section
- [ ] Create admin panel for content management
- [ ] Add multi-language support (English/Swahili)
- [ ] Implement online donation payment processing
- [ ] Add event calendar functionality
- [ ] Create photo gallery sections

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For questions about customizing or deploying this website, please contact:
- Email: kidnexus.ke@gmail.com
- Phone: +254 725 308 302

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Built with ❤️ for KIDNEXUS - Nurturing Creative Thinkers and Social Innovators**
