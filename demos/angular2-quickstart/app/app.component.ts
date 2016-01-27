import {Component} from 'angular2/core';

// A class becomes an Angular component when we give it metadata.
// @Component tells Angular that this class is an Angular component.
// The configuration object passed to the @Component method has two fields,
// a selector and a template.
@Component({
  selector: 'my-app',
  template: '<h1>Boku-no hajimete-no Angular 2 App</h1>'
})

// The name of the file (without extension) is usually the name of the module.
// Accordingly, 'app.component' is the name of our first module.
export class AppComponent { }
