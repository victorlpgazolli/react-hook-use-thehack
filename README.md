# React Hook useTheHack()
## Índice

- [Motivação](#motivação)
- [Funções](#funções)
- [Instalação](#instalação)
- [API](#api)
  - [Utilidades](#utilidades)
  - [Exemplos](#exemplos)
  - [Licença](#licença)

## Motivação
Eu iniciei esse projeto para aprender mais sobre o funcionamento dos custom hooks do react, e também da criação de testes unitários.

A escolha do blog no qual o projeto está baseado foi por acaso, não houve um motivo especial (apesar de eu gostar do blog).


## Funções
- [x] Buscar o resumo dos posts do blog
- [x] Buscar o conteúdo de 1 post
[] Buscar as categorias
[] Buscar o resumo dos posts por id de categoria
## Instalação

```bash
$ npm i react-hook-use-thehack
```

## API

### Utilidades

##### Props
```typescript
type theHackConfiguration = {
  baseUrl?: string;
  page?: number;
  slug?: string
};

type theHackPost = {
  title: string;
  description: string;
  image: string;
  author: Array<string>;
  slug: string;
};

```

`baseUrl`: thehack main website. Defaults to `https://thehack.com.br/`.

`page`: Page parameter used to get posts from website. If `slug` is undefined. Defaults to `1`.

`slug`: Post unique identifier, used to get content from a specific post.


##### Exemplos


```jsx
// Posts.js

import React, { useState } from 'react'
import { useTheHack } from 'react-hook-use-thehack'

const Posts = ({
  page: 2
}) => {
    const {
      posts
    } = useTheHack({
      page // get summary from all posts in page 2
    })

  return (
    <div>
      {posts.map(post => (
        <>
          <h1>{post.title}</h1>
          <h2>{post.description}</h2>
        </>
      ))}
    </div>
  )
}

export default App
```


```jsx
// Post.js

import React, { useState } from 'react'
import { useTheHack } from 'react-hook-use-thehack'

const exampleSlug = "na-pandemia-novas-fraudes-crescem-na-internet-e-afetam-brasileiros";

const Post = ({
  slug = exampleSlug
}) => {
    const {
      post
    } = useTheHack({
      slug // get content from one specific post
    })

  return (
    <div>
      <h1>{post.title}</h1>
      <h2>{post.description}</h2>
    </div>
  )
}

export default App
```


## Licença

MIT © [Victor Gazolli](https://github.com/victorlpgazolli)
