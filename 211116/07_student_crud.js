function Mystudent(name, age, number) {
    this.name = name
    this.age = age
    this.number = number
    this.regist = function () {
        //이거써서 학생 등록된거 보여주려고함
        alert(this.name + '학생등록 완료!')
    }
}

/* window - DOM객체의 일종
    DOM은 Document Object Model
    window는 윈도우(웹브라우저에서 이용하는 창)
    window.onload : body태그에 있는 본문들이 다 불러와졌을 경우 호출됨
*/

window.onload = function () { // head태그 쪽에 적어도 body에 있는 내용들이 다불러와진 뒤에 적는거라 에러가없음

    // name, age, number (input)
    let m_name = document.querySelector('#name')
    let m_age = document.querySelector('#age')
    let m_number = document.querySelector('#num')

    // button
    let m_create = document.querySelector('#create')
    let m_read = document.querySelector('#read')
    let m_update = document.querySelector('#update')
    let m_delete_ = document.querySelector('#delete_')
    // 변수명으로 delete안됨. js자체에서 delete라는 키워드 이미사용중
    let m_consolelog = document.querySelector('#consolelog')

    let students = []
    m_create.onclick = function () {
        for (let item of students) //중복 체크 및 조치
        {
            if (item.number == m_number.value) { //배열에저장된 아이템의 번호와 입력한 번호값이 같을때
                alert('중복 학생 존재')
                return // 더이상 학생추가 수행x
            }
        }
        // 중복이 아닌 경우 아래 코드 수행
        let tempStudent = new Mystudent(m_name.value, m_age.value, m_number.value)
        tempStudent.regist()
        students.push(tempStudent)
        console.log(students)
    }

    m_read.onclick = function () {
        for (let item of students) {
            if (m_number.value == item.number) {
                alert(`${item.number}번 학생은 ${item.name}입니다`)
                return
            }
        }
    }
    m_update.onclick = function () {
        for (let item of students) {
            if (m_number.value == item.number) {
                item.name = m_name.value
                item.age = m_age.value
            }
        }
    }

    m_delete_.onclick = function () 
    {
        for (let i=0; i<students.length; i++) {
            if (m_number.value == students[i].number)
            students.splice(i,1) //i번째꺼 하나 뺀다.
        }
        
    }

    m_consolelog.onclick = function () {
        console.log(students)
        
    }
}