(function() {

  /**
  * Manage the ModalService within the application.
  */
  angular
    .module( "app" )
    .service( "ModalService", ModalService );

  function ModalService( $rootScope, $q ) {

    // Represent the currently active modal window instance.
    var currentDialog = {

      deferred: null,
      params:   null

    };

    // Return the public API.
    return {

      open:      open,
      params:    params,
      proceedTo: proceedTo,
      reject:    reject,
      resolve:   resolve

    };


    // ---
    // PUBLIC METHODS
    // ---


    /**
     * Open a modal dialog of the given type, with the given params.
     * --
     * If a modal window is already open, we can optionally pipe the response
     * of the new modal window into the response of the current modal window.
     * Otherwise, the current modal will be rejected before the new modal window is opened.
     * @param  type
     * @param  params
     * @param  pipeResponse
     */
    function open( type, params, pipeResponse ) {

      // Stash the previous deferred before working on the new one.
      var previousDeferred = currentDialog.deferred;

      // Set up the new modal instance properties.
      currentDialog.deferred = $q.defer();
      currentDialog.params   = params;

      // Optionally, we are going to pipe the new window response into
      // the previous window's deferred value.
      if ( previousDeferred && pipeResponse ) {

        currentDialog.deferred.promise
          .then(
            previousDeferred.resolve,
            previousDeferred.reject
          );

      // Immediately reject the current window if we need not pipe the previous response.
      } else if ( previousDeferred ) {

        previousDeferred.reject();

      }

      // Since the service object doesn't have any direct reference to the DOM,
      // we use events to communicate with a directive that will help manage
      // the DOM elements that render the modal windows.
      $rootScope.$emit( "ModalService.open", type );

      return currentDialog.deferred.promise;
    }


    /**
     * Return the params associated with the current params.
     */
    function params() {

      return currentDialog.params || {};

    }


    /**
     * Open a modal window with the given type and pipe the new window's response
     * into the current window's response without rejecting it outright.
     * --
     * This is just a convenience method for .open() that enables the
     * pipeResponse flag; it helps to make the workflow more intuitive.
     */
    function proceedTo( type, params ) {

      return open( type, params, true );

    }


    /**
     * Reject the current modal with the given reason.
     */
    function reject( reason ) {

      if ( ! currentDialog.deferred ) {
        return;
      }

      currentDialog.deferred.reject( reason );
      clearAttrs();

      // Tell the modal directive to close the active modal window.
      $rootScope.$emit( "ModalService.close" );

    }


    /**
     * Resolve the current modal with the given response.
     */
    function resolve( response ) {

      if ( ! currentDialog.deferred ) {
         return;
      }

      currentDialog.deferred.resolve( response );
      clearAttrs();

      // Tell the modal directive to close the active modal window.
      $rootScope.$emit( "ModalService.close" );

    }


    /**
     * Clear the deferred and params attributes.
     */
     function clearAttrs() {

        currentDialog.deferred = null;
        currentDialog.params   = null;

     }


  } // end ModalService

})(); // end module
