function aa(pp) {
    console.log(pp);
    pp();
}
const bb = (ww) => {
    console.log(ww);
}

aa(function cc(){ console.log('cc'); });
bb(()=>{});