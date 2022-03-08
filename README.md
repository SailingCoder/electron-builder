# electron-builder

## To Use

```bash
# Clone this repository
git clone https://github.com/ghSailing/electron-builder.git
# Go into the repository
cd electron-builder
# Install dependencies
npm install
# Run the app
npm start
```

注意：在windows中执行install，appdmg会报错。将appdmg从package.json中移除，重新执行npm install即可
## build mac dmg

```bash
# make out
npm run make
# build dmg
npm run dmg
```

> mac打包dmg，必须在mac电脑

## build windows exe

```bash
# build exe
npm run package

```

> windows打包exe，必须在windows电脑
