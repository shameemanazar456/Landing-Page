class landing{
    //property
    dataBase = {
        "Milan":{username:'Milan', password:'Milan123'},
        "Manu":{username:'Manu',password:'Manu123'},
        "Anu":{username:"Anu",password:'Anu123'},
        "Manuel":{username:"Manuel",password:'Manuel123'},
    }

    //Method
    save(){
        if(this.dataBase){
            localStorage.setItem("dataBase",JSON.stringify(this.dataBase))
        }
    }
    //get data
    getData(){
        this.dataBase = JSON.parse(localStorage.getItem("dataBase"))
    }

    //register
    register(){
        this.getData()
        console.log("inside fun");
        let user = regUser.value
        let pswd = regpswd.value
        console.log(user,pswd);
        if(user=="" || pswd==""){
            alert('Please fill the form completely')
        }
        else{
            if(user in this.dataBase){
                alert('User already exist')
            }
            else{
                this.dataBase[user]={username:user, password:pswd}
                this.save()
                alert('user added successfully')
                //for navigation
                window.location = "index.html"
            }
        }
    }

    //login
    login(){
        let luser=loginUser.value
        let lpswd = loginPswd.value
        console.log(luser,lpswd);
        this.getData()
        if(luser==''||lpswd==''){
            alert("please fill the form completely")
        }
        else{
            if(luser in this.dataBase){
                if(this.dataBase[luser].password==lpswd){
                    alert('login successfull')
                    localStorage.setItem("user",luser)
                    window.location="home.html"
                }
                else{
                    alert('wrong username or password') 
                }

            }
            else{
                alert('wrong username or password')
            }
        }

    }
}

//object

const obj = new landing()
obj.getData()

