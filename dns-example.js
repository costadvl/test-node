const dns = require('dns');

dns.lookup('google.com', (err, address, family) => {
    console.log(`${address}:${family}`);
});

dns.resolve('google.com','MX', (err, address) =>{
    console.log(address);
});

dns.resolve('google.com','A', (err, address) =>{
    console.log(address);
});

dns.reverse('216.58.214.174', (err, hostname) =>{
    console.log('hostname', hostname);
});
