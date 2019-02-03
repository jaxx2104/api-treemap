# api-treemap

[![NPM Version](http://img.shields.io/npm/v/api-treemap.svg?style=flat)](https://www.npmjs.org/package/api-treemap)
[![CircleCI](https://circleci.com/gh/jaxx2104/api-treemap/tree/develop.svg?style=svg)](https://circleci.com/gh/jaxx2104/api-treemap/tree/develop)

Description

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
