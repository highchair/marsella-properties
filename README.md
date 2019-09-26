Marsella Properties
====================

Locally generated static HTML site built with [Jekyll](https://jekyllrb.com/) with [SASS](https://sass-lang.com/), [Bootstrap 4.3](https://getbootstrap.com/docs/4.3/getting-started/introduction/), and [Autoprefixer](https://github.com/vwochnik/jekyll-autoprefixer).

**Built on Grey Matter from Oomph**. [Grey Matter](https://github.com/oomphinc/oomph-grey-matter) is a boilerplate scaffold for stand-alone Jekyll projects. Inspired by [Distillery](https://github.com/thinkshout/distillery/tree/master/) (and now heavily updated/modified), built and served with Jekyll, leveraging Oomph SASS Scaffold custom code and *Bootstrap 4*.


## Get started with Bundler

```bash
$ bundle install
```

## Serve the site locally

Includes a site HTML compile and SASS compile. Use the `incremental` flag to build 
only the assets that have changed. The `JEKYLL_ENV` variable is assumed to be 
"development" when omitted. 

```bash
$ jekyll serve --I
```

In a browser, open [http://127.0.0.1:4000/](http://127.0.0.1:4000/)

### Additional Flags

+ `--drafts` to publish/preview drafts
+ `--future` to publish/preview posts with a future date
+ `--unpublished` to publish/preview posts marked with unpublished


## Build the Site for Production

Specify the production environment to omit content intended for development only. 
Optionally, add the future flag to publish posts that have a future timestamp. 

```bash
$ JEKYLL_ENV=production jekyll build --future
```
