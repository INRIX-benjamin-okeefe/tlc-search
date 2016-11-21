define(function (require) {
    'use strict';

    const
        ModuleView = require('common/platform/ModuleView');

    /**
     * This is the application's root view, which is used for any UI control creation and handling.
     *
     * Note that functions defined in the controller may be called via this.getController()
     * Functions declared in this view class may also be called from the controller.
     * Functions designed to be called from the controller must return a Promise.
     *
     * @see Application Lifecycle {@link https://insidetrack.opencar.com/documentation/2.2/lifecycle}
     * @see Views & Controllers {@link https://insidetrack.opencar.com/documentation/2.2/controllers_and_views}
     * @see Promises {@link https://insidetrack.opencar.com/documentation/2.2/promises}
     */
    return class extends ModuleView {

        /**
         * Called prior to the application being displayed.
         * Executes in parallel to the module controller's init().
         * Controller and View are not yet linked.
         *
         * @async Must return a promise
         * @override Must call super.init (ideally chaining from its promise)
         * @returns {Promise}
         */
        // init () {
        //     return super.init().then(() => {
        //         Log.debug("view init()");
        //     });
        // }

        /**
         * Controller and View are now linked
         *
         * @async
         * @override super.beforeStart
         * @returns {Promise}
         */
        // beforeStart () {
        //     return super.beforeStart().then(() => {
        //         Log.debug("view beforeStart()");
        //     });
        // }

        /**
         * View is transitioned in and elements are visible.
         *
         * @async
         * @override super.started
         * @returns {Promise}
         */
        // started () {
        //     return super.started().then(() => {
        //         Log.debug("view started()");
        //     });
        // }

        /**
         * Called prior to pausing the application and placing in background
         *
         * @async
         * @override super.beforePause
         * @returns {Promise}
         */
        // beforePause () {
        //     return super.beforePause().then(() => {
        //         Log.debug("view beforePause()");
        //     });
        // }

        /**
         * Application is paused and is now paused in background
         *
         * @async
         * @override super.paused
         * @returns {Promise}
         */
        // paused () {
        //     return super.paused().then(() => {
        //         Log.debug("view paused()");
        //     });
        // }

        /**
         * Called prior to being reactivated from being paused in background
         *
         * @async
         * @override super.beforeResume
         * @returns {Promise}
         */
        // beforeResume () {
        //     return super.beforeResume().then(() => {
        //         Log.debug("view beforeResume()");
        //     });
        // }

        /**
         * Application is reactivated to foreground
         *
         * @async
         * @override super.resumed
         * @returns {Promise}
         */
        // resumed () {
        //     return super.resumed().then(() => {
        //         Log.debug("view resumed()");
        //     });
        // }

        /**
         * Called after the application has been paused and fully transitioned out of view,
         * but prior to the module being stopped and removed from runtime.
         *
         * @async
         * @override super.beforeStop
         * @returns {Promise}
         */
        // beforeStop () {
        //     return super.beforeStop().then(() => {
        //         Log.debug("view beforeStop()");
        //     });
        // }

    };
});
