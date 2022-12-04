const Client = require('@line/bot-sdk').Client
const TOKEN = 'channel token'
const User = require('../models/user').User

function post_about(eventObj) {
    let total = User.TotalUser
    console.log(total)
    const client = new Client({
        channelAccessToken: TOKEN
    })
    const replyToken = eventObj.replyToken
    const messages = [
        {
            "type":"text",
            "text":"제2기숙사 학식 알리미 챗봇에 대한 설명입니다."
        },
        // DB에서 누적 사용자 데이터 가져오기
        // {
        //     "type":"text",
        //     "text":"누적 사용자 수 : %num"%total
        // },        
        // // DB에서 오늘의 식단 리뷰 정보 가져오기    
        // {
        //     "type":"text",
        //     "text":"오늘의 식단 리뷰 수 :"
        // },
        // 그 외 정보
        {
            "type":"text",
            "text":"2022 오픈소스SW개발 팀프로젝트로 진행되었으며, 서비스 시작일은 12월 3일입니다."
        },
        {
            "type":"text",
            "text":"더 자세한 명령어에 대한 내용은 'help' 명령어를 이용해주세요."
        }
    ]

    client.replyMessage(replyToken, messages)
}

module.exports.post_about = post_about