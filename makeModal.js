/*
    config = {
        unique: '',//required
        class: '',
        html: '',
        css: '',
        ctas: [
            {
                text: '',
                class: '',
                action: '',
                link: '',
            }
        ],
        close: boolean || {
            backgroundColor: '',
            color: '',
            opacity: '',
            zIndex: '',
            etc...
        },
        background:{
            backgroundColor: '',
            color: '',
            opacity: '',
            zIndex: '',
            etc...
        },
        modal:{
            backgroundColor: '',
            color: '',
            opacity: '',
            zIndex: '',
            etc...
        }
    }
*/
function make_modal(config){
    if(config.id && config.unique && !document.querySelector('#'+config.id)){
        const modal_container = document.createElement('div');
            modal_container.id = config.unique;
            modal_container.classList.add(config.unique+'-container');
            modal_container.innerHTML = `
                <div class="${config.unique}-modal${(config.class)?' ' + config.class:''}">
                    ${(config.html)?config.html:''}
                </div>
                <div class="${config.unique}-background"></div>
            `;
            modal_container.lastElementChild.addEventListener('click', function(){
                if(modal_container){
                    document.body.removeChild(modal_container);
                }
            });
        if(config.close){
            const close_button = document.createElement('span');
                close_button.classList.add(config.unique+'-close');
                close_button.innerHTML = ((typeof config.close !== 'boolean')?config.close:'&times;');
                close_button.addEventListener('click', function(){
                    if(modal_container){
                        document.body.removeChild(modal_container);
                    }
                });
            modal_container.firstElementChild.insertBefore(close_button,modal_container.firstElementChild.firstElementChild);
        }
        if(config.ctas && config.ctas.length){
            const cta_container = document.createElement('div');
                    cta_container.classList.add('cta-container');
            config.ctas.forEach(function(cta){
                const cta_button = document.createElement('div');
                    if(config.ctas.class){
                        cta_button.classList.add(config.unique + '-cta',config.ctas.class);
                    }
                    cta_button.innerHTML = config.ctas.text;
                    if(config.ctas.action){
                        cta_button.addEventListener('click', function(){
                            config.ctas.action
                        });
                    } else if(config.ctas.link){
                        cta_button.addEventListener('click', function(){
                            window.location.href = config.ctas.link;
                        });
                    }
                
                cta_container.appendChild(cta_button);
            });
            modal_container.querySelector('#'+config.id).appendChild(cta_container);
        }

        if(!document.querySelector('#' + config.unique + '-styles')){
            let css_styles = '';
                css_styles += `
                #${config.unique}.${config.unique}-container {
                    height: 100vh;
                    position: fixed;
                    width: 100vw;
                    z-index: 2147483647;
                }
                .${config.unique}-background{
                    background-color:#000000;
                    height:100vh;
                    left:0;
                    opacity: 0.5;
                    position:fixed;
                    top:0;
                    width:100vw;
                    z-index: 1;
                }
                `;
            if(config.background){
                css_styles += `
                .${config.unique}-background{
                    ${convert_styles(config.background)}
                }
                `;
            }
                css_styles += `
                .${config.unique}-modal{
                    background-color: #ffffff;
                    font-size: 1.5rem;
                    height: auto;
                    left: 50%;
                    line-height: 1.5;
                    max-height: 90vh;
                    max-width: 90vw;
                    position: absolute;
                    top: 50%;
                    transform: translate(-50%,-50%);
                    width: auto;
                    z-index: 9;
                }
                `;
            if(config.modal){
                css_styles += `
                .${config.unique}-modal{
                    ${convert_styles(config.modal)}
                }
                `;
            }
                css_styles += `
                ${config.unique}-close{
                    position: absolute;
                    right: 0;
                    top: 0;
                }
                `;
            if(config.close){
                css_styles += `
                .${config.unique}-close{
                    ${convert_styles(config.close)}
                }
                `;
            }
                css_styles += `
                .${config.unique}-close{
                    cursor: pointer;
                    font-family: sans-serif;
                    font-weight: 100;
                }
                `;
            if(config.ctas && config.ctas.length){
                css_styles += `
                .${config.unique}-cta{
                    ${convert_styles(config.ctas)}
                }
                `;
            }
            if(config.css){
                css_styles += `
                ${config.css}
                `;
            }
        
            const style_tag = document.createElement('style');
                style_tag.id = config.unique + '-styles';
                style_tag.innerHTML = css_styles;
                
            document.head.appendChild(style_tag);
        }

        document.body.insertAdjacentElement('afterbegin',modal_container);
    }

    function convert_styles(style){
        return Object.keys(style).reduce((acc, key) => (
            acc + key.split(/(?=[A-Z])/).join('-').toLowerCase() + ':' + style[key] + ';'
        ), '');
    }
}