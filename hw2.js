            alert("Welcome to Dalida's  hotel")
            
                //1. Variables

            let hotelName = "DY";
            const ownerName = 'Dalida'
            const address = "Baytursinova 22a"
            const floorNumber = 9
            const rumnum = 120;
            const isOpened = true;
            let employeeNumber = 117;
            let guarantee = null

            console.log('Hotel:'+  hotelName + '  is located at ' +address+ ' has '+floorNumber +' floors ' +" with " +rumnum+" rooms " +" Opened? " +isOpened + " " +guarantee)    


            // objects

            let employer1 = {
                name: "Dalida", 
                yearOfBirth: 1994,
                role: "head",
                city: 'Almaty'
            }

            let employer2 ={
                name: "Aidar",
                yearOfBirth: 1996,
                role: "head",
                city: 'NurSultan'

            }

            console.log(employer1)
            console.log(employer1.name)
            
            delete employer1.role

            let newrole = 'manager'
            employer1.role = newrole

            

            //arrays and thier methods
            let clients = ["Sholpan" ,  'Nurman', "Maksat" ]
            const vipRooms = [11, 77, 107, 121]
            console.log(clients)
            vipRooms.length

            clients.push(`Marat`)
            vipRooms.pop(0)
            console.log(clients)

            console.log(vipRooms.reverse)
            clients.concat(vipRooms)
            console.log(clients)

           //// filter
            function highFloor(x){
                return x>50
            }
            function addingOneFloor(x){
                return x++
            }
            let a = []
            a = vipRooms.filter(highFloor)
            console.log(a)
            a.length

            //map
            let newresult = vipRooms.map(addingOneFloor)

            console.log(newresult)


            //operators
            if(countAgeofperson(employer1.yearOfBirth) > countAgeofperson(employer2.yearOfBirth)){
                console.log(`${employer1.name} older than ${employer2.name}`)
            }else if(countAgeofperson(employer1.yearOfBirth) == countAgeofperson(employer2.yearOfBirth)){
                console.log(`${employer1.name} and ${employer2.name} have same age `)
            }else{
                console.log(`${employer1.name} younger than ${employer2.name}`)

            }       
                //loops

              for(let i = 0; i<clients.length; i++){
                  console.log(i+' '+ clients[i])
              }

            //function Expression
            function welcome(name){
                console.log('hello ' + name)
            }

            let welcom2= (name) =>{
                console.log('hello ' + name)

            }
            let countAgeofperson = num =>{
                return 2022- num
            }

            const sum =(a,b) => a+b;
            
            import {clients[0]}  from './hw2.js'
            welcom2(clients.indexOf('Nurman'))
            console.log(countAgeofperson(employer1.yearOfBirth))
            console.log(sum(employeeNumber, rumnum))
 
     

                       
