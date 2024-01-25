const core = require('@actions/core');
const path = require('path');
const fs = require('fs');

// Read inputs
const allowedVendors = core.getInput('allowed-vendors', { required: true })
    .split(/[\r\n]/)
    .map(input => input.trim())
    .filter(input => input !== '');
const allowedModules = core.getInput('allowed-modules', { required: true })
    .split(/[\r\n]/)
    .map(input => input.trim())
    .filter(input => input !== '');
console.log(allowedVendors, allowedModules);

const vendorsPath = path.join(__dirname, 'app/code');

fs.readdir(vendorsPath, function (vendorErr, vendors) {
    if (vendorErr) {
        return console.log('Unable to scan directory: ' + vendorErr);
    }
    vendors.forEach(function (vendor) {
        console.log(vendor);

        const modulesPath = path.join(vendorsPath, vendor);
        fs.readdir(modulesPath, function (modulesErr, modules) {
            if (modulesErr) {
                return console.log('Unable to scan directory: ' + modulesErr);
            }
            vendors.forEach(function (module) {
                console.log(module);
            });
        });
    });
});
