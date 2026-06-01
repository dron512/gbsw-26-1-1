const [r, g, ...qq] = ["red", "green", "blue",
            'asdf', () => { console.log('화살표') }];

console.log(r);
console.log(g);
// console.log(b);

// console.log(d);

console.log(qq[0]);
console.log(qq[1]);
console.log(qq[2]);

qq[2]();