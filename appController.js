define(function (require) {
    'use strict';

    const
        ModuleController = require('common/platform/ModuleController');

    /**
     * This is the application controller, which holds the application logic in an MVC architecture.
     * The corresponding application view is used for any UI control handling.
     *
     * You may choose to not use a controller and place your application logic in the view code space.
     * If you do so, you may simply leave this file untouched, or remove it from your application folder
     * and remove the "controller" line from your app.manifest file.
     *
     * Note that any functions of your own that you define within this ModuleController space
     * may be called by the view as this.getController().yourControllerFunction()
     *
     * Any functions created in the view may be called from here with this.getView().yourViewFunction()
     *
     * Functions called between "view" and "controller" must return a Promise.
     *
     * @see Application Lifecycle {@link https://insidetrack.opencar.com/documentation/2.2/lifecycle}
     * @see Views & Controllers {@link https://insidetrack.opencar.com/documentation/2.2/controllers_and_views}
     * @see Promises {@link https://insidetrack.opencar.com/documentation/2.2/promises}
     */
    return class extends ModuleController {

        /**
         * Called prior to the application being displayed.
         * Executes in parallel to the module view's init().
         * Controller and View are not yet linked
         * Return void, or a Promise to resolve for deferred completion.
         *
         * @async Must return a promise
         * @override Must call super.init (ideally chaining from its promise)
         * @returns {Promise}
         */
        // init () {
        //     return super.init().then(() => {
        //         Log.debug("controller init()");
        //     });
        // }

        /**
         * Called prior the application being displayed, but after both the module controller's init()
         * and module view's init() are complete.
         *
         * @async
         * @override super.beforeStart
         * @returns {Promise}
         */
        // beforeStart () {
        //     return super.beforeStart().then(() => {
        //         Log.debug("controller beforeStart()");
        //     });
        // }

        /**
         * Called after the application has been transitioned fully into activation and view.
         *
         * @async
         * @override super.started
         * @returns {Promise}
         */
        // started () {
        //     return super.started().then(() => {
        //         Log.debug("controller started()");
        //     });
        // }

        /**
         * Called prior to the application being paused.
         *
         * @async
         * @override super.beforePause
         * @returns {Promise}
         */
        // beforePause () {
        //     return super.beforePause().then(() => {
        //         Log.debug("controller beforePause()");
        //     });
        // }

        /**
         * Called after the module has been fully transitioned out of activation.
         *
         * @async
         * @override super.paused
         * @returns {Promise}
         */
        // paused () {
        //     return super.paused().then(() => {
        //         Log.debug("controller paused()");
        //     });
        // }

        /**
         * Called prior to an application being resumed, before it's transitioned into activation.
         *
         * @async
         * @override super.beforeResume
         * @returns {Promise}
         */
        // beforeResume () {
        //     return super.beforeResume().then(() => {
        //         Log.debug("controller beforeResume()");
        //     });
        // }

        /**
         * Called after the module has been fully transitioned into activation.
         *
         * @async
         * @override super.resumed
         * @returns {Promise}
         */
        // resumed () {
        //     return super.resumed().then(() => {
        //         Log.debug("controller resumed()");
        //     });
        // }

        /**
         * Called after the application has been fully transitioned out of activation,
         * but prior to the module being stopped and removed from runtime.
         *
         * @async
         * @override super.beforeStop
         * @returns {Promise}
         */
        // beforeStop () {
        //     return super.beforeStop().then(() => {
        //         Log.debug("controller beforeStop()");
        //     });
        // }

    };
});
