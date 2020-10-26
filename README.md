# 📦 package-version
An Action to extract package version from package.json and export it to an environment variable

## 📖 Docs (kind of)

```yaml
- uses: nyaayaya/package-version@v1
  with:
    path: 'uwu/package.json' # Optional
    follow-symlinks: 'false' # Optional
```

And then you can use `${{ env.PACKAGE_VERSION }}` 🎉

Thank you for reading this 🙇🏼‍♀️

*Made using heavily modified [actions/typescript-action](https://github.com/actions/typescript-action) template*
