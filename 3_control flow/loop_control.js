inner:
for (let i=0;i<5;i++){
    trong:
    for (let j=6;j<10;j++){
        if (j%3==0)continue inner;
        if (j%4==0) break trong;
        console.log(i,j)
    }
}