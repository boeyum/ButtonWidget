'use strict';

const Homey = require('homey');

module.exports = class ButtonDriver1 extends Homey.Driver {

    /**
    * onInit is called when the driver is initialized.
    */
    async onInit() {
        this.log('ButtonDriver has been initialized');
    }


    async onPair(session) {
        var devices = [];

        session.setHandler("get_devices", async (data, callback) => {

            var deviceDescriptor = {
                "name": data.deviceName,
                "data": {
                    "id": data.deviceName,
                },
                "settings": {
                    "name": data.deviceName,
                    "device_id": data.deviceName,
                    "deviceName": data.deviceName,
                },
                "capabilities": ["onoff"]
            };
            devices.push(deviceDescriptor);
            session.emit("found", null);
        });

        session.setHandler("list_devices", function (data, callback) {
            return devices;
        });
    }

    async onPairListDevices() {
        return [];
    }

};
