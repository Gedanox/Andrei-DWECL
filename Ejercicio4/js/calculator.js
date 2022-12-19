class Calculator{
    init(calcbuttons){
        this.calcString = "";
        this.result = 0;
        this.new = false;
        this.action = "add";
        this.first = true;

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
                this.first = false;
                calckey.parentNode.insertBefore(this.calcscreen,calckey);
            }
            this.addButtons(calckey);
        }
    }

    addButtons(calckey){
        /*if (this.new){
            this.calcresult.innerHTML = "";
            this.new = false;
        }*/
        calckey.addEventListener("click", () => {
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
        console.log(this.new);
        this.calcString = this.calcString + this.calcinput.value + operation;
        if(type.id == "result"){
            this.calcString = this.calcString + this.result;
        }
        this.calcresult.innerHTML = this.calcString;
    }

    clear(){
        document.getElementsByClassName("calcResult").innerHtml = "";
    }

}
export {Calculator};