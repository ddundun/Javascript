//$(funtion()) : 화면이 다 불러와진 뒤에 함수 실행
// = $().ready(funtion(){}) 

$(function () {
            const sounds = $('audio')
            const pads = $(".pads div")
            const visual = $('.visual')
            const title = $('.title')
            const colors = ['red', 'orange', 'yellow', 'springgreen', 'skyblue', 'blue']

            sounds.each(function (index, soundFile) {
                soundFile.onended = function () {
                    visual.text('')
                    title.text('')
                }
            })
            pads.each(function (index, pad) {
                    $(pad).on('click', function () {
                            sounds.each(function (index, soundFile) {
                                soundFile.pause()
                            })
                            // 가장 첫번째꺼 클릭하면 1.mp3재생
                            if (sounds[index]) {
                                sounds[index].currentTime = 0
                                sounds[index].play()
                                const strArray = sounds[index].src.split("sound/")
                                title.text(strArray[1]) //1.mp3, 2.mp3등의 제목 찍힘
                            }
                        })
                    })
            const createBubbles = function (index) {
                visual.text('')
                const bubble = $('<div></div>')
                visual.append(bubble) //visual에 bubble 삽입
                bubble.css('background',colors[index]).css('top','300px').css('animation','')
            }
            })
