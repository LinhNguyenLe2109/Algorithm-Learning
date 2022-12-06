function test(iterNum){
    if(iterNum !== 0){
        console.log(iterNum);
        iterNum--;
        test(iterNum);
    }
    else{
        return true;
    }
}
test(4);

