/**
 * Get icons blinking.
 */
$(document).ready( function() {

  // Blinking eyes
  setInterval(function() {
      $('.flashing').fadeOut(1000).fadeIn(1000);
  }, 2000);

});


// ----------------------------------------------------------------------- //
// ----------------------------------------------------------------------- //


/**
 * The main Augular module for this website.
 */
(function() {

  // Module declaration.
  angular
    .module( "app", [ ] );


  // --------------------------------------------------------------------- //
  // --------------------------------------------------------------------- //


  angular
    .module( "app" )
    .controller( "AppController", AppController );

  AppController.$inject = [
    "$filter",
    "DemoData"
  ];
  function AppController( $filter, DemoData ) {

    vm = this;

    // Initial state.
    vm.demos    = [];
    vm.filtered = [];

    // Expose public methods.
    vm.filterData = filterData;

    // Load demo data.
    vm.demos = DemoData.get();

    // Assign demos to filtered.
    vm.filtered = vm.demos;


    /**
     * Filter the demo data based on the specified keyword.
     * @param  key A filter key.
     */
    function filterData( key ) {

      var filtered = $filter( "filter" )( vm.demos, key );
      vm.filtered  = filtered;

    }

  } // end AppController


  // --------------------------------------------------------------------- //
  // --------------------------------------------------------------------- //


  angular
    .module( "app" )
    .factory( "DemoData", DemoData );

  function DemoData() {

    return { get: get };

    function get() {

      var data = [
        {
          name: "binding_events",
          type: "Angular",
          desc: "",
        },
        {
          name: "bookstore",
          type: "Angular",
          desc: "",
        },
        {
          name: "filterable_table",
          type: "Angular",
          desc: "",
        },
        {
          name: "gemstore",
          type: "Angular",
          desc: "",
        },
        {
          name: "multi_transclude_v1.3",
          type: "Angular",
          desc: "",
        },
        {
          name: "multi_transclude_v1.5",
          type: "Angular",
          desc: "",
        },
        {
          name: "dynamic_tabs_using_require",
          type: "Angular",
          desc: "",
        },
        {
          name: "dynamic_tabs_emitting_event",
          type: "Angular",
          desc: "",
        },
        {
          name: "movie_search",
          type: "Angular",
          desc: "",
        },
        {
          name: "toggling_buttons",
          type: "Angular",
          desc: "",
        },
        {
          name: "list_slider",
          type: "HTML/CSS/JS",
          desc: "",
        },
      ];

      return extendWithUrls( data );

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
