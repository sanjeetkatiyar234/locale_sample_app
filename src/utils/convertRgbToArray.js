
export const convertRbgtoArray=(rgbValue)=>{
    if(rgbValue)
    return rgbValue?.replace('(', ',').replace(')', '').split(",").slice(1).map(v=>+v);
}