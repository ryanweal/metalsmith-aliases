metalsmith-alias
===============

Create aliases for your posts and redirect from them if preferable.

## Installation

```sh
npm install --save metalsmith-alias
```

## Usage

This plugin depends on having an property called `permalink`, so in order for it to work we need to
either add that ourselves or use the [permalinks plugin](https://github.com/segmentio/metalsmith-permalinks).
This needs to happen before the alias plugin.

### Javascript API

```javascript
var Metalsmith = require('metalsmith');
var alias = require('metalsmith-alias');
var permalinks = require('metalsmith-permalinks');

Metalsmith()
  .use(permalinks())
  .use(alias());
```

### Posts
Add your alias in the form of an array in your posts:

```markdown
---
title: Reactive extensions in Javascript
alias: [2016/01/14/reactive-extensions-in-javascript]
---
```

```markdown
---
title: Metalsmith alias
alias: [2016/03/15/metalsmith-alias, metalsmith-using-alias]
---
```

## Options

### Redirect
If the alias should redirect to the given post. Defaults to `false`.