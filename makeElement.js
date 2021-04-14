function make_element(type,html,attributes){
    let element;
    if(type){
        element = document.createElement(type);
        if(typeof html === 'string'){
            element.innerHTML = html;
        }
        if(typeof attributes === 'object'){
            Object.keys(attributes).forEach(function(attribute){
                element.setAttribute(attribute,attributes[attribute]);
            });
        }
    }
    return element;
}
/*
    type: STRING - (required) any value as long as it is valid for an HTML element
    html: STRING - any value as long as it is valid dor HTML content
    attributes: JSON object - KEY is the attribute setting (i.e. class, id, src, etc.) and the value set for the key is the value given to the attribute (i.e. 'this-class', 'this-id', 'url for img src', etc.)

    example of use:
    const new_element = make_element('div','<p>some sample text</p>',{class:'this-class',style:'display:flex;','data-src':'//samplesite.com/this-url'});
*/