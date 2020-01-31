---
title: "Deploy a pkgdown on gh-pages"
date: 2019-10-22
tags: [continuous integration, Travis, GitHub pages, website, R, pkgdown]
---


There are three ways to [deploy a website on your GitHub pages](https://help.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) :

1. using the `gh-pages`;
2. using the folder `docs` on your master branch;
3. using the master branch.

I frequently use the GitHub pages to deploy the [pkgdown](https://github.com/r-lib/pkgdown) websites I create for my R packages. For a while, I was using the `docs/` folder where the website is generated by default. But I figured that this way has two main drawbacks:

1. I needed to rebuild the package locally after (pretty much) any change in the package;
2. it adds a huge amount of changes in the commit history.

That's why I've decided to make [Travis](https://travis-ci.org/) build the
website and deploy it on the `gh-branch` (many developers smartly use this
approach which actually is the default branch for Travis). After tweaking
`travis.yml` (see [Travis documentation about this]) I ran into two problems.
First, I needed a deploy key:


```r
Error: No deploy key found, please setup with `travis::use_travis_deploy()`
```

I read the error message and fixed it :smile:!. The second one was slightly more difficult (to me): the `gh-branch` had to be empty and as I created `gh-pages` from `master` it wasn't! So, I've got the following error message:

```
Error: callr subprocess failed: '/tmp/RtmpDinJqC/file409c3dd473be' is non-empty and not built by pkgdown

Execution halted

Script failed with status 1
```

see [this job](https://travis-ci.org/KevCaz/seedlingsRecruitment/builds/598866219#L1432) if you want to check out the full console log.

Fortunately, the solution to fix this issue [is well explained on the pkgdown
website](https://pkgdown.r-lib.org/reference/deploy_site_github.html). Following
the guidelines provided, you should actually get away from the two issues I
described above :wink:!
