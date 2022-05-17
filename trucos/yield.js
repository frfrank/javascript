function* strings(){
    let s = 'J'
    yield s
    s+= 'u'
    yield s
    s+= 'a'
    yield s
    s+= 'n'
    yield s
}

const str = Array.from(strings());

console.log("hola que hace señor estar", str);


function* foo(index){
    while(index<3){
        yield index;
        index++;
    }
}

const iterator = foo(0);

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);


function* countAppleSales () {
    let saleList = [3, 7, 5]
    for (let i = 0; i < saleList.length; i++) {
      yield saleList[i]
    }
  }


  let appleStore = countAppleSales();

console.log(appleStore.next()) 
console.log(appleStore.next()) 
console.log(appleStore.next()) 
console.log(appleStore.next()) 

