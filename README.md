# E-Commerce Application with React Redux Toolkit

A simple e-commerce application built with React and Redux Toolkit that demonstrates product listing, cart management, and state management using RTK.

## Demo

View the live demo: [E-Commerce RTK Demo](https://hassan2-aamir.github.io/E-Commerce-Data-Rendering-using-React-Toolkit/)

## Features

- Product listing with "Add to Cart" functionality
- Shopping cart with the following features:
    - Add/remove products
    - Increase/decrease product quantities
    - Clear entire cart
    - Calculate total amount
- State management with Redux Toolkit
- Responsive design

## Technologies Used

- React 18
- Redux Toolkit
- Vite
- CSS for styling
- GitHub Pages for deployment

## Installation

1. Clone the repository:
     ```bash
     git clone https://github.com/hassan2-aamir/E-Commerce-Data-Rendering-using-React-Toolkit.git
     cd E-Commerce-Data-Rendering-using-React-Toolkit/ecommerce_rtk
     ```

2. Install dependencies:
     ```bash
     npm install
     ```

3. Start the development server:
     ```bash
     npm run dev
     ```

4. Open your browser and navigate to http://localhost:5173/ 

## Building for Production

```bash
npm run build
```

## Project Structure

```
ecommerce_rtk/
├── public/
├── src/
│   ├── Components/
│   │   ├── CartSlice.jsx      # Redux slice for cart functionality
│   │   ├── ProductList.jsx    # Product listing component
│   │   ├── ProductList.css    # Styling for product list
│   │   ├── ShoppingCart.jsx   # Shopping cart component
│   │   └── ShoppingCart.css   # Styling for shopping cart
│   ├── App.jsx               # Main application component
│   ├── App.css               # Application styles
│   ├── main.jsx              # Entry point
│   ├── index.css             # Global styles
│   └── store.js              # Redux store configuration
├── vite.config.js            # Vite configuration
└── package.json              # Project dependencies and scripts
```
        
## Features Implementation

- Product List: Displays available products with "Add to Cart" buttons
- Shopping Cart: Shows added products with quantity controls and removal options
- Redux State Management: Manages the cart state across components
- Responsive Design: Adapts to different screen sizes

## License

This project is licensed under the Apache License 2.0 - see the LICENSE file for details.
