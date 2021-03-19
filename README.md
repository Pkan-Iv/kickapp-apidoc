# kickapp-apidoc
API Documentation for KickApp-API

## **Dependencies**

### Install Apidoc

```bash
npm install apidoc -g
```
### Install Apidoc-markdown

```bash
npm i apidoc-markdown -g
```

---
## **Create apiDoc**
### Generate project's apiDoc

To generate the doc, launch this command in kickapp-apidoc directory:
``` bash
apidoc -i ../kickApp/ -o . -e node_modules
```
### Generate markdown version

```bash
apidoc-markdown -p . -o kickapp-apidoc.md
```

---

## Public documentation
+ [HTML Doc access](https://kickrap.github.io/kickapp-apidoc/ "Public doc access").
+ [Markdown Doc access](kickapp-apidoc.md "Public markdown doc access").
