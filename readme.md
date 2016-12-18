# CocoaHeads Conference website

## Rodando o site

O site precisa do [Jekyll](https://jekyllrb.com) para funcionar. No terminal, na pasta do site, rode os comandos

```
sudo gem install jekyll bundler
jekyll serve
```

E pronto, o site já deve estar funcionando em `localhost:4000` :)

## Atualizando dados do site

Os dados do site são gerados a partir dos dados presentes nos JSON da pasta _data. Para quaisquer alterações, basta alterar lá que o site e o app da conf sejam atualizados :)

## Como adicionar a transcrição de um talk

Certifique-se de que o talk, seu speaker e o vídeo estão adicionados nos JSON na pasta _data e crie um arquivo na pasta _talks com o front-matter:

```
---
layout: talk
talkid: <aqui vem o id da talk no talks.json>
---

Escreva a transcrição aqui

```

Para adicionar um talk ao site, é necessário que seja criado o arquivo de transcrição, mesmo que ele esteja vazio