# snack-app

Snack app like slack.

## Feature

Use user defined js and css.

## Installation

    npm install

## Usage

    npm start

### Customize JavaScript

Automatically, Load following JavaScript files(`.js`).

- `%APPDATA%/snack-app/js/*.js` on Windows
- `$XDG_CONFIG_HOME/snack-app/js/*.js` or `~/.config/snack-app/js/*.js` on Linux
- `~/Library/Application Support/snack-app/js/*.js` on OS X

### Customize CSS

Automatically, Load following CSS files(`.css`).

- `%APPDATA%/snack-app/css/*.css` on Windows
- `$XDG_CONFIG_HOME/snack-app/css/*.css` or `~/.config/snack-app/css/*.css` on Linux
- `~/Library/Application Support/snack-app/css/*.css` on OS X

## FAQ

Q. How to customize?

1. Put `.js` or `.css` to above directory.
2. Reload snack app(Cmd+R or Ctrl+R or Menu->View->Reload.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT