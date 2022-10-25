function make_element(type,settings){
    let element;
    if(type){
        element = document.createElement(type);
        if(typeof settings === 'object'){
            for(let key in settings){
                switch(key.toLowerCase()){
                    case 'html':
                    case 'innerhtml':
                    case 'text':
                    case 'innertext':
                        element.innerHTML = settings[key];
                        break;
                    case 'class':
                    case 'classname':
                    case 'classlist':
                        if(typeof settings[key] === 'object' && settings[key].length > 0){
                            element.setAttribute('class',settings[key].join(' '));
                        } else {
                            element.setAttribute('class',settings[key]);
                        }
                        break;
                    default:
                        element.setAttribute(key,settings[key]);
                }
            }
        }
    }
    return element;
}
/*
    type: STRING - (required) any value as long as it is valid for an HTML element
    settings: JSON object - KEY is the attribute setting (i.e. class, id, src, etc.) or the innerHTML of the element. The value set for the key is the value given to the attribute (i.e. 'this-class', 'this-id', 'url for img src', etc.) or what will be placed in as the innerHTML ('<p>example text</p>).

    example of use:
    const new_element = make_element('div',{
        class:'this-class',
        style:'display:flex;',
        'data-src':'//samplesite.com/this-url',
        html:'<p>some sample text</p>'
    });
    
    extended use example:
    const element_settings = {
        classList:['this-class','that-class'],
        id:'unique-id',
        href: '/url/path/way',
        innerHTML: '<p>inner textual link</p> other sample text'
    };
    const new_element = make_element('a',element_settings);
*/