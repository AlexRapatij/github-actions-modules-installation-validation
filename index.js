const core = require('@actions/core');
const github = require('@actions/github');
const path = require('path');
const fs = require('fs');

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

const sshUrl = github.context.payload.pull_request.ssh_url;
const commit = core.getInput('commit');
console.log(sshUrl, commit, github.context.payload.after);

const gitCloneCmd    = `git clone ${sshUrl} tmp`;
const gitCheckoutCmd = `git -C testcafe checkout ${commit}`;

log(gitCloneCmd);
log(`cd tmp`);
log(`git checkout ${commit}`);

fs.readdir(path.join(__dirname, 'tmp/app/code'), function (vendorErr, dir) {
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
