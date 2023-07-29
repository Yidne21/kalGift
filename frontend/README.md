# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Screen shots

### Home page

<div style="display: flex; flex-wrap: wrap;">

<div style="flex: 50%; padding: 10px;">
    <h4>Light</h4>
    <div>
        <img src="path/to/light_image_1.jpg" alt="Light Image 1">
    </div>
</div>

<div style="flex: 50%; padding: 10px;">
    <h4>Dark</h4>
    <div>
        <img src="path/to/dark_image_1.jpg" alt="Dark Image 1">
    </div>
</div>

</div>

### Login

<div style="display: flex; flex-wrap: wrap;">

<div style="flex: 50%; padding: 10px;">
    <h4>Light</h4>
    <div>
        <img src="path/to/light_image_2.jpg" alt="Light Image 2">
    </div>
</div>

<div style="flex: 50%; padding: 10px;">
    <h4>Dark</h4>
    <div>
        <img src="path/to/dark_image_2.jpg" alt="Dark Image 2">
    </div>
</div>

</div>


