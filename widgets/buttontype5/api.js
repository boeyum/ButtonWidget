'use strict';

module.exports = {
    async apiWidgetPost({ homey, query }) {
        const selectedDeviceId = query.deviceId;

        const driver = homey.drivers.getDriver("buttondev");
        for (const device of await driver.getDevices()) {
            if (selectedDeviceId === device.getId()) {
                const selectedDevice = device;
                let state = selectedDevice.getCapabilityValue('onoff');
                if (state) {
                    selectedDevice.setCapabilityValue('onoff', false);
                } else {
                    selectedDevice.setCapabilityValue('onoff', true);
                }
            }
        }
    },
};

