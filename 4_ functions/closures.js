function counter(){
    var cnt=100;
    return function decrement() {
        cnt = cnt - 1;
        console.log(cnt);
    }
}
const func=counter()
func();
func();
func();
