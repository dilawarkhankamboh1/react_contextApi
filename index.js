var objects=[
    { name:'Dilawar', age:20},
    { name:'Adnan', age:20},
    { name:'Mohsin', age:20}
    ]
    
    const result = objects.reduce((r, o) => {
      Object.values(o).forEach(e => r[e] = (r[e] || 0) + 1)
      return r;
    }, {});
    
    console.log(result)