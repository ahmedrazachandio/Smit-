function autoProvince(){
    var cityName = element.value;
    var provience = element.nextSibling.nextSibling;
    switch (cityName.toLowerCase()) {
            case "karachi":
            provienceForm.value = "Sindh";
            break;      
            case "lahore":
            provienceForm.value = "Punjab";
            break;
            case "quetta":
            provienceForm.value = "Kp";
            break;
    
        default:
            break;
    }


}