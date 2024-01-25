const core = require('@actions/core');
const github = require('@actions/github');
const path = require('path');
const fs = require('fs');
const exec = require('@actions/exec');

function log (message) {
    console.log(message);
}

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
console.log(github, github.workspace);

// const sshUrl = github.context.payload.repository.ssh_url;
// const commit = core.getInput('commit');
// console.log(sshUrl, commit, github.context.payload.after);

fs.readdir(__dirname, function (vendorErr, dir) {
    if (vendorErr) {
        return console.log('Unable to scan directory: ' + vendorErr);
    }
    console.log(dir);
});

// const vendorsPath = path.join(, 'app/code');
// core.get
// fs.readdir(vendorsPath, function (vendorErr, vendors) {
//     if (vendorErr) {
//         return console.log('Unable to scan directory: ' + vendorErr);
//     }
//     vendors.forEach(function (vendor) {
//         console.log(vendor);
//
//         const modulesPath = path.join(vendorsPath, vendor);
//         fs.readdir(modulesPath, function (modulesErr, modules) {
//             if (modulesErr) {
//                 return console.log('Unable to scan directory: ' + modulesErr);
//             }
//             vendors.forEach(function (module) {
//                 console.log(module);
//             });
//         });
//     });
// });
