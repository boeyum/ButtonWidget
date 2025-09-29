'use strict';

const Homey = require('homey');

let kode = false;
module.exports = class ButtonDevice1 extends Homey.Device {

  /**
   * onInit is called when the device is initialized.
   */
  async onInit() {
        const id = this.getData('id');
        const settings = this.getSettings();

        this.setCapabilityValue('onoff', false);
        this.registerCapabilityListener("onoff", async (value) => {
            kode = value;
        });
  }

  /**
   * onAdded is called when the user adds the device, called just after pairing.
   */
    async onAdded() {
        const settings = this.getSettings();
        this.log('Button Device ' + settings.name + ' has been added');
  }

  /**
   * onSettings is called when the user updates the device's settings.
   */
  async onSettings({ oldSettings, newSettings, changedKeys }) {
      const settings = this.getSettings();
      this.log('Button Device ' + settings.name + ' where changed');
  }

  /**
   * onRenamed is called when the user updates the device's name.
   * This method can be used this to synchronise the name to the device.
   */
  async onRenamed(name) {
      const settings = this.getSettings();
      this.log('Button Device ' + settings.name + ' wwas renamed');
  }

  /**
   * onDeleted is called when the user deleted the device.
   */
  async onDeleted() {
      const settings = this.getSettings();
      this.log('Button Device ' + settings.name + ' has been deleted');
  }

};
