const students={
    name:"sakib Khan",
    id:121,
    address:'movie name',
    isSingle: true,
    friends:['Amit','sagor','salman'],
    movies:[{name:"no.1",year:2015},{name:'no.2',year:2010}],
    act:function (){
       console.log("sakib khan")
    },
    car:{
       brand:'tesla',
       price:50000,
       made:2023 ,
       founder:{
        name:"Elon mask",
        born:1974,
        origin:'Usa'
       }
    }
}
students.act()
