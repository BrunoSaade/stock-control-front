# controle-estoque-front

## Configuração do projeto

Certifique-se de ter o Node.js instalado em sua máquina, consulte a [documentação](https://nodejs.org/en/download).

Esse projeto Front-End deve ser iniciado juntamente com o [projeto Back-End](https://github.com/BrunoSaade/stock-control-back) para o seu funcionamento.

No arquivo [api.js](https://github.com/BrunoSaade/controle-estoque/blob/master/services/api.js) atribua à constante apiBaseUrl a url Back-End que está sendo executado.

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

Para uma explicação detalhada de como as coisas funcionam, consulte a [documentação](https://nuxtjs.org).

## Special Directories

Você pode criar os seguintes diretórios extras, alguns dos quais têm comportamentos especiais. Apenas `pages` é obrigatório; você pode excluí-los se não quiser usar sua funcionalidade.

### `assets`

O diretório de assets contém seus assets não compilados, como arquivos Stylus ou Sass, imagens ou fontes.

Mais informações sobre o uso deste diretório na [documentação](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

O diretório de components contém seus componentes Vue.js. Os componentes compõem as diferentes partes da sua página e podem ser reutilizados e importados nas suas páginas, layouts e até mesmo em outros componentes.

Mais informações sobre o uso deste diretório na [documentação](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Os layouts são de grande ajuda quando você quer mudar a aparência do seu aplicativo Nuxt, seja para incluir uma barra lateral ou ter layouts distintos para mobile e desktop.

Mais informações sobre o uso deste diretório na [documentação](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

Este diretório contém as visualizações e rotas do seu aplicativo. Nuxt irá ler todos os arquivos `*.vue` dentro deste diretório e configurar o Vue Router automaticamente.

Mais informações sobre o uso deste diretório na [documentação](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

O diretório de plug-ins contém plug-ins JavaScript que você deseja executar antes de instanciar o aplicativo Vue.js raiz. Este é o lugar para adicionar plugins Vue e injetar funções ou constantes. Toda vez que você precisar usar `Vue.use()`, você deve criar um arquivo em `plugins/` e adicionar seu caminho para plugins em `nuxt.config.js`.

Mais informações sobre o uso deste diretório na [documentação](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

Este diretório contém seus arquivos estáticos. Cada arquivo dentro deste diretório é mapeado para `/`.

Exemplo: `/static/robots.txt` é mapeado como `/robots.txt`.

Mais informações sobre o uso deste diretório na [documentação](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

Este diretório contém os arquivos da sua loja Vuex. Criar um arquivo neste diretório ativa automaticamente o Vuex.

Mais informações sobre o uso deste diretório na [documentação](https://nuxtjs.org/docs/2.x/directory-structure/store).
