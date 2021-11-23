let numbers = [] // 각 회차의 로또번호 추출시 사용
let mycount = -1 // 몇번 째 div안에 로또번호 출력시킬지 정하는 변수
let drwNumbers = [] // 중복된 회차 찾음
let lotto_colors = ['yellow', 'blue', 'red', 'pink', 'green'] //색깔 배열

                    // 텍스트박스에 넣은숫자가 매개변수로
function createLottoNum(drwNum) { // 로또 생성함수
    if ( isNaN(drwNum)) //회차중복방지
    {
        alert("이건 숫자가 아닙니다.")
        return
    }
    if (drwNum.value == ''){ //공백반응 방지
        alert('공백')
        return
    }
    for (let item of drwNumbers){
        if (item ==drwNum) {
            alert("중복된 회차")
            return
        }
    }
    for (let i = 0; i < 7; i++) { //번호중복방지
        let mynum = Math.floor(Math.random() * 45) + 1
        if (i > 0) { //하나라도 데이터가 있다면 중복체크
            if (numbers.indexOf(mynum) != -1) {
                i--
                continue
                // i--하고 continue -> 다시 원래의 i번째 수행 가능
            }
        }
        numbers.push(mynum)
    }
    let temp = new lotto(drwNum,numbers[0],numbers[1],numbers[2],numbers[3],numbers[4],numbers[5],numbers[6])
    lottos.push(temp)
    numbers = [] //numbers 배열 초기화
    drwNumbers.push(drwNum) //drwNum : 회차정보 // 회차정보저장함
    mycount++
}

function setBackgroundColor(num) { //배경색깔 세팅

}

function setFontColor(num) {

}

//function() {} = 
// () => {}
window.onload = () => {
    let start_lotto = document.querySelector('#create_lotto') //로또생성버튼 
    let drwNum = document.querySelector('#drwNum') //회차정보 입력하는 textbox (input태그)
    start_lotto.onclick = () =>{ //drwNum 위로 땡겨줬음
        createLottoNum(drwNum.value)
        let mylottos
        switch (mycount%3) { //mycount3으로나눈값
            case 0:
                mylottos = document.querySelectorAll('#one>.one') //id가 one인 태그의 자손이면서 class명이 one인 태그들

                break;
            case 1:
                mylottos = document.querySelectorAll('#two>.two') //id가 one인 태그의 자손이면서 class명이 one인 태그들

                break;
            case 2:
                mylottos = document.querySelectorAll('#three>.three') //id가 one인 태그의 자손이면서 class명이 one인 태그들

                break;
        
            default:
                break;
        }
        mylottos[0].innerText = lottos[mycount].drwNum + "회차" 
        mylottos[1].innerText = lottos[mycount].one 
        mylottos[2].innerText = lottos[mycount].two  
        mylottos[3].innerText = lottos[mycount].three 
        mylottos[4].innerText = lottos[mycount].four 
        mylottos[5].innerText = lottos[mycount].five 
        mylottos[6].innerText = lottos[mycount].six 
        mylottos[7].innerText = lottos[mycount].bns 
    }
    let all_random = document.querySelector('#all_random')
    all_random.onclick = () => {
        for (let i= 1; i<8; i++ ){ //[1]부터 [7]까지만 색칠
            document.querySelectorAll('#one>.one')[i].style.backgroundColor = lotto_colors[Math.floor(Math.random()*5)]
            document.querySelectorAll('#two>.two')[i].style.backgroundColor = lotto_colors[Math.floor(Math.random()*5)]
            document.querySelectorAll('#three>.three')[i].style.backgroundColor = lotto_colors[Math.floor(Math.random()*5)]
        }

    }
    let case_by_case_random = document.querySelector('#case_by_case_random')
    let same_color = document.querySelector('#same_color')
    let number_by_number = document.querySelector('#number_by_number')
    let black_and_white = document.querySelector('#black_and_white')

}