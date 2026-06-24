# Publicacao online

O portfolio ja esta pronto para publicar como site estatico.

## Opcao recomendada: GitHub Pages

1. Crie um repositorio no GitHub chamado `alej404T.github.io` ou `portfolio`.
2. Suba os arquivos desta pasta para esse repositorio.
3. No GitHub, abra `Settings > Pages`.
4. Escolha `Deploy from a branch`.
5. Selecione a branch `main` e a pasta `/root`.
6. Salve e aguarde o link aparecer.

Se o repositorio se chamar `alej404T.github.io`, o endereco esperado sera:

```text
https://alej404T.github.io
```

## Opcao rapida: Netlify Drop

1. Abra `https://app.netlify.com/drop`.
2. Arraste esta pasta para a pagina.
3. O Netlify gera um link publico na hora.

## Opcao com Vercel

1. Crie um repositorio no GitHub com estes arquivos.
2. Abra `https://vercel.com/new`.
3. Importe o repositorio.
4. Publique sem comando de build, porque o site e estatico.

## Importante

Eu consigo preparar os arquivos e os comandos, mas login, senha, 2FA e autorizacao da conta precisam ser feitos por voce.

## Atalho criado

Depois de criar o repositorio no GitHub, voce tambem pode rodar:

```powershell
.\publicar-github-pages.ps1
```

O script configura o endereco do repositorio e tenta enviar a branch `main`.
