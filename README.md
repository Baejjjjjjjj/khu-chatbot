# OSS_chatbot
## About the project

**“안녕하세요, 경희대학교 제2기숙사 학식 알리미 챗봇입니다. 무엇을 도와드릴까요?”**

**"Hello, This is the 2nd dormitory cafeteria menu notification chatbot at Kyunghee University. How can I help you?"**

- **기본적인 대화**
- **[help]**
    - help : 사용할 수 있는 명령을 보여드려요.
    - about : about, 서비스 소개 등의 명령을 통해 챗봇에 대한 정보를 알아보세요.
    - 오늘/내일/이번주/(다음주) 메뉴 : ‘[오늘/내일/이번주/다음주] 메뉴 알려줘’를 통해 오늘의 메뉴를 알아봐요.
    - 오늘 학식 리뷰 입력 : “학식 리뷰, 메뉴 리뷰” 등을 이용해 오늘의 리뷰를 남겨봐요.
    - 오늘 학식 리뷰 출력 : “학식 어때, 오늘 메뉴 어때” 등을 통해 오늘의 리뷰를 확인해요.
    - 사용자 메뉴 지정 : “메뉴 지정”을 통해 좋아하는 메뉴를 미리 설정하고 알림을 받아요.
    - 사용자 지정 메뉴 알림
    - 시간 설정
    - 정해진 시간에 메뉴 알림
- “help, 도움말, 명령어” 등 설명을 요구하는 input이 들어왔을 경우 가능한 명령어들을 출력한다.
    
    
    **U : (help와 관련된 단어들)**
    
    **C : 사용할 수 있는 명령을 보여드려요. (위의 명령어 내용 출력)**
    
    
- “about, 서비스 소개” 등의 명령어를 입력하여 봇에 대한 간략한 설명(및 이용자 수)를 볼 수 있다. 사용자 현황 및 현재 누적 리뷰 수, 누적 사용자 수 등
    - input : about, 서비스 소개
    - 동작 :
    
    > 제2기숙사 학식 알리미 챗봇에 대한 설명입니다.
    > 
    
    > 누적 사용자 수 :
    > 
    
    > 오늘의 식단 리뷰 수 :
    > 
    
    > 그 외 설명 : 개발자 소개, 서비스 시작 날짜 등
    > 
    
    **U : (about과 관련된 단어들)**
    
    **C : 소개에 대한 위의 내용 출력**
    
  
- 사용자 입력 : 시작을 알려줄 메세지 입력(혹은 기본적으로 챗봇을 실행시키면 시간에 따라(점심 이전이면 중식, 석식 모두 불러오고, 점심 이후 시간이면 저녁 메뉴만 불러온다.) - 오늘 메뉴, 오늘 메뉴 뭐야, 학식 알려줘 등
    - “오늘” 메뉴를 알려달라는 인풋 → 오늘 메뉴관련 사용자 input 받거나 봇 실행시킬 때 디폴트로 출력
    - “내일” 메뉴 알려달라는 인풋 → 내일 메뉴
    - “이번주” 메뉴 → 이번 주 메뉴
    - (다음 주의 경우 제2기숙사 페이지에 식단이 올라왔을 경우에만 출력 가능 → 만약 다음주 메뉴를 알려달라고 했을 때 아직 db에 해당 요소가 없을 경우 아직 정보가 업로드 되지 않았다는 출력 보내기)
    
    (오늘 메뉴 예시 -  오늘, 내일, 이번 주의 경우 입력만 다르게 하면 똑같은 형식을 사용할 수 있다.)
    
    **U : (사용자 입력 - 예시) [오늘/내일/이번 주] 메뉴 알려줘)**
    
    **C : [오늘/내일/이번 주] 메뉴를 알려드릴게요.**
    
    **~~~ 저장되어 있는 식단 내역을 불러온다.~~~**
    
    

- 오늘 학식 리뷰 입력 : 메뉴 입력 받고 리뷰 출력(메뉴 입력을 받거나 아니면 **오늘 식단에 대한 리뷰만 가능하게** 하거나)
    - 오늘 식단에 대한 리뷰만 작성할 수 있게 하려면 사용자가 “리뷰 작성”, “리뷰 입력” 등의 input을 주거나 혹은, 메뉴 열람 기록이 있다면 특정 시간 이후에 봇이 자동으로 알림을 보내서 오늘 메뉴가 어땠는지에 대한 리뷰를 남기도록 알려준다.
        - 사용자가 입력하는 경우 & 봇이 알림을 주는 경우
            - input 1: 리뷰 작성, 리뷰 등
            - 동작 : 오늘의 메뉴(시간에 따라 현재 메뉴만 확인 가능 - 점심 시간에는 중식만, 저녁 시간에는 석식만)를 보여줌. 사용자가 먹은 메뉴가 맞는지 확인 가능하도록. + 별점과 간단한 리뷰를 적을 수 있게 알려줌. (예 : 오늘의 메뉴는 “돼지고기김치찌개”였네요, 오늘 음식에 대한 후기는 어떤가요?)
            - input 2: 사용자가 메뉴에 대한 별점과 후기를 입력한다.
                - 사용자가 임의로 별점을 조작할 수 없게 사용자 당 한 번의 후기만 작성할 수 있게 할 필요가 있음.
            - 출력 : 오늘의 메뉴에 대한 별점 평균을 보여준다.

