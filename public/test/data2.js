/*
ethiopia,0
kenya,1
tanzania,2
yemen,3
india,4
indonesia,5
papua,6
mexico,7
cuba,8
jamaica,9
guatemala,10
panama,11
hawaii,12
colombia,13
brazil,14
*/

const qnaList = [
  {
    q: "Q1. 나는 평소에",
    a: [
      { answer: "커피를 즐겨 마신다.", type: [0, 2, 4, 5, 7, 8, 9, 12] },
      { answer: "커피를 자주 마시지 않는다.", type: [1, 3, 6, 10, 11, 13, 14] },
    ],
  },
  {
    q: "Q2. 나는 커피를 마실 때",
    a: [
      { answer: "주로 아이스를 마신다.", type: [3, 4, 7, 8, 14] },
      {
        answer: "주로 따뜻한 커피를 마신다.",
        type: [0, 1, 2, 5, 6, 9, 10, 11, 12, 13],
      },
    ],
  },
  {
    q: "Q3. 내가 좋아하는 커피의 향은",
    a: [
      { answer: "고소한 향", type: [3, 4, 5, 6, 7, 8, 10, 14] },
      { answer: "산뜻한 향", type: [0, 1, 2, 9, 11, 12, 13] },
    ],
  },
  {
    q: "Q4. 내가 좋아하는 커피의 맛은",
    a: [
      { answer: "쓴맛을 좋아한다.", type: [3, 5, 7, 9, 10] },
      {
        answer: "쓴맛을 좋아하지 않는다.",
        type: [0, 1, 2, 4, 6, 8, 11, 12, 13, 14],
      },
    ],
  },
  {
    q: "Q5. 내가 좋아하는 커피의 바디감은",
    a: [
      {
        answer: "한 모금 마셨을 때 밀도 있고 묵직한 커피가 좋다.",
        type: [1, 2, 3, 5, 6, 8, 9, 10, 12, 13],
      },
      { answer: "가벼운 느낌의 커피가 좋다.", type: [0, 4, 7, 11, 14] },
    ],
  },
  {
    q: "Q6. 선호하는 산미(신맛의 정도)는",
    a: [
      {
        answer: "적은 신맛",
        type: [3, 5, 7, 14],
      },
      { answer: "적당한 신맛", type: [4, 6, 8, 10] },
      { answer: "강한 신맛", type: [0, 1, 2, 9, 11, 12, 13] },
    ],
  },
  {
    q: "Q7. 내가 좋아하는 향은",
    a: [
      { answer: "향긋한 꽃향", type: [0, 6, 11] },
      { answer: "싱그러운 과일향", type: [1, 2, 3, 12, 14] },
      { answer: "고소한 견과류", type: [4, 5, 7] },
      { answer: "달콤 쌉싸름한 초콜릿", type: [3, 10, 13] },
    ],
  },
  {
    q: "Q8. 내가 커피를 즐기는 순간은",
    a: [
      { answer: "밝고 활동적인 에너지가 필요할 때", type: [1, 10, 11, 12] },
      {
        answer: "차분하고 섬세한 안정감이 필요할 때",
        type: [0, 2, 5, 7, 8, 13, 14],
      },
      { answer: "함께하는 즐거움이 필요할 때", type: [3, 4, 6, 9] },
    ],
  },
  {
    q: "Q9. 나에게 필요한 것은",
    a: [
      { answer: "편안한 휴식", type: [0, 4, 7, 8, 14] },
      { answer: "활발한 분위기", type: [3, 9, 12, 13] },
      { answer: "고요함", type: [2, 5, 11] },
      { answer: "유쾌한 즐거움", type: [1, 6, 10] },
    ],
  },
  {
    q: "Q10. 당신이 추구하는 삶은",
    a: [
      { answer: "규칙적이고 안정적인", type: [0, 2, 5, 6, 7, 12, 13, 14] },
      { answer: "즉흥적이고 다이나믹한", type: [1, 4, 8, 9] },
      { answer: "흘러가는 대로 사는", type: [3, 10, 11] },
    ],
  },
  //   {
  //     q: "Q11. 갑자기 기분이 꿀꿀하고 우울한 날에 나는",
  //     a: [
  //       { answer: "집에서 쉬고 잠을 잔다.", type: ["notwalk"] },
  //       { answer: "좋아하는 노래를 들으며 산책한다.", type: ["walk"] },
  //     ],
  //   },
  //   {
  //     q: 'Q12. 걸음으로 기부를 할 수 있는 "걸음 기부", 나는',
  //     a: [
  //       { answer: "걸음 기부에 대해 알고 있다.", type: ["walk"] },
  //       { answer: "뭔지 잘 모르겠다.", type: ["notwalk"] },
  //     ],
  //   },
];

const infoList = [
  {
    name: "에티오피아<br>예가체프",
    desc: "중간 정도의 두드러진 향과 진한 산미가 있으며, 과일 향의 아로마, 달콤한 과일 맛, 꽃향기, 실크처럼 부드러운 바디감이 매우 인상적인 커피. 예가체프는 세련되고 매끄러운 커피로 ‘커피의 귀부인’으로 불린다.",
  },
  {
    name: "케냐<br>케냐AA",
    desc: "신맛이 깔끔하면서도 산뜻하며 바디감이 좋은 커피로 신맛을 좋아하는 사람들이 주로 마시는 커피.",
  },
  {
    name: "탄자니아<br>킬리만자로",
    desc: "‘커피의 신사’, ‘영국 왕실의 커피’ 이자 헤밍웨이가 사랑한 커피로 아프리카계의 커피답게 맛이 진하며 떫은맛이 약한 대신 신맛이 뛰어나고 풍부하면서도 부드러운 맛을 가진 커피.",
  },
  {
    name: "예맨<br>예맨 모카",
    desc: "달콤한 과일 향과 초콜릿 향, 부드러운 신맛, 적당히 쓴맛이 있는 중간 정도의 바디감을 가진 커피.",
  },

  {
    name: "인도<br>몬순 말라바",
    desc: "신맛이 강하고 단맛과 쓴맛이 조화롭고 고소한 향을 가진 커피. 커피가 숙성되고 특유의 향을 가지도록 몬순 (남서 계절풍)을 이용해 인위적으로 만든다.",
  },
  {
    name: "인도네시아<br>만델링 하이 G1",
    desc: "커피의 말론블란도라고 불릴 만큼 묵직하고 굵은 맛. 진한 커피의 대명사.",
  },
  {
    name: "파푸아뉴기니<br>파푸아뉴기니 시그리",
    desc: "블루마운틴 품종답게 과일 향, 꽃 향을 느낄 수 있고 상큼한 신맛과 적절한 쓴맛, 단맛과 조화로운 풍부하고 리치한 맛과 향이 일품인 커피.",
  },

  {
    name: "멕시코<br>타파출라",
    desc: "단맛은 적고 쓴맛이 좀 더 느껴지는 부드러운 신맛이 있으며 바디감은 중간 정도이고 고소한 향이 있는 커피. 멕시코 치아파스 지역에서 유기농법으로 재배된다.",
  },
  {
    name: "쿠바<br>크리스탈 마운틴",
    desc: "숙도가 높고 맛은 신맛, 쓴맛, 은은한 단맛, 어느 한 곳에 치우치지 않은 깨끗하고 산뜻한 맛으로 스트레이트로 마시면 블루마운틴에 버금가는 맛의 커피.",
  },
  {
    name: "자메이카<br>자메이카 블루마운틴",
    desc: "세계 3대 커피 중의 하나로 ‘커피의 황제’로 불림. 옅은 신맛과 와인과 같이 쌉쌀한 맛, 부드러운 쓴맛, 단맛과 스모크한 맛까지 각 커피가 지니는 맛들을 골고루 지닌 욕심 많은 커피.",
  },

  {
    name: "과테말라<br>안티구아",
    desc: "스모크 커피의 대명사. 신맛과 신비로운 향이 첫맛은 단순하나 차츰 다양한 맛을 내는 여운이 있는 커피.",
  },
  {
    name: "파나마<br>게이샤",
    desc: "꽃 향, 쟈스민, 과일 향, 만다린, 망고의 향이 나며 분명하고 상큼하며 달콤함으로 가득하며, 깔끔하고 신선하고 좋은 느낌의 복잡한 여운이 풍부하게 담겨 ‘이거 진짜 커피 맞아?’하는 생각을 하게 만드는 커피",
  },
  {
    name: "하와이<br>하와이안 코나",
    desc: "과일처럼 상큼한 신맛과 잔잔한 단맛으로 유명하며 자메이카 블루마운틴과 함께 세계 제2의 프리미엄급 대열에 설 정도로 맛과 향기가 뛰어난 커피.",
  },
  {
    name: "콜롬비아<br>수프리모",
    desc: "마일드 커피의 대명사. 풍부한 바디감과 달콤한 아로마와 초콜릿, 캐러멜, 과일향이 조화로운 커피",
  },
  {
    name: "브라질<br>버본 산토스",
    desc: "산도가 낮고, 부드러우며, 산맛, 단맛, 바디감이 중간으로 균형 잡힌 맛이 나는 중성적인 커피.",
  },
];
