# Cadastro de Projetos

Sistema para gerenciar cadastros de projetos, desenvolvido em Vue.js

## Instalar o Vue CLI
Pode não ser necessário, mas como os modos de desenvolvimento e build usam alguns comando que dependem dessa interface, é melhor deixar ela instalada.
```
npm install -g @vue/cli
```

## Clone o projeto
```
git clone https://github.com/dudstecnologia/desafio-fpf-front.git
```

## Acesse a pasta do projeto clonado
```
cd desafio-fpf-front
```

## Instalar as dependências do projeto
```
npm install
```

## Criar o arquivo de variáveis baseado no modelo
Utilize o comando cp no Linux, e copy no Windows
```
cp config.js.example config.js
```

## Alterar a URL Base no arquivo config.js de acordo com o seu ambiente
Por padrão eu já deixei o endereço que é utilizado pelo servidor de desenvolvimento do Laravel, altere apenas se for necessário.
```
API_URL: 'http://127.0.0.1:8000/api'
```

### Iniciar a aplicação em modo de desenvolvimento (Ideal para testar)
Se a porta 8080 não estiver ocupada, ela será usada nesse modo. Logo o endereço para teste será: http://localhost:8080/
```
npm run serve
```

### Gerar versao de produção (Necessário ter algum servidor como Nginx ou Apache)
```
npm run build
```
