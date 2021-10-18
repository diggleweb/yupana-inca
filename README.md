# Yupana Inca


## deploy into github pages

- requeriments:
    - nodejs

- install 
    - install gh-pages
        > npm i gh-pages 
    - verifique se tem node instalado
        > node --version
    - inicialize projeto 
        > npm init -y
    - apos ter criado seu projeto e enviado para o git, criaremos nova branch para deploy en github pages
        > npx gh-pages -d .
        ```
        Published...
        ```
    
    No repositorio/Settings/Page voce encontrará o link da sua nova pagina.
    [https://diggleweb.github.io/yupana-inca/](https://diggleweb.github.io/yupana-inca/)

- Upload de arquivos
    - no arquivo `package.json` `scripts` adicione o seguinte:

    ```json
    ...
    "scripts": {
        "deploy": "gh-pages -d ."
    }, 
    ...
    ```
    subir arquivos com git..
    - deploy no branch gh-pages
    > npm run deploy 




