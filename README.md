# 💝 Valentine Proposal App

An interactive, customizable Valentine's Day proposal web application built with Next.js 15. This app creates a fun, engaging experience with three questions, animated elements, and a celebration screen.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwind-css)

## 🌟 Features

- **Interactive Multi-Step Experience**: Three engaging questions with unique interactions
- **Fully Customizable**: Easy-to-edit configuration files for personalization
- **Beautiful Animations**: Floating hearts, bears, and bouncing polaroid celebration photos
- **Background Music**: Optional music player with custom audio
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **TypeScript Support**: Type-safe configuration and components
- **Modern UI**: Styled with Tailwind CSS and custom animations

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- pnpm (recommended), npm, or yarn

### Installation

1. **Fork this repository** (click the Fork button at the top right)

2. **Clone your forked repository**

   ```bash
   git clone https://github.com/YOUR-USERNAME/valentine-proposal-app.git
   cd valentine-proposal-app
   ```

3. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

4. **Run the development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization Guide

All customization is done through configuration files:

- **`lib/config.ts`** - Main settings (questions, colors, music, background image)
- **`lib/celebration-images.ts`** - Polaroid photos for celebration screen

Here's what you can customize:

### 1. Basic Information

```typescript
valentineName: "Your Love's Name",  // Name of your valentine
pageTitle: "Your Custom Title 💝",  // Browser tab title
```

### 2. Questions & Messages

#### Question 1: "Do you love me?"

```typescript
questions: {
  first: {
    text: "Your question here",
    yesBtn: "Button text",
    noBtn: "Button text",
    secretAnswer: "Hidden message when they click 'No'"
  }
}
```

#### Question 2: Love Meter Slider

```typescript
second: {
  text: "How much do you love me?",
  subText: "Instruction text",
  startText: "This much!",
  nextBtn: "Next ❤️"
}
```

#### Question 3: Final Question

```typescript
third: {
  text: "Will you be my Valentine? 🌹",
  yesBtn: "Yes!",
  noBtn: "No"
}
```

### 3. Love Messages (Based on Slider Value)

```typescript
loveMessages: {
  extreme: "Message when slider > 5000",
  high: "Message when slider > 1000",
  normal: "Message when slider > 100"
}
```

### 4. Celebration Screen

```typescript
celebration: {
  title: "Success title",
  message: "Success message",
  emojis: "🎁💖🤗💝💋"
}
```

### 5. Colors & Theme

```typescript
colors: {
  backgroundStart: "#7F55B1",    // Gradient start color
  backgroundEnd: "#F49BAB",      // Gradient end color
  buttonBackground: "#ff6b6b",   // Button color
  buttonHover: "#ff8787",        // Button hover color
  textColor: "#ff4757"           // Main text color
}
```

### 6. Floating Emojis

```typescript
floatingEmojis: {
  hearts: ["❤️", "💖", "💝", "💗", "💓"],
  bears: ["🧸", "🐻"]
}
```

### 7. Background Music

```typescript
music: {
  enabled: true,                 // Enable/disable music
  autoplay: true,                // Auto-start music
  musicUrl: "YOUR_AUDIO_URL",    // Link to your music file
  startText: "🎵 Play Music",
  stopText: "🔇 Stop Music",
  volume: 0.5                    // 0.0 to 1.0
}
```

**Tip**: Upload your music to [Cloudinary](https://cloudinary.com/), Google Drive, or any CDN and use the direct link.

### 8. Background Image

```typescript
image: {
  imageUrl: "YOUR_IMAGE_URL",    // Main background image
  imageAltText: "Description of image"
}
```

Upload your background image to [Cloudinary](https://cloudinary.com/) or any image hosting service and use the direct link.

### 9. Celebration Images (Polaroid Gallery)

Edit **`lib/celebration-images.ts`** to customize the polaroid images that bounce around during the celebration screen:

```typescript
export const celebrationImages: CelebrationImages = [
  "IMAGE_URL_1",
  "IMAGE_URL_2",
  "IMAGE_URL_3",
  // Add as many images as you like!
];
```

**Features:**

- Images appear as polaroid-style photos
- Automatically bounce around the screen with physics
- Can add unlimited images
- Recommended: 5-10 images for best effect

## 📁 Project Structure

```
valentine-proposal-app/
├── app/
│   ├── layout.tsx         # Root layout with fonts and theme
│   ├── page.tsx           # Main page with question flow
│   └── globals.css        # Global styles and animations
├── components/
│   ├── Celebration.tsx    # Success/celebration screen
│   ├── FloatingElements.tsx # Animated hearts and bears
│   ├── MusicPlayer.tsx    # Background music controller
│   ├── PolaroidImages.tsx # Bouncing polaroid photo gallery
│   ├── Question1.tsx      # "Do you love me?" component
│   ├── Question2.tsx      # Love meter slider component
│   └── Question3.tsx      # Final proposal question
├── lib/
│   ├── config.ts          # ⭐ Main configuration file
│   ├── celebration-images.ts # 🖼️ Celebration polaroid images
│   └── types.ts           # TypeScript type definitions
├── public/                # Public assets (optional)
├── tailwind.config.ts     # Tailwind CSS configuration
└── package.json           # Dependencies and scripts
```

## 🎯 Component Overview

### Question Flow

1. **Welcome Screen**: Displays valentine's name with start button
2. **Question 1** (`Question1.tsx`): Yes/No question with trick "No" button
3. **Question 2** (`Question2.tsx`): Interactive love slider (0-10,000%)
4. **Question 3** (`Question3.tsx`): Final proposal with growing "No" button
5. **Celebration** (`Celebration.tsx`): Success screen with animated polaroid photos

### Interactive Elements

- **FloatingElements**: Animated emojis that float across the screen
- **MusicPlayer**: Toggle background music on/off
- **PolaroidImages**: Animated bouncing polaroid photos during celebration

## 🛠️ Advanced Customization

### Adding More Questions

1. Create a new component in `/components` (e.g., `Question4.tsx`)
2. Import it in `app/page.tsx`
3. Update the question flow state management
4. Add configuration in `lib/config.ts` and update `lib/types.ts`

### Changing Animations

Edit animation settings in `lib/config.ts`:

```typescript
animations: {
  floatDuration: "15s",        // How long emojis take to float
  floatDistance: "50px",       // How far emojis move
  bounceSpeed: "0.5s",         // Bounce animation speed
  heartExplosionSize: 1.5      // Size multiplier for explosion
}
```

### Custom Fonts

The app uses Google Fonts (Dancing Script & Poppins). To change fonts:

1. Edit `app/layout.tsx`
2. Import new fonts from `next/font/google`
3. Update the CSS variables in `tailwind.config.ts`

## 📱 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/new)
3. Import your repository
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Dayo-001/valentine-proposal-app)

### Other Platforms

- **Netlify**: Connect GitHub repo and deploy
- **Railway**: Import project and deploy
- **GitHub Pages**: Requires static export configuration

## 🤝 Contributing

Contributions are welcome! If you have ideas for improvements:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Common Issues & Solutions

### Music doesn't play automatically

Some browsers block autoplay. Users need to click the music button manually due to browser autoplay policies.

### Images not loading

Make sure your image URLs are publicly accessible and use HTTPS links.

### Animations are laggy

Try reducing the number of floating elements or disabling some animations in the config file.

## 💡 Tips for Best Experience

- Use high-quality images for best visual appeal
  - Background image: 1920x1080px or higher
  - Polaroid images: 800x800px or higher
- Host images on reliable CDN (Cloudinary, Imgur, etc.)
- Keep music files under 5MB for faster loading
- Test on mobile devices before sharing
- Use romantic, soft colors for better visual appeal
- Keep messages short and sweet
- Add 5-10 polaroid images for optimal celebration effect

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💖 Credits

Created with love using:

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

---

**Made with ❤️ for Valentine's Day**

If you found this useful, please ⭐ star the repository and share it with others!
