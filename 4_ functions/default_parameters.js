function check_tam_giac(a,b,c=3){
    if ((a+b>c) && (a+c>b ) && (b+c>a)){
        return true
    }
}
console.log(check_tam_giac(3,4))