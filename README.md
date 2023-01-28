# OG Image Generator 

🍇Open Graph Image Generator based on [@vercel/og](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation) for personal use.

## What is an Open Graph Image?

Have you ever posted a hyperlink to Twitter, Facebook, or Slack and seen an image popup?
How did your social network know how to "unfurl" the URL and get an image?
The answer is in your `<head>`.

The [Open Graph protocol](http://ogp.me) says you can put a `<meta>` tag in the `<head>` of a webpage to define this image.

It looks like the following:

```html
<head>
  <title>Title</title>
  <meta property="og:image" content="http://example.com/logo.jpg" />
</head>
```

## Why use this service?

* Feel free to customize an image for every single blog post or every single documentation page.
* This is easily introduced through a link with some params.


## Deploy Guide

1. Fork this repository
2. Replace the bg image and logo to yours in pulic dir, and change the relevant text infomation.
3. Connect [Vercel for GitHub](https://vercel.com/github) to automatically deploy each time you `git push`
4. Add the following to the vercel environment variables: **Settings > Environment Variables**

| Name                       | Value                   |
| -------------------------- | ----------------------- |
| NEXT_PUBLIC_DEPLOYMENT_URL | https://deployment.domain.com |

## License

[MIT](./LICENSE) License © 2023 [Lovell Liu](https://github.com/lovelliu)
