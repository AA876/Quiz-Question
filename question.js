class Question {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
    }
  
    display(){
      var title = createElement('h2')
      title.html("Quiz Question")
      title.position(displayWidth/2-50, 0);
  
      this.input.position(displayWidth/2-40, displayHeight/2-80);
      this.button.position(displayWidth/2+30, displayHeight/2);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        question.name = this.input.value();
        questionCount+=1;
        question.index = questionCount;
        question.update();
        question.updateCount(questionCount);
        this.greeting.html("Hello " + question.name)
        this.greeting.position(displayWidth/2-70, displayHeight/2);
      });
  
    }
  }
  