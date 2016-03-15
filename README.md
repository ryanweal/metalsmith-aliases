metalsmith-aliases
===============

Create aliases for your posts and redirect from them if preferable.

## Installation

```sh
npm install --save metalsmith-aliases
```

## Usage

This plugin depends on having an property called `permalink`, so in order for it to work we need to
either add that ourselves or use the [permalinks plugin](https://github.com/segmentio/metalsmith-permalinks).
This needs to happen before the alias plugin.

### Javascript API

```javascript
var Metalsmith = require('metalsmith');
var aliases = require('metalsmith-aliases');
var permalinks = require('metalsmith-permalinks');

Metalsmith()
  .use(permalinks())
  .use(aliases());
```

### Posts
Add your aliases in the form of an array in your posts:

```markdown
---
title: Reactive extensions in Javascript
aliases: [2016/01/14/reactive-extensions-in-javascript]
---
```

```markdown
---
title: Metalsmith aliases
aliases: [2016/03/15/metalsmith-aliases, metalsmith-using-aliases]
---
```

## Options

### Redirect
If the alias should redirect to the given post. Defaults to `false`.