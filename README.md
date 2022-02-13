## First, some details...
This is my personal clone of "vscode-template" from https://github.com/bitburner-official/vscode-template.

It includes some changes in the configuration files to make the debugging work. 

The official instructions are good if a bit unclear so I'll try to add some details.

## Where to start
You need to install some things first:
- [Visual Studio Code](https://code.visualstudio.com/) 
- [Node.js](https://nodejs.org/en/download/)
- [Git](https://git-scm.com/downloads)

Needed vsCode Extensions
- [Bitburner VSCode Integration](https://marketplace.visualstudio.com/items?itemName=bitburner.bitburner-vscode-integration)
- [Node NPM](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script)

Nice-to-have vsCode Extensions
- [vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [auto-snippet](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.auto-snippet)

Setup remote-debugging in Steam:
- Right-click on Bitburner->Properties
- On the general tab find the "LAUNCH OPTIONS" section
- Add this: "--remote-debugging-port=9222"

## Project installation
There is a couple options.

You can go on gitHub directly, make a clone of the project and open it up. This was my prefered method and I HIGHLY suggest that you take the time to learn how to create and use a github repository if you don't already. It's a basic programming task/skill and while it sounds complex for such a simple project it's actually really easy once you've got it going and it will absolutely save your ass at some point. 

OR you can start vsCode, go to the terminal and type:
```
git clone https://github.com/bitburner-official/vscode-template
```
## Setting things up
Once you have the project open and hopefully linked to your own cloned repository for version control and safety
- Start the game and make sure both "Enable server" and "Enable Autostart" are checked in APIServer menu
- Click on "copy auth token" in APIServer menu
- In vsCode: Find the Bitburner VSCode extension and open the settings.
- Paste your token in the first field (replace mine!)

## Starting things up
- In vsCode with the project opened: Go to the terminal and type these:
```
npm install
npm run defs
npm run watch
```
- Press F1 and Select Bitburner: Enable File Watcher to enable auto uploading to the game
- In the game: you should have a script called "watcher.js" now. Run it. You can add this to your startup script for future simplicity.

## Debugging
- Press F5 to start running vsCode compiling. Keep this going as you edit your files, they will get auto-compiled and converted to javascript as you go.
- You can add breakpoints to your code that will get triggered later when you run the script.

## How to use this
- Forget about the *.script... and even about the *.js javascripts. With this you need to work with Typescript files.
- Your *.ts scripts go in the src/ folder. This is where you code. These files get auto-transpiled (converted) into javascript when you save. This creates a *.js version in the dist/ folder that then gets sent to the game automatically. 
- In the game, "watcher.js" should catch the change and notify you in the game terminal. It should also kill/update/restart the script.
- You should find my super basic mk1 scripts in-game. Run "mk1_start_script" to get everything going. Scripts are in mk1/ . Very crude but workable for early-mid game. Super unefficient, but it will brute force it's way and make some money. 
- mk2 scripts coming soon

## What to do next time you want to play
All the settings should stay so:
- Start the game. Make sure "watcher.js" is running.
- Start vsCode. Press F5 to start the compiling/debugging
- Create/edit some scripts in /src and it should all still work

## Notes
Well that's it. Look at my *.ts files for inspiration on how to make yours. Only got "Z_test.ts" for now but I'll be building my mid-game routine with this real soon). 

It is very similar to javascript but with some quirks. Find a good Typescript reference and go from there.

There are some details about import and such so I included the original readme below.

Hope this helps. 


## -- ORIGINAL README BELOW --
## Extension Recommendations
[vscode-bitburner-connector](https://github.com/bitburner-official/bitburner-vscode) ([vscode extension marketplace](https://marketplace.visualstudio.com/items?itemName=bitburner.bitburner-vscode-integration)) to upload your files into the game

[vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) to use live linting in editor

[auto-snippet](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.auto-snippet) to automate inserting the file template in `.vscode/snippets.code-snippets`

There is a workspace file in `.vscode` which contains the recommended settings for all of these

## Dependencies
[Node.js](https://nodejs.org/en/download/) required for compiling typescript and installing dependencies

## Installation
```
git clone https://github.com/bitburner-official/vscode-template
npm install
npm run defs
```

## How to use this template
Write all your typescript source code in the `/src` directory

To autocompile as you save, run `npm run watch` in a terminal

To update your Netscript Definitions, run `npm run defs` in a terminal

Press F1 and Select `Bitburner: Enable File Watcher` to enable auto uploading to the game

If you run `watcher.js` in game, the game will automatically detect file changes and restart the associated scripts

## Imports
To ensure both the game and typescript have no issues with import paths, your import statements should follow a few formatting rules:

 * Paths must be absolute from the root of `src/`, which will be equivalent to the root directory of your home drive
 * Paths must contain no leading slash
 * Paths must end with no file extension

 ### Examples:

To import `helperFunction` from the file `helpers.ts` located in the directory `src/lib/`: 

```js
import { helperFunction } from 'lib/helpers'
```

To import all functions from the file `helpers.ts` located in the `src/lib/` directory as the namespace `helpers`:

```js
import * as helpers from 'lib/helpers'
```

To import `someFunction` from the file `main.ts` located in the `src/` directory:

```js
import { someFunction } from 'main'
```

## Deugging

For debugging bitburner on Steam you will need to enable a remote debugging port. This can be done by rightclicking bitburner in your Steam library and selecting properties. There you need to add `--remote-debugging-port=9222` [Thanks @DarkMio]

When debugging you see errors like the following:

```
Could not read source map for file:///path/to/Steam/steamapps/common/Bitburner/resources/app/dist/ext/monaco-editor/min/vs/editor/editor.main.js: ENOENT: no such file or directory, open '/path/to/Steam/steamapps/common/Bitburner/resources/app/dist/ext/monaco-editor/min/vs/editor/editor.main.js.map'
```

These errors are to be expected, they are referring to the game's files and the game does not come packaged with sourcemaps.