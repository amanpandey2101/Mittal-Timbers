# Mittal Timbers Website

A modern, professional website for Mittal Timbers, a premium timber wood product supplier. Built with Next.js and Tailwind CSS.

## Features

- Modern, responsive design
- Product catalog with detailed category pages
- Service showcase
- Company information and history
- Contact form
- Image gallery
- SEO-friendly structure

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Icons:** Heroicons
- **Animations:** Framer Motion
- **TypeScript:** For type safety

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mittal-timbers.git
   cd mittal-timbers
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
mittal-timbers/
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── gallery/
│   │   ├── products/
│   │   ├── services/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   └── lib/
├── public/
│   └── images/
├── package.json
└── README.md
```

## Pages

- **Home:** Landing page with featured products and company highlights
- **About:** Company history, mission, and values
- **Products:** Comprehensive product catalog
- **Services:** Company services and expertise
- **Gallery:** Product and project showcase
- **Contact:** Contact form and information

## Development

### Adding New Products

1. Add product information to the `productCategories` object in `src/app/products/[category]/page.tsx`
2. Add product images to the `public/images` directory
3. Update the navigation and product listings as needed

### Styling

The project uses Tailwind CSS for styling. Custom styles can be added in `src/app/globals.css`.

### Images

Place all images in the `public/images` directory. Use the following structure:

```
public/
└── images/
    ├── gallery/
    ├── products/
    └── hero/
```

## Deployment

The project can be deployed to any platform that supports Next.js applications, such as Vercel, Netlify, or a custom server.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or concerns, please contact the project maintainers.
