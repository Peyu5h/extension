
```bash
npx plasmo init --with-src
```

Install tailwind

```bash
pnpm i -D tailwindcss postcss autoprefixer
```
```bash
npx tailwindcss init
```

create `postcss.config.js`

```bash
/**
 * @type {import('postcss').ProcessOptions}
 */
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}
```

edit `tailwind.config.js`

```bash
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./**/*.tsx"],
  plugins: []
}
```

`style.css`

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

after that install nyxbui 

```bash
npx nyxbui@latest init
```