**U : (사용자 입력 - 예시) 리뷰 작성)**

**C : 오늘의 메뉴는 “눈꽃치즈돈까스”였네요. 어떠셨나요?** 

**1) 별점 2) 후기 3) 별점+후기 → 이런 선택지를 제시함. 3)을 선택하였을 경우 아래와 같은 내용 진행.**

**별점과 후기로 오늘의 메뉴를 평가해주세요! 우선 별점은요?**

**U : 4.5**

**C : 후기는 어떤가요?**

**U : 안 먹으면 후회합니다. 최근 메뉴 중에 최고!**


- 오늘 학식 리뷰 출력
    - input : 오늘 학식 어때, 오늘 메뉴 어때, 오늘 후기, 점심 후기, 저녁 후기 등
    - 사용자가 학식 리뷰를 보고 싶다는 input을 입력할 경우
    - output : 오늘 메뉴 + 오늘 메뉴의 별점 + 오늘 메뉴에 대한 간단한 후기들
        - 기존의 별점이 없을 경우 후기를 입력하도록 유도하는 메세지 띄우기(”아직 리뷰가 없네요. 오늘 식단의 개척자가 되어볼까요?”)

**U : (사용자 입력 - 예시) 오늘 학식 어때)**

**C : (리뷰가 있을 경우) 오늘의 메뉴는 “눈꽃치즈돈까스”입니다. 다른 사람들의 후기를 확인해볼까요? 평균 별점 4.1점. 간단한 한줄평은 다음과 같습니다. ~~~~**


- 사용자 메뉴 지정
    - input : 메뉴 지정, 메뉴 설정 등
    - 사용자가 특정 메뉴(카레, 돈까스 등)를 입력할 수 있도록 한다.
    - output : 현재까지 해당 사용자가 등록한 메뉴들을 볼 수 있도록 한다. 새로 추가된 메뉴의 경우에는 (”new! 돈까스(이)가 등록되었습니다.”)라는 메세지를 보내줌.
    

**U : (사용자 입력 - 예시) 메뉴 지정)**

**C : 원하시는 메뉴를 입력해주세요!(간단명료하게 음식을 지정할 수록 더 많은 추천을 받으실 수 있습니다. 눈꽃치즈돈까스(X) → 돈까스, 튀김카레라이스(X) → 카레)**

**U : 돈까스**

**C: “돈까스”를 좋아하는 메뉴로 지정하시겠습니까? 1) 예, 2) 아니오**

**U: 1**

**C: “돈까스”가 등록되었습니다.**


- 사용자가 지정한 메뉴 나올 시에 알림
    - 사용자가 지정한 메뉴가 나왔을때(지정한 단어가 포함되어 있는 메뉴(*** 단, 김치, 단무지와 같은 경우 매번 기본 반찬으로 나오기 때문에 이를 구분할 방법 필요함**)가 나왔을 때 특정한 시간을 지정하여(중식이라면 오전 9시, 석식이라면 오후 3,4시 정도) 사용자에게 알림을 준다.
    - **“딩동! 지정하신 메뉴가 등장했어요. 오늘의 메뉴는 “눈꽃돈까스”입니다! 어서 가서 먹어볼까요?”**


- 시간 설정(★)
    - 오늘의 식단을 언제 알림 받을 것인지를 입력받는다.
    - input : 시간 설정, 알림 설정 등
    - 동작 : 대표적으로 지정할 수 있는 옵션을 제시한다.
        - **1) 오전 9시 2) 오후 1시 3) 등등 4) 사용자 입력**
            - 사용자가 4)를 선택하였을 경우 직접 시간을 입력할 수 있도록 한다.(00:00과 같은 형식으로 시간을 지정해주세요)
    - output : 사용자가 선택한 시간을 알려줌.
        - **“좋아요, 그럼 매일 “9시”에 오늘의 식단을 알려드릴게요.”**
    
    
- (★ 이후 실행) → 정해진 시간에 메뉴 알림
    - 사용자가 지정한 시간이 되었을 경우 오늘의 메뉴에 대한 메세지를 보낸다. 시간대에 따라 점심 이전일 경우 점심과 저녁 메뉴 모두 보내주고, 저녁 시간일 경우 저녁 메뉴만 보내준다.
    - “**딩동! 오늘의 메뉴는 “눈꽃돈까스”입니다! 어서 가서 먹어볼까요?”**
    
**## Getting Started ( Installation )**

**## Usage**

You can use demo chatbot at this page.

**## Roadmap**

- [ ] Add new feature

**## Contributing**

@3un0ia
@Baejjjjjjjj
@HeySueng
@InseopSeo
@jamm-king
@LaonMoon

**## License**

Apache License 2.0

**##Contact**

laonm@khu.ac.kr

