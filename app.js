'use strict';

const Homey = require('homey');

module.exports = class MyButton extends Homey.App {

  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.log('MyButton has been initialized');
  }

};
