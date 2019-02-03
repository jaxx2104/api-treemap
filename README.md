# warsman

[![NPM Version](http://img.shields.io/npm/v/warsman.svg?style=flat)](https://www.npmjs.org/package/warsman)
[![CircleCI](https://circleci.com/gh/jaxx2104/warsman/tree/develop.svg?style=svg)](https://circleci.com/gh/jaxx2104/warsman/tree/develop)

Report the most contributor in the code review.

![warsman](https://blogs.c.yimg.jp/res/blog-8d-e6/saranndonn/folder/1835128/84/66599984/img_0)

_warsman is the silent hero._

## Install

```
$ npm install warsman
or
$ npm install -g warsman
```

## Usage

### JavaScript API

```js
import warsman from 'warsman'

const repo = 'facebook/react'
const token = 'XXXXXXXXXX'
const options = {
  max: 10
}

warsman(repo, token, options).then(results => {
  console.log(results)
  // [ { user: 'jaxx2104', count: 26 },
  // { user: 'foo', count: 23 },
  // { user: 'bar', count: 19 } ]
})
```

### Command Line Interface

**Table mode**

```
$ warsman --repo facebook/react --token XXXXXXXXXX
```

result

```
┌─────────┬────────────┬───────┐
│ (index) │    user    │ count │
├─────────┼────────────┼───────┤
│    0    │ 'jaxx2104' │  26   │
│    1    │ 'foo'      │  23   │
│    2    │ 'bar'      │  19   │
└─────────┴────────────┴───────┘
```

**Figlet mode**

```
$ warsman --repo facebook/react --token XXXXXXXXXX --figlet Slant
```

result

```
       _                ___  _______  __ __
      (_)___ __  ___  _|__ \<  / __ \/ // /
     / / __ `/ |/_/ |/_/_/ // / / / / // /_
    / / /_/ />  <_>  </ __// / /_/ /__  __/
 __/ /\__,_/_/|_/_/|_/____/_/\____/  /_/
/___/
```

## Options

| option                    | description                                         |
| ------------------------- | --------------------------------------------------- |
| -V, --version             | output the version number                           |
| --u, --url <url>          | GitHub API URL (default: "https://api.github.com/") |
| -r, --repo <account/repo> | GitHub Repository                                   |
| -t, --token <token>       | GitHub Personal Access Token                        |
| --max <n>                 | GitHub Max PullRequests                             |
| --figlet <font>           | figlet mode                                         |
