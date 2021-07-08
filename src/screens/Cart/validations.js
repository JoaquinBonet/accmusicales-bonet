
export const validateForm = (name, mail, phone, continueFunction) => {

    const errors = [];

    if (!name.match(/[a-z][a-zA-Z][^#&<>"~;$^%{}?]{1,20}$/)) {
         errors.push("Ingrese un nombre válido");
    } 

    if (!mail.match(/^\S+@\S+\.\S+$/)) {
         errors.push("Ingrese una dirección de mail válido");

    } 

    if (!phone.match(/^[0-9]+$/) || phone.length > 20) {
         errors.push("Ingrese un número válido");
    }


    if (errors.length !== 0) {
        for (let i = 0; i < errors.length; i++) {
             alert(errors[i])
        }
    } else {
        return continueFunction();
    }


}
