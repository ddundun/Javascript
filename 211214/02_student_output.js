document.addEventListener('DOMContentLoaded', function () {
    // alert(new Student('이진주','여',1))
    // .toString안해도 되네;
    const name = document.querySelector('#name')
    const gender = document.querySelector('#gender')
    const bunho = document.querySelector('#bunho')

    const print = document.querySelector('#print')
    const reset = document.querySelector('#reset')
    const print_order_by = document.querySelector('#print_order_by')
    const information = document.querySelector('#information')
    // information에 학생정보넣을거임/? 까먹음

    function resetInfo() {
        information.innerHTML = '' // 화면 reset해주기
    }
    reset.addEventListener('click',function () {
        resetInfo() //화면리셋
        students = [] //배열 리셋
    })
    print.addEventListener('click',function () {
        const student = new Student(name.value,gender.value,bunho.value)
        let newStudentInfo = document.createElement('h1')
        //h1만들기~ div안에 생김~~
        newStudentInfo.textContent = student.toString()

        if(student.성별 =="남") {
            newStudentInfo.style.backgroundColor ='springgreen'
            newStudentInfo.style.color = 'blue'
        }
        else if(student.성별 =="여") {
            newStudentInfo.style.backgroundColor ='black'
            newStudentInfo.style.color = 'pink'
        }
        else {
            alert('성별입력 잘못함ㅎ')
        }
        information.appendChild(newStudentInfo)
    })
    print_order_by.addEventListener('click',function () {
        // findIndex : indexOf와 유사, 주로 객체배열에서 쓰임
        // 인덱스를 찾는데, 콜백함수 이용함
        // 이 함수가 true 리턴하는 조건을 만족하는 부분의 인덱스값 리턴해줌 
        const idx = students.findIndex(
            function (item) {
                return item.번호 === Number(bunho.value) 
                // input태그의 value와 번호가 불일치하는 경우 -> idx= -1 
            }
        )
        if (idx != -1) {
            alert('번호 중복')
            return 
        }
        resetInfo() //기존에 있던 것들 싹 지움
        students.push(new Student(name.value,gender.value,Number(bunho.value))) //배열에 저장

        //Sort, 콜백함수이용 -> 값이 양수, 0, 음수인가에 따라 정렬
        students.sort(function (a,b) {
            return a.번호 -b.번호
        })

        // for(const item of students) {

        // }
        for (let i = 0; i<students.length; i++) {
            let newStudentInfo = document.createElement('h1')
            newStudentInfo.textContent = students[i].toString()

            if(student.성별 =="남") {
                newStudentInfo.style.backgroundColor ='springgreen'
                newStudentInfo.style.color = 'blue'
            }
            else 
                {newStudentInfo.style.backgroundColor ='black'
                newStudentInfo.style.color = 'pink'
            }
            information.appendChild(newStudentInfo)
        }
    })
})