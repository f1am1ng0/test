class cstmElement extends HTMLElement{
    constructor(){
        super();
        this.innerText='default text';
    }
    updateText(txt){
        this.innerText=txt;
    }
    updateStyles(styles){
        if(typeof styles !== 'object'){
        console.log('WARNING')
        return;
    }
        this.styles = styles;
    }
}
    customElement.define('default-element', cstmElement)
    
    const element = new cstmElement();
    element.updateText( 'update text')
    element.updateStyles( {color:'red'})
    