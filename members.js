class Rank {
    constructor(name = '', color = '#262626') {
        this.name = name
        this.color = color
    }
}

class Member {
    constructor({
        name = '이름',
        id = '23-000',
        rankName = '1기',
        quote = undefined,
        links = [],
        favorite = {
            field: '정보',
            language: '한국어'
        },
        description = '정모의 회원 중 1명'
    } = {}) {
        let isRank = false
        let rank
        for (let item of ranks) {
            if (item.name === rankName) {
                isRank = true
                rank = item
                break
            }
        }

        if (!isRank) {
            throw new Error('등급이 올바르지 않습니다.')
        }

        [ this.name, this.id, this.rank, this.quote, this.links, this.favorite, this.description ]
        = [ name, id, rank, quote, links, favorite, description ]
    }

    display(container) {
        let code = ''
        const hasRank = this.rank.color !== '#262626'
        const hasQuote = this.quote !== undefined

        if (hasRank) {
            code += `<div class="rank ${this.rank.name}" style="background-color: ${this.rank.color};">
                ${this.rank.name}
            </div>`
        }
        else {
            code += `<div class="rank ${this.rank.name}" style="opacity: 0;">
                ${this.rank.name}
            </div>`
        }

        code += `<div class="info">
        <h1>${this.name}</h1>
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
        code += '</div>'

        const memberElement = document.createElement('div')
        memberElement.setAttribute('class', 'member card')
        memberElement.innerHTML = code
        container.appendChild(memberElement)
    }
}

const ranks = [
    new Rank('정모장', '#f08080'),
    new Rank('부장', '#31728f'),
    new Rank('1기')
]

const members = [
    new Member({
        name: '김준이',
        id: '23-031',
        rankName: '정모장',
        quote: '준이는 귀엽다.',
        links: ['www.juneekim7.kro.kr', 'insta.juneekim7.kro.kr', 'flev.io'],
        favorite: {
            field: '웹 개발, 알고리즘',
            language: 'typescript, js'
        },
        description: '안녕하세요! 정모를 만든 김준이라고 합니다!'
    }),
    new Member({
        name: '김창하',
        id: '23-035',
        rankName: '부장',
        quote: '아 프문해 숙제 안했다',
        links: ['github.com/modularinv', 'modularinv.tistory.com', 'instagram.com/chha_aa07'],
        favorite: {
            field: '알고리즘 문제해결(PS), 머신러닝',
            language: 'C++, Java'
        },
        description: '안녕하세요 반갑습니다!! :)'
    }),
    new Member({
        name: '문가온',
        id: '23-046',
        quote: '집 가고 싶다',
        links: ['github.com/bennyk0406', 'instagram.com/ga0_on'],
        favorite: {
            field: '웹 개발, PS',
            language: 'Python, TS, C++, JS'
        },
        description: '안녕하세요 :D'
    }),
    new Member({
        name: '차재윤',
        id: '23-114',
        quote: '근본은 C!',
        links: ['github.com/lochajy', 'instagram.com/__locha'],
        favorite: {
            field: '프로그래밍 언어 개발, 암호화폐, (딥러닝)',
            language: 'Python, C'
        },
        description: 'return NULL;'
    }),
    new Member({
        name: '김래환',
        id: '23-016',
        quote: '이슈가 있는데?',
        links: ['acmicpc.net/user/Raehwan0418', 'instagram.com/raehwan.k/'],
        favorite: {
            field: '알고리즘',
            language: 'C++'
        },
        description: '안녕하세요 김래환입니다.'
    }),
    new Member({
        name: '손민성',
        id: '23-063',
        quote: '0은 자연수다',
        links: ['instagram.com/son_ms2305', 'www.acmicpc.net/user/leosonyee', 'github.com/Yee6102'],
        favorite: {
            field: '수학, 정보',
            language: 'C, Python'
        }
    }),
    new Member({
        name: '이준민',
        id: '23-089',
        favorite: {
            field: 'PS, 알고리즘',
            language: 'Python, C++'
        }
    }),
    new Member({
        name: '김수안',
        id: '23-022',
    }),
    new Member({
        name: '문이현',
        id: '23-047',
    }),
    new Member({
        name: '차주원',
        id: '23-115',
    }),
    new Member({
        name: '김준성',
        id: '23-029',
    }),
    new Member({
        name: '김태이',
        id: '23-037',
    })
]