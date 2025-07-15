# 🏠 Rubik's House 3D

A mesmerizing 3D experience combining the classic Rubik's cube animation with house architecture. The animated cube serves as the foundation while a static roof sits on top, creating a unique "house" visualization.

![Rubiks House 3D](https://via.placeholder.com/800x400/1e293b/ffffff?text=Rubiks+House+3D)

## ✨ Features

- **Animated Rubik's Cube Foundation**: 27 individual cubes that continuously rotate and animate
- **Static House Roof**: Brown wooden roof with chimney that gently floats above the cube
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Smooth Performance**: Adaptive graphics settings based on device capabilities
- **Hero Text Overlay**: Stylish text with mix-blend-mode effects

## 🚀 Live Demo

🔗 **[View Live Demo](https://rubiks-house-3d.vercel.app)** 

## 🛠️ Tech Stack

- **Next.js 14** - React framework
- **React Three Fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for R3F
- **Three.js** - 3D graphics library
- **Tailwind CSS** - Styling
- **TypeScript** - Type safety

## 🏃‍♂️ Quick Start

### Clone and Install

```bash
git clone https://github.com/MCERQUA/rubiks-house-3d.git
cd rubiks-house-3d
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### Build for Production

```bash
npm run build
npm start
```

## 📦 Deploy

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/MCERQUA/rubiks-house-3d)

Or manually:

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/MCERQUA/rubiks-house-3d)

## 🎨 Customization

### Modify the Roof Design

Edit `components/ui/rubiks-house.tsx` in the `HouseRoof` component:

```tsx
// Add more roof elements
<mesh position={[0, 0.5, 1]}>
  <boxGeometry args={[0.8, 0.6, 0.1]} />
  <meshPhysicalMaterial color="#654321" />
</mesh>
```

### Change Cube Materials

Modify the `chromeMaterial` object:

```tsx
const chromeMaterial = useMemo(() => ({
  color: '#ff0000',        // Change color
  metalness: 0.9,          // More metallic
  roughness: 0.1,          // More reflective
  // ... other properties
}), []);
```

### Adjust Animation Speed

Change the `ANIMATION_DURATION` constant:

```tsx
const ANIMATION_DURATION = 2.0; // Slower animation
```

## 🏗️ Architecture

```
rubiks-house-3d/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ui/
│       └── rubiks-house.tsx    # Main 3D component
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

### Key Components

- **RubiksCubeModel**: The animated 27-cube foundation
- **HouseRoof**: Static roof elements that sit above the cube
- **SceneContent**: Lighting and camera setup
- **RubiksHouseScene**: Main wrapper component

## 🔧 Performance Optimization

The component automatically adjusts settings based on device:

- **Desktop**: High quality with shadows and antialiasing
- **Mobile**: Reduced smoothness and disabled shadows for better performance

## 🎯 Use Cases

- **Landing Pages**: Eye-catching hero sections
- **Architecture Websites**: Creative way to showcase building concepts
- **Creative Portfolios**: Unique 3D background
- **Tech Demos**: Showcase of React Three Fiber capabilities

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Original Rubik's cube animation inspiration
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) community
- [Three.js](https://threejs.org/) for the amazing 3D library

---

Made with ❤️ and lots of ☕

**[⭐ Star this repo](https://github.com/MCERQUA/rubiks-house-3d)** if you found it helpful!