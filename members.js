class Member {
    constructor({
        name = '이름',
        id = '23-000',
        quote = undefined,
        links = [],
        favorite = {
            field: '정보',
            language: '한국어'
        },
        description = '정모의 회원 중 1명'
    }) {
        [ this.name, this.id, this.quote, this.links, this.favorite, this.description ]
        = [ name, id, quote, links, favorite, description ]
    }

    display(element) {
        let code = ''
        const hasQuote = this.quote !== undefined

        code += `<h1>${this.name}</h1>
        <h2>${this.id}</h2>`

        if (hasQuote) {
            code += `<h2>"${this.quote}"</h2>`
        }

        for (let link of this.links) {
            code += `<a href="http://${link}">${link}</a><br/>`
        }

        code += `<ul>
            <li>좋아하는 분야: ${this.favorite.field}</li>
            <li>좋아하는 언어: ${this.favorite.language}</li>
        </ul>`
        
        code += this.description

        const memberElement = document.createElement('div')
        memberElement.setAttribute('class', 'member')
        memberElement.innerHTML = code
        element.appendChild(memberElement)
    }
}

const members = [
    new Member({
        name: '김준이',
        id: '23-031',
        quotes: '준이는 귀엽다.',
        links: ['www.juneekim7.kro.kr', 'www.instagram.com/juneekim7/', 'flev.io'],
        favorite: {
            field: '웹 개발',
            language: 'js'
        },
        description: '안녕하세요! 정모를 만든 김준이라고 합니다!'
    }),
    new Member({
        name: '김준성',
        id: '23-029'
    }),
    new Member({
        name: '김래환',
        id: '23-016'
    }),
    new Member({
        name: '김창하',
        id: '23-035'
    }),
    new Member({
        name: '문가온',
        id: '23-046'
    }),
    new Member({
        name: '김정환',
        id: '23-027'
    }),
    new Member({
        name: '김수안',
        id: '23-022'
    }),
    new Member({
        name: '차재윤',
        id: '23-114'
    }),
    new Member({
        name: '문이현',
        id: '23-047'
    }),
]