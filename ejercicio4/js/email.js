class email{

    emailChecker(input){
        if (/^[a-zA-Z0-9-_.]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input)) {
            return true;
        } else {
            return false;
        }
    }
}

export {email};