# Tailwind Starter

This is a starter project for using Tailwind CSS with a simple HTML setup. It includes live reloading and Tailwind CSS configuration.

## Project Setup

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/markmuthii/tailwind-starter.git
   cd tailwind-starter
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

### Development

To start the development server with live reloading and Tailwind CSS watching, run:

```sh
npm run dev
```

This will start `live-server` to serve the files in the `public` directory and `tailwindcss` to watch for changes in the `src/input.css` file and output the compiled CSS to `public/css/style.css`.

### Project Structure

- `public/`
  - `css/`
    - `style.css` - Compiled Tailwind CSS
  - `index.html` - Main HTML file
  - `js/`
    - `script.js` - JavaScript file (if needed)
- `src/`
  - `input.css` - Tailwind CSS input file
- `tailwind.config.js` - Tailwind CSS configuration file
- `package.json` - Project configuration and dependencies

### Customization

You can customize the Tailwind CSS configuration by editing the `tailwind.config.js` file. For more information on Tailwind CSS configuration, visit the [Tailwind CSS documentation](https://tailwindcss.com/docs/configuration).

## License

This project is licensed under the ISC License.

## Author

[Mark Muthii](https://kram.codes)
