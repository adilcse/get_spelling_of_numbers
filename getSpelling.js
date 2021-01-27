const ones=["one","two","three","four","five","six","seven","eight","nine","ten"];
const tens=["twenty","thirty","fourty","fifty","sixty","seventy","eighty","ninety"];
const eleven=["eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","ninteen"];
const hundreds=["hundred","thousand","million","billion","trillion"];

const getNext=()=>{
return x++;
}

const getDigit=(n)=>{
    var count = 0;
    if (n >= 1) ++count;
  
    while (n / 10 >= 1) {
      n /= 10;
      ++count;
    }
  
    return count;
}
//423,464
const getOnes=(n)=>{
    return n>0 ? ones[n-1] : "";
}

const getTens=(n)=>{

    if(n>99 || n<1){
        return "";
    }
    if(n<=10){
        return ones[n-1]; 
    } else if (n<20) {
        return eleven[n-11];
    } else {
        const f=parseInt(n/10);
        const l=n%10;
        return tens[f-2] + "-" + getOnes(l);
    }
}
const getHundreds=(n)=>{
    if (n>999) {
        return "";
    } if (n>99) {
        return `${getOnes(parseInt(n/100))} ${hundreds[0]} ${getTens(n%100)}`;
    } else {
        return getTens(n);
    }
}

const getThousends=(n)=>{
    if(n>999999999999999){
        return "out of range";
    }
    const d=getDigit(n);
    const t=parseInt((d-1)/3);
    const zeros=Math.pow(1000,t)
    const f=parseInt(n/zeros);
    const l=n%zeros;
    let nines="";
    let temp_t=t;
    while(temp_t>0){
        nines+="999"
        temp_t--;
    }
    nines=parseInt(nines);
    if(n<=999){
        return getHundreds(n);
    }

     if (n>nines) {
        return `${getHundreds(f)} ${hundreds[t]} ${getThousends(l)}`;
    }
    return  getThousends(l);
}

const getSpelling=(a)=>{
    return getThousends(a);
}


setInterval(()=>{
    const n=getNext();
    const sp=n+" - "+getSpelling(n);
    console.log(sp);
   },1000);
