
export const convertRbgtoArray=(rgbValue)=>{
    if(rgbValue)
    return rgbValue?.replace('(', ',').replace(')', '').split(",").slice(1).map((value,index)=>{
        if(index===3)
       return parseInt(+value * 255); 
       else
        return +value;
    }
    );
}