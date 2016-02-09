(function() {

  // Module declaration.
  angular
    .module( "app", [ ] );


  // -------------------------------------- //
  // -------------------------------------- //


  angular
    .module( "app" )
    .controller( "AppController", AppController );

  AppController.$inject = [
    "DemoData"
  ];
  function AppController( DemoData ) {

    // Load demo data.
    this.demos = DemoData.get();

  } // end AppController


  // -------------------------------------- //
  // -------------------------------------- //


  angular
    .module( "app" )
    .factory( "DemoData", DemoData );

  function DemoData() {

    return { get: get };

    function get() {

      // 1. A list of items to be displayed in the table.
      var data = [
        {
          name: "binding_events",
          type: "Angular",
          desc: "Binding clicking event to a component",
        },
        {
          name: "bookstore",
          type: "Angular",
          desc: "A practice app",
        },
        {
          name: "filterable_table",
          type: "Angular",
          desc: "Customizing a table filtering",
        },
        {
          name: "gemstore",
          type: "Angular",
          desc: "A practice app",
        },
        {
          name: "multi_transclude_v1.3",
          type: "Angular",
          desc: "Multi-transclude with a custom transclude functon for pre-1.5.*",
        },
        {
          name: "multi_transclude_v1.5",
          type: "Angular",
          desc: "Taking advantage of Angular-v1.5's Multi-slot transclusion.",
        },
        {
          name: "tabs_using_require",
          type: "Angular",
          desc: "Communication between components by a child accessing its parent scope using require",
        },
        {
          name: "tabs_emitting_event",
          type: "Angular",
          desc: "Communication between components through events",
        },
        {
          name: "movie_search",
          type: "Angular",
          desc: "Loading movie info from the Open Movie Database API based on the title that the user enters",
        },
        {
          name: "toggling_buttons",
          type: "Angular",
          desc: "Responding to button clicks",
        },
        {
          name: "list_slider",
          type: "HTML, CSS, JS",
          desc: "When an list item is clicked, the description slides up",
        },
        {
          name: "modal_dialog",
          type: "Angular, CSS",
          desc: "Reusable modal dialog component to which we can pass in title, content text and optionally dimension",
        },
        {
          name: "modal_dialog_2",
          type: "Angular, CSS",
          desc: "Dealing with different types of dialogs in the same page",
        },
        {
          name: "hexagonal_grid",
          type: "CSS",
          desc: "Responsive hexagonal grid layout with hover animation",
        },
        {
          name: "evenly_distributed_dots",
          type: "Angular",
          desc: "Dynamically adjust the grid so that the dots are evenly distributed",
        },
        {
          name: "angular2-quickstart",
          type: "Angular2",
          desc: "My first app with Angular 2 + TypeScript",
        },
        {
          name: "layout_experiments",
          type: "CSS",
          desc: "Responsive design",
        },
        {
          name: "jumbotron",
          type: "CSS",
          desc: "Responsive design",
        },
        {
          name: "mobile_first_design",
          type: "CSS",
          desc: "Responsive design",
        },
      ];

      // 2. Generate urls.
      data = extendWithUrls( data );

      // 3. Sort by name and return data.
      return data.sort( function( a, b ) { return a.name.localeCompare( b.name ); });

    } // end get


    /**
     * Generate demoUrl and githubUrl for each demo based on my convention, and
     * add each demo data the generated urls.
     * @param demos A JSON array of demo info.
     */
    function extendWithUrls( demos ) {

      var extendedWithUrls = _.map(demos, function(demo) {

        var githubBaseUrl = "https://github.com/mnishiguchi/JavaScript-Demos/tree/gh-pages/demos/";

        // Generate urls based on my convention and create an object with them.
        var urls = {
          demoUrl:   [ "demos/", demo.name, "/index.html" ].join(""),
          githubUrl: [ githubBaseUrl, demo.name, "/index.html" ].join(""),
        }

        // Extend each demo object with urls.
        return _.extend( {}, demo, urls );

      });

      return extendedWithUrls;

    } // extendWithUrls
  }

})(); // end module
