# Cadastro de Projetos

Sistema para gerenciar cadastros de projetos

## Instalar dependências do projeto
```
npm install
```

## Criar o arquivo de variáveis baseado no modelo
```
cp config.js.example config.js
```

## Alterar a URL Base no arquivo config.js de acordo com o seu ambiente
```
API_URL: 'http://x.x.x.x/api'
```

### Iniciar a aplicação em modo de desenvolvimento (Ideal para testar)
```
npm run serve
```

### Gerar versao de produção (Necessário ter algum servidor como Nginx ou Apache)
```
npm run build
```
