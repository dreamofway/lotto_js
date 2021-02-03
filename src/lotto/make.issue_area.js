import {createHtml} from './create.html.core';

/** 
 * 화면 구성 처리자
*/
export default function makeIssueArea(){

    let issue_container = htmlIssueContainer();
    let issue_container_box = htmlIssueContainerBox();
    let issue_container_box_header = htmlIssueContainerBoxHeader();
    let issue_container_box_select = htmlIssueContainerBoxSelect();
    let issue_container_box_lotto = htmlIssueContainerBoxLotto();

    issue_container_box.appendChild( issue_container_box_header );
    issue_container_box.appendChild( issue_container_box_select );
    issue_container_box.appendChild( issue_container_box_lotto );
    issue_container.appendChild( issue_container_box );

    document.body.appendChild( issue_container );
    console.log('발급화면 구성 완료');
}

/** 
 * 발급 컨테이너
*/
const htmlIssueContainer = ()=>{
    return  createHtml.make({
        tag : 'div'
        , attr : {
            class : 'issue_container'
        }
    });
}

/** 
 * 발급 box
*/
const htmlIssueContainerBox = ()=>{
    return createHtml.make({
        tag : 'div'
        , attr : {
            class : 'issue_container__box'
        }
    });
}

/** 
 * 발급 헤더
*/
const htmlIssueContainerBoxHeader = ()=>{

    let header = createHtml.make({
        tag : 'header'
        , attr : {
            class : 'issue_container__box__header'
        }
    });

    let header_text = createHtml.make({
        tag : 'div'
        ,attr : {
            class : 'issue_container__box__header--title'
        }
        , child : [
            {
                text : '이번 주 로또 대박을 기원합니다.'
            }
        ]
    });
    
    header.appendChild( header_text );

    return header;

}

/** 
 * 발급 선택
*/
const htmlIssueContainerBoxSelect = ()=>{

    let price = [
        {id:'KW1000', text : '1,000원'}
        ,{id:'KW2000', text : '2,000원'}
        ,{id:'KW3000', text : '3,000원'}
        ,{id:'KW4000', text : '4,000원'}
        ,{id:'KW5000', text : '5,000원'}
    ];

    let box_select = {
        tag : 'div'
        ,attr : {
            class : 'issue_container__box__select_box__goods'
        }
        ,child : [
            {
                tag : 'ul'
                ,attr : {
                    class : 'issue_container__box__select_box__goods--ul'
                }
                , child : []
            }
        ]
    };

    for( let idx in price ){        

        box_select.child[0].child.push({
            tag : 'li'
            ,child : [
                {
                    tag : 'input'
                    ,attr : {
                        type : 'radio'
                        , id : price[ idx ].id
                        , name : 'price_select'
                        , 'data-count' : Number(idx)+1
                    }  
                }
                ,{
                    tag : 'label' 
                    , attr : {
                        for : price[ idx ].id
                    }
                    , child : [
                        {text : price[ idx ].text }
                    ]
                }
            ]      
        });

    }

    return createHtml.make( box_select );

}

/**  
 * 로또 영역 컨테이너
*/
const htmlIssueContainerBoxLotto = ()=>{
    return createHtml.make({
        tag : 'div'
        , attr : {
            class : 'issue_container__box__lotto_area'
        }
        
    });
}