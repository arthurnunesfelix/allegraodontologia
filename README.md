# Allegra Landing Page Premium

Projeto em React + Vite + Tailwind CSS com foco em alta conversao para clinica.

## Requisitos

- Node.js 20+
- npm 10+

## Rodar local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Arquivo da Dra. Gabrielle

Para exibir a foto correta da Dra. Gabrielle no card da equipe, adicione um destes arquivos em:

`public/images/`

- `dra-gabrielle-tomokane.png`
- `dra-gabrielle-tomokane.webp`
- `dra-gabrielle-tomokane.jpg`
- `dra-gabrielle-tomokane.jpeg`

Se o arquivo nao existir, o site mostra fallback visual automaticamente.

## Enviar para GitHub

```bash
git init
git add .
git commit -m "site premium allegra pronto para deploy"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/SEU_REPO.git
git push -u origin main
```

## Deploy no Vercel

1. Acesse `vercel.com/new`
2. Conecte seu repositorio do GitHub
3. Framework detectado: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Clique em **Deploy**

## Estrutura principal

- `src/App.tsx` -> pagina principal completa
- `src/index.css` -> tema global e tipografia
- `index.html` -> metadados e fontes
