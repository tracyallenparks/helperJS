function make_element(type,settings){
    let element
    if (!!type && typeof type === 'string') {
        element = document.createElement(type);
        if (typeof settings === 'object') {
            Object.entries(settings).forEach(([key, value]) => {
                switch (key.toLowerCase()) {
                    case 'html':
                    case 'innerhtml':
                    case 'text':
                    case 'innertext':
                        element.innerHTML = value;
                        break;
                    case 'class':
                    case 'classname':
                    case 'classlist':
                    case 'css':
                        element.classList.add(...(!Array.isArray(value) ? value.split(' ') : value));
                        break;
                    default:
                        element.setAttribute(key, value);
                }
            });
        }
    }

    return element || null;
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

// or implement as a class

class xElement {
    constructor(type,settings){
        let element
        if (!!type && typeof type === 'string') {
            element = document.createElement(type);
            if (typeof settings === 'object') {
                Object.entries(settings).forEach(([key, value]) => {
                    switch (key.toLowerCase()) {
                        case 'html':
                        case 'innerhtml':
                        case 'text':
                        case 'innertext':
                            element.innerHTML = value;
                            break;
                        case 'class':
                        case 'classname':
                        case 'classlist':
                        case 'css':
                            element.classList.add(...(!Array.isArray(value) ? value.split(' ') : value));
                            break;
                        default:
                            element.setAttribute(key, value);
                    }
                });
            }
        }

        return element || null;
    }
}

/*
    example of use:
    const newDiv = new xElement('div',{class:'this-div',html:'this content'});
*/