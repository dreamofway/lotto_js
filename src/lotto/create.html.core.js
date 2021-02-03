const createHtml = {};

createHtml.make = function( params ){
    
    let result = '';
    let new_tag = '';

    if( params.hasOwnProperty('tag') == true ) {

        new_tag = document.createElement( params.tag );

        //# tag set        
        this.setTagAttr( new_tag, params );

        if( params.hasOwnProperty('child') == true ) {
            
            for( let child_item of params.child ){		
                
                new_tag.appendChild( this.make( child_item ) );

            }
        } 

        result = new_tag;
    } else {
        
        if( params.hasOwnProperty('text') == true ) {
            result = document.createTextNode( params.text );                
        }

    }

    return result;
}

createHtml.setTagAttr = function( param_element, param_data ){

    //# 해당 태그의 속성을 정의한다.
    if( param_data.hasOwnProperty('attr') == true ) {

        for( var item in param_data.attr ) {
            switch( item ) {
                case 'display' : {
                    param_element.style.display = param_data.attr.display;
                    break;
                }
                case 'width' : {
                    param_element.style.width = param_data.attr.width;                                
                    break;
                }
                case 'height' : {
                    param_element.style.height = param_data.attr.height;
                    break;
                } 
                case 'borderTop' : {
                    param_element.style.borderTop = param_data.attr.borderTop;
                    break;
                }
                case 'borderLeft' : {
                    param_element.style.borderLeft = param_data.attr.borderLeft;
                    break;
                } 
                case 'borderRight' : {
                    param_element.style.borderRight = param_data.attr.borderRight;
                    break;
                } 
                case 'font_size' : {
                    param_element.style.fontSize = param_data.attr.font_size;
                    break;
                }
                case 'border' : {
                    param_element.style.border = param_data.attr.border;
                    break;
                }
                case 'resize' : {
                    param_element.style.resize = param_data.attr.resize;
                    break;
                }
                case 'backgroundColor' : {
                    param_element.style.backgroundColor = param_data.attr.backgroundColor;
                    break;
                }
                
                default : {
                    param_element.setAttribute( item , param_data.attr[ item ] );
                }
            }
        }
    }
}

export {createHtml};