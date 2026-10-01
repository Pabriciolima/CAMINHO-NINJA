# Caminho Ninja

Aplicativo para acompanhar episódios e filmes de Naruto.

## Publicação

O projeto Vercel `caminho-ninja` deve usar este repositório e a branch `main` como origem de produção.

- Diretório raiz: raiz do repositório.
- Framework: Other (site estático).
- Build: `node scripts/build.mjs`.
- Diretório de saída: `dist`.

As configurações de build estão no `vercel.json`. O script valida que `index.html` contém HTML em UTF-8, verifica a sintaxe JavaScript e copia o conteúdo para `dist/index.html`. Conteúdo Base64 é rejeitado para evitar publicar texto codificado no lugar do aplicativo.

Para validar localmente, execute `node scripts/build.mjs`.
