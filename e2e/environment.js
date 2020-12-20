/* eslint-disable import/no-extraneous-dependencies */
const { init: initExpo } = require('detox-expo-helpers');
const { DetoxCircusEnvironment, SpecReporter, WorkerAssignReporter } = require('detox/runners/jest-circus');

class CustomDetoxEnvironment extends DetoxCircusEnvironment {
  constructor(config) {
    super(config);

    // @NOTE: This is a patch that was added here
    // https://github.com/jjborie/detox-expo-helpers/commit/c34561b7801fc0d5794336a47773a9f842cb5989
    initExpo();

    // Can be safely removed, if you are content with the default value (=300000ms)
    this.initTimeout = 300000;

    // This takes care of generating status logs on a per-spec basis. By default, Jest only reports at file-level.
    // This is strictly optional.
    this.registerListeners({
      SpecReporter,
      WorkerAssignReporter,
    });
  }
}

module.exports = CustomDetoxEnvironment;