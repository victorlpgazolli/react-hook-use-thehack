
## Contents

- [Motivation](#motivation)
- [Features](#features)
- [Contributions](#contributions)
- [Installation](#installation)
- [API](#api)
  - [Component Utilities](#component-utilities)
  - [Examples](#examples)
  - [Inspiration](#inspiration)
  - [License](#license)

## Motivation



## Features

- 

## Contributions

PRs are more than welcome. If you're planning to contribute please make sure to read the contributing guide: [CONTRIBUTING.md](https://github.com/rgommezz/react-native-offline/blob/master/CONTRIBUTING.md)

## Installation

```bash
$ yarn add react-use-the-hack

# Or if you use npm
$ npm i react-use-the-hack
```

## API

### Component Utilities

##### Props
```js
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


##### Examples


```jsx
// Posts.js

import React, { useState } from 'react'
import { useTheHack } from 'react-use-the-hack'

const Posts = ({
  page: 2
}) => {
    const posts = useTheHack({
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
import { useTheHack } from 'react-use-the-hack'

const exampleSlug = "na-pandemia-novas-fraudes-crescem-na-internet-e-afetam-brasileiros";

const Post = ({
  slug = exampleSlug
}) => {
    const { title, description } = useTheHack({
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


## License

MIT © [Victor Gazolli](https://github.com/victorlpgazolli)
