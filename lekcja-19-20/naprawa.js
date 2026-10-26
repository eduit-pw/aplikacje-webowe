function limit(v) { const n=Number(v); return !Number.isNaN(n)?n:10; }
for(const v of [undefined,'','0','20','21','abc',['2','3']]) console.log(limit(v));
