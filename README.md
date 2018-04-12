# angular-ext-edge-bug

Issues:

- https://github.com/angular/angular/issues/23340
- https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/16906063/

Repro:

```
git clone https://github.com/kspearrin/angular-ext-edge-bug.git
cd angular-ext-edge-bug
npm install
npm run build:watch
```

Load the extension in Edge:

Settings -> Extension -> Load Extension

Then open the popup and view the console. Beware: the Edge dev tools for extensions are pretty bad. Very glitchy and often require browser restart to function.
