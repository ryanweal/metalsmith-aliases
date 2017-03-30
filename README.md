metalsmith-aliases-nginx
===============

Create aliases for your posts compiled into a file called nginx.conf in the root of your metalsmith installation.

This file can be imported into an Nginx server directive and will emit a 301 http status for the requests.

This plugin is based on metalsmith-aliases which takes a different approach of creating html files with meta-refresh, but that is W3C depreciated behavior and results in files being downloaded twice, which can make the site appear to be slower.

If you are currently using metalsmith-aliases you can use this as a drop-in replacement. There is no need to run both.

## Installation

```sh
npm install --save metalsmith-aliases-nginx
```

## Usage

This plugin depends on having an property called `permalink`, so in order for it to work we need to
either add that ourselves or use the [permalinks plugin](https://github.com/segmentio/metalsmith-permalinks).
This needs to happen before the alias plugin.

### Javascript API

```javascript
var Metalsmith = require('metalsmith');
var aliases = require('metalsmith-aliases-nginx');
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

### Post-build

After you run ```make build``` you will want to include the nginx.conf file that is generated into your server configuration.

