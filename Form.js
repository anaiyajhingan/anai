class Form{
    constructor(){
        this.button = createButton('PLAY');
        this.button1 = createButton('NEXT');
    }
    hideElements=()=>{
        wh.hide();
        ele.hide();
        dino.hide();
    }
    hideElements1=()=>{
        wh.hide();
        ele.hide();
        
    }
    display()  {
        this.button.position(750 ,450);
        this.button.mousePressed(() => {
            
            gamestate==1
        })




    }
}
    