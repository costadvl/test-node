const { exec, spawn } = require('child_process');

// it a good choice if the return is not big, since it buffers the output
// exec('find . -type f | wc -l', (err, stdout, stderr) => {
//     if(err) {
//         console.error(`exec error: ${err}`);
//         return;
//     }

//     console.log(`Number of files ${stdout}`);
// });

// const child = spawn('find', ['.', '-type', 'f'], {
//     stdio: 'inherit'
// });

// const child2 = spawn('find . -type f | wc -l', {
//     stdio: 'inherit',
//     shell: true,
//     cwd: '/c/Users'
// });

const child3 = spawn('echo %PATH%', {
    stdio: 'inherit',
    shell: true,
    env: {}
});
