class Calculator{

    calcscreen = null;
    calcresult = null;
    calcinput = null;
    calcstring = null;
    historyscreen = null;
    calchistory = null;
    temp = null;

    init(calcbuttons){

        this.calchistory = [];
        this.calcstring = "";
        this.result = 0;
        this.new = false;
        this.reset = false;
        this.action = "add";
        this.first = true;

        this.historyscreen = document.createElement("div");
        this.historyscreen.classList.add("calchistory");

        this.calcscreen = document.createElement("div");
        this.calcscreen.classList.add("calcScreen");

        this.calcresult = document.createElement("div");
        this.calcresult.classList.add("calcResult");

        this.calcinput = document.createElement("textarea");
        this.calcinput.classList.add("calcInput");

        this.calcscreen.append(this.calcresult);
        this.calcscreen.append(this.calcinput);

        for (let calckey of calcbuttons){
            if (this.first){
                calckey.parentNode.insertBefore(this.historyscreen,calckey);
                calckey.parentNode.insertBefore(this.calcscreen,calckey);
                this.first = false;
            }
            this.addButtons(calckey);
        }
    }

    addButtons(calckey){
        calckey.addEventListener("click", () => {
            if(this.new){
                this.new = false;
                this.reset = true;
            }
            if(this.reset){
                this.historial();
                if(this.reset){
                    this.clear();
                }
                console.log(this.result);
            }
            this.makeCalc();
            this.writeCalc(calckey);
            this.action = calckey.id;
        });
    }

    makeCalc(){
        switch (this.action) {
            case "add":
                this.result += parseInt(this.calcinput.value);
                break;

            case "substract":
                this.result -= parseInt(this.calcinput.value);
                break;

            case "result":
                this.calcstring = "";
                this.result = parseInt(this.calcinput.value);
                break;
        }
    }

    writeCalc(type){
        let operation = null;
        switch (type.id) {
            case "add":
                operation = "+";
                break;

            case "substract":
                operation = "-";
                break;

            case "result":
                operation = "=";
                this.new = true;
                break;
        }
        this.calcstring = this.calcstring + this.calcinput.value + operation;
        if(type.id === "result"){
            this.calcstring = this.calcstring + this.result;
        }
        this.calcresult.innerHTML = this.calcstring;
        this.clearInput();
    }

    historial(){
        let temp = document.createElement("p");
        temp.classList.add("pastresult");
        temp.innerHTML = this.calcstring;
        temp.value = this.result;
        temp.addEventListener("click", () => {
            this.clear();
            this.calcresult.innerHTML = temp.innerHTML;
            this.calcinput.value = temp.value;
        });
        this.historyscreen.append(temp);
    }

    clear(){
        this.reset = false;
        this.result = 0;
        this.calcstring = "";
        this.calcresult.innerHTML = "";
    }

    clearInput(){
        this.calcinput.value = "";
    }

}
export {Calculator};