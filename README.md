# ScoutSite

A marketing site for a service that builds personal recruiting websites for
student athletes — one shareable link with stats, schedule and highlight
film, instead of cold emails with video attachments.

- **Live example featured on the site:** the recruiting site this was built
  from, [Julian Jozwiak's soccer site](https://kingjulian0520.github.io/Julian-jozwiak.soccer/).
- Sections: the problem with emailing coaches directly, what's included,
  how the build process works, the live example, pricing (Basic/Pro/Elite),
  and FAQ.

## Local development

Static site, no build step:

```
python3 -m http.server 8000
```

then open `http://localhost:8000`.

## Structure

```
index.html             landing page
assets/css/styles.css  all styling
```