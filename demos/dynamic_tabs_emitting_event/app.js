(function() {

  // Module declaration.
  var app = angular.module( "app", [ "ngSanitize" ] );


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  app.controller( "AppController", AppController );

  AppController.$inject = [
    "$sce"  // To parse HTML string.
  ];
  function AppController( $sce ) {

    this.contents = [];

    // Data for tabs and contents.
    // This can be loaded from a service.
    this.contents = contents;
  }

  var contents = [

    {
      label: "AngularJS",
      url: "https://angularjs.org/",
      body: "AngularJS (commonly referred to as Angular or Angular.js) is an open-source web application framework mainly maintained by Google and by a community of individuals most notably, Rangle.io as well as group developers and corporations to address many of the challenges encountered in developing single-page applications. It aims to simplify both the development and the testing of such applications by providing a framework for client-side model–view–controller (MVC) and model–view–viewmodel (MVVM) architectures, along with components commonly used in rich Internet applications.",
    },
    {
      label: "Angular2",
      url: "https://angular.io/",
      body: [ "<b>Fast</b> - Angular computes updates based on changes to data, not DOM, for fast updates that scale to the largest data sets with minimal memory overhead.",
              "<br /><b>Mobile</b> - With Angular Universal for server-side rendering and Web Workers for smooth scrolling and transitions, Angular 2 solves the core challenges in mobile web performance.",
              "<br /><b>Flexible</b> - Supports several languages including plain JavaScript, TypeScript, and Dart. Also supports both object-style data structure with POJO data-binding and functional reactive style with unidirectional data flow and support for observables and immutable data structures."
            ].join("")
    },
    {
      label: "ReactJS",
      url: "https://facebook.github.io/react/",
      body: [ "<b>JUST THE UI</b> - Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology stack, it's easy to try it out on a small feature in an existing project.",
              "<br /><b>VIRTUAL DOM</b> - React abstracts away the DOM from you, giving a simpler programming model and better performance. React can also render on the server using Node, and it can power native apps using React Native.",
              "<br /><b>DATA FLOW</b> - React implements one-way reactive data flow which reduces boilerplate and is easier to reason about than traditional data binding."
            ].join("")
    },
    {
      label: "Ruby on Rails",
      url: "http://rubyonrails.org/",
      body: "Ruby on Rails® is an open-source web framework that’s optimized for programmer happiness and sustainable productivity. It lets you write beautiful code by favoring convention over configuration."
    },
    {
      label: "Sinatra",
      url: "http://www.sinatrarb.com/",
      body: "Sinatra is a free and open source software web application library and domain-specific language written in Ruby. It is an alternative to other Ruby web application frameworks such as Ruby on Rails, Merb, Nitro, and Camping. It is dependent on the Rack web server interface."
    },

  ]

})();
