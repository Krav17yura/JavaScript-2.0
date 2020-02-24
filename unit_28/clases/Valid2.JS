class Valid2 extends Valid{
    constructor(email, password, isValid, emaiError = '', passwordError = ""){
        super(email,password,isValid);
        this.emaiError = emaiError;
        this.passwordError = passwordError;
    }

    validate(){
        this.isValid = (this.password.length > 6 && this.email.trim().length != 0)? true : false;
        this.emaiError = (this.email.trim().length == 0)? `email empty` : this.email;
        this.passwordError = (this.password.trim().length <= 6)? 'min length 6': "";
   }
}