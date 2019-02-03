# api-treemap

[![NPM Version](http://img.shields.io/npm/v/api-treemap.svg?style=flat)](https://www.npmjs.org/package/api-treemap)
[![CircleCI](https://circleci.com/gh/jaxx2104/api-treemap/tree/develop.svg?style=svg)](https://circleci.com/gh/jaxx2104/api-treemap/tree/develop)

Report the most contributor in the code review.

![api-treemap](https://blogs.c.yimg.jp/res/blog-8d-e6/saranndonn/folder/1835128/84/66599984/img_0)

_api-treemap is the silent hero._

## Install

```
$ npm install api-treemap
or
$ npm install -g api-treemap
```

## Usage

### JavaScript API

```js
import treemap from 'api-treemap'

```

### Command Line Interface

```
$ api-treemap --repo facebook/react --token XXXXXXXXXX
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
