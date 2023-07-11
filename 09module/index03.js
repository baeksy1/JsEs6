
let result=0;
//함수 두개 내보내기
function add(x){
    result+=x;
}
function minus(x){
    result-=x;
}
//key방식 or 향상된 리터럴
//default방식으로 객체 내보내기~
export default {a:add,b:minus};