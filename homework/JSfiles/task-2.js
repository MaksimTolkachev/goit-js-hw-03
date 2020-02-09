const countProps = function (obj) {
    let props = 0;
    for (let key in obj) {
      props += 1;
    }
    return props
  }




console.log(countProps({}));

console.log(countProps({ name: 'Mango', age: 2 })); 

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));