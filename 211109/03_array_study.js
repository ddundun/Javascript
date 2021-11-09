// 배열에 요소를 추가 할 때,
// 단순히 인덱스를 적어서 추가 할 수도 있지만,
// 맨 끝에 값을 추가하고 싶을 때 사용하는 방법

let aa = [1,2,'삼',4]
aa.push('오5') //맨 끝에 값을 추가하는 방법1
for (let item of aa)
    console.log(item)

aa[aa.length] = 6 // 맨 끝에 값을 추가하는방법2

for (let item of aa)
    console.log(item)

aa[10] = 10
console.log(aa) // [6]~ [9] : empty
console.log(aa.length) // 길이가 11로 변함\


// 특정 요소 제거하기
aa.splice(0,1) // 가장 첫번째 것 하나 제거
console.log("------- 0번째 것 지움 --------")
for (let item of aa)
    console.log(item)

aa.splice(1,3) //두번째(1번째부터) 시작해서 3개지움 
console.log("------- 3개 지운 뒤 --------")
for (let item of aa)
    console.log(item)

// index(위치) 모르지만, 특정 위치의 값 지우고 싶을 때
// 만약 숫자 6을 지우고 싶은 경우

//indexOf : 특정 값의 인덱스 값을 구함
const myindex= aa.indexOf(6)
aa.splice(myindex,1)

console.log("------- 6 지운 뒤 --------")
for (let item of aa)
    console.log(item)

// 특정 요소를 추가(특정 위치에)/ 특정위치에 값 추가
// 뭔가 추가하기 위한 splive인 경우, 두번째 매개변수(=파라메터)에 0을 집어넣자.
aa.splice(2,0,1000) //2번째에다 1000추가
console.log("------- [2]번째 인덱스에 1000추가 --------")
for (let item of aa)
    console.log(item)