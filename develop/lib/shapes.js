


const circleInfo = `<circle cx="100" cy="150" r="100"" />`
const isCircle = (input)=>{
    if(input != circleInfo){
        return false;
    } else{
        return true;
    }
}


module.exports = isCircle;