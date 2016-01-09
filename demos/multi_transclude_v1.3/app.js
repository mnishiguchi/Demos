(function() {

  var app = angular.module( "app", [] );


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular
    .module( "app" )
    .controller( "AppController", AppController );

  AppController.$inject = [ ];
  function AppController() {}


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  app.directive( "siteLayout", siteLayout );

  siteLayout.$inject = [
    "MultiTransclude"
  ];
  function siteLayout( MultiTransclude ) {

    var directive = {
      scope: {},
      transclude: true,
      templateUrl: "site-layout.html",
      link: link
    };

    return directive;


    /**
     * Run the custom transclude function for multi-transclude.
     * https://docs.angularjs.org/api/ng/service/$compile
     * @param  scope        The scope to be used by the directive for registering watches.
     * @param  element      The element where the directive is to be used.
     * @param  attrs         Normalized list of attributes declared on this element shared between all directive linking functions.
     * @param  ctrl         The directive's required controller instance(s)
     * @param  transcludeFn  A transclude linking function pre-bound to the correct transclusion scope.
     */
    function link( scope, element, attrs, ctrl, transcludeFn ) {

      MultiTransclude.perform( element, transcludeFn );

    }

  } // end siteLayout


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  /**
   * Abstract a custom transclusion logic.
   */
  app.factory( "MultiTransclude", MultiTransclude );

  function MultiTransclude() {

    var service = {
      perform: perform
    }

    return service;

    /**
     * Perform multi-transclude.
     * @param  element
     * @param  transcludeFn
     */
    function perform( element, transcludeFn ) {

      transcludeFn( function( cloneElements ) {

        angular.forEach( cloneElements, function( cloneEl ) {

          // Ignore text nodes (nodeType: 3)
          // http://www.w3schools.com/dom/prop_element_nodetype.asp
          if ( cloneEl.nodeType !== 3 ) {

            // Read the value of transclude-to attribute in each clone element.
            var transcludeId = cloneEl.attributes[ "transclude-to" ].value;

            // Find the destination element by transcludeId.
            var destAttr    = "[transclude-id='" + transcludeId + "']";
            var destElement = element.find( destAttr );  // NOTE: Require jQuery

            // if destination is found, append this clone element to that destination element.
            if ( destElement.length ) {
              destElement.append( cloneEl );
            }
            // If target is missing or transclude is invalid, clean up and throw error.
            else {
              cloneEl.remove();
              throw new Error( "Target not found. Please specify the correct transclude-to attribute." );
            }
          } // end if
        });
      });
    }

  } // end MultiTransclude


})();

