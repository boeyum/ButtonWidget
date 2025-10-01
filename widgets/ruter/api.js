'use strict';

module.exports = {
    async apiWidgetPost({ homey, query }) {
        const selectedDeviceId = query.deviceId;
        let state = false;

        const driver = homey.drivers.getDriver("buttondev");
        for (const device of await driver.getDevices()) {
            if (selectedDeviceId === device.getId()) {
                const selectedDevice = device;
                state = selectedDevice.getCapabilityValue('onoff');
                if (state) {
                    selectedDevice.setCapabilityValue('onoff', false);
                    return false;
                } else {
                    selectedDevice.setCapabilityValue('onoff', true);
                    return true;
                }
            }
        }
    },
    async apiWidgetGet({ homey, query }) {
        const selectedDeviceId = query.deviceId;
        let state = false;

        const driver = homey.drivers.getDriver("buttondev");
        for (const device of await driver.getDevices()) {
            if (selectedDeviceId === device.getId()) {
                const selectedDevice = device;
                state = selectedDevice.getCapabilityValue('onoff');
                return state;
            }
        }
    },
};
