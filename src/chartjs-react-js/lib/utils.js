export const sayiFormatla=(nStr)=> {
    if(typeof nStr ==="number"){
        nStr=nStr.toString()
    }
    if(typeof nStr ==="string"){
        const cvrt=Number(nStr);
        if(isNaN(cvrt)){
            return nStr;
        }
    }
    if(isNaN(nStr)){
        return 0;
    }
    let x = nStr.split(".");
    let x1 = x[0];
    let x2 = x.length > 1 ? "." + x[1] : "";
    let rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, "$1" + " " + "$2");
    }
    return x1 + x2;
  }
