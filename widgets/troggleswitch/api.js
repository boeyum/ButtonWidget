'use strict';

module.exports = {
    async apiWidgetPost({ homey, query }) {
        const selectedDeviceId = query.deviceId;
        const checkedmode = query.checked;
        let state = false;
        let check = false;

        if (checkedmode.localeCompare('yes') == 0) {
            check = true;
        }
        const driver = homey.drivers.getDriver("buttondev");
        for (const device of await driver.getDevices()) {
            if (selectedDeviceId === device.getId()) {
                const selectedDevice = device;
                state = selectedDevice.getCapabilityValue('onoff');
                if(state && !check) {
                    selectedDevice.setCapabilityValue('onoff', false);
                    return false;
                } else if(!state && check) {
                    selectedDevice.setCapabilityValue('onoff', true);
                    return true;
                } else {
                    return check;
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
