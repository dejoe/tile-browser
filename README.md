## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Deploy to github Instructions
Deploy to gh-pages using
    ng github-pages:deploy --message "Optional commit message"    

AFter a deploy to github, you have to install bower components again. Below are instructions for doing the same.

## VAADIN INSTRUCTIONS
After a deploy Install this if there are issues with bower components. Use --force if there are further issues.
    bower install vaadin-split-layout
    bower install vaadin-combo-box

