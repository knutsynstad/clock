# Clock
SVG/JS Clock based on Dieter Rams' classic watch design for Braun in the 1970s.

## Dependencies
* Node.js
* Grunt-cli
* Ruby
* Sass

## Getting Started

To install this project:

1. Install all dependencies.

2. Clone this git repo:

  `git clone git://github.com/knutsynstad/clock.git`

3. Install node dependencies:

  `cd clock`
  
  `npm install`

Run the serve task `grunt serve` and you can edit files in `app` folder. By default, Grunt will try to open the preview in your default browser; alternatively, preview URL is `http://localhost:9001/`.


## Tasks

`grunt serve`

This tasks watches for changes to sources inside the `app` folder and starts a static HTTP server at `http://localhost:9001/` pointing to the `.tmp` folder where processed resources are stored.

`grunt build`

This tasks creates a build from your source. It creates a folder named `dist` next to `app`.
