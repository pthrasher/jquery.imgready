# jQuery imgReady

Fires a callback when the given image(s) finish loading.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/pthrasher/jquery.imgready/master/dist/jquery.imgready.min.js
[max]: https://raw.github.com/pthrasher/jquery.imgready/master/dist/jquery.imgready.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jquery.imgready.min.js"></script>
<script>
jQuery(function($) {
  
  $("img").imgReady({
    callback: function() {
        // Do something now that the images are loaded.
    }
  });

});
</script>
```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

_Also, please don't edit files in the "dist" subdirectory as they are generated via grunt. You'll find source code in the "src" subdirectory!_

## Release History
0.1.0 - Initial release.

## License
Copyright (c) 2012 Philip Thrasher  
Licensed under the MIT license.
