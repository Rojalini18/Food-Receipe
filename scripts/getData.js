//GET API DATA
async function getData(url){
    let res = await fetch(url)
    let response = await res.json()
    return response
}

//For data in search result
function appendData(data , location){
    location.innerHTML = "";
    data.map((item)=>{
        var div = document.createElement("div")

        var img = document.createElement("img")
        img.src = item.strMealThumb

        var title = document.createElement("p")
        title.innerText = item.strMeal

        div.append(img , title)
        location.append(div)

        div.addEventListener("click" , function(){
            appendItem(item)
        })
    })
}

// all details of searched food
function  appendItem(food) {
    document.querySelector("#show_result").innerHTML = ""
    console.log(food)
    let container = document.querySelector("#show_result")

    var mainDiv = document.createElement("div")
    

    var div = document.createElement("div")

    var img = document.createElement("img")
    img.src = food.strMealThumb
    
    var right = document.createElement("div")
    var title = document.createElement("h1")
    title.innerHTML = food.strMeal

    var recipe = document.createElement("p")
    recipe.innerHTML = `This Dish is from ${food.strArea}`

    var tags = document.createElement("p")
    tags.setAttribute("class" , "tags")
    if(food.strTags != null){
            var tag = food.strTags.split(",")
            tag.map((t)=>{
                var a = document.createElement("span")
                a.innerText = t
                tags.append(a)
            })
    }

    
    var watch = document.createElement("a")
    watch.innerText = "watch video"
    watch.href = food.strYoutube
    right.append(title , recipe , tags , watch)
    div.append(img  , right)
    
    //istructor

    var recipe_Details = document.createElement("div")
    recipe_Details.setAttribute("class" , "recipe_Details")
    var ingredents = document.createElement("div")
    ingredents.setAttribute("class" , "ingredient")
    ingredents.innerHTML = `<h2>Ingredients</h2>`
    
   
    var things = document.createElement("table")
    for(var i = 1 ; i <= 20 ; i++){

        var tr = document.createElement("tr")
        var ingredient = `strIngredient`+i
        var measurment = `strMeasure`+i
        var ingredent_food = food[ingredient]
        var measurment_food = food[measurment]
        if(ingredent_food == ""){
            break;
        }
        
        tr.innerHTML = `<td>${measurment_food}</td><td>${ingredent_food}</td>`
        things.append(tr)
    }

    ingredents.append(things)
    var details = document.createElement("div")
    var direction = document.createElement("h2")
    direction.innerText = "Direction"
    var food_details = document.createElement("p")
    food_details.innerText = food.strInstructions
    
    details.append(direction , food_details)
    

    recipe_Details.append(ingredents , details)
    
    var button = document.createElement("div")
    button.innerHTML = "<p></p><button id='show'>show more</button><p></p>"
    


    mainDiv.append(div , recipe_Details , button)
    container.append(mainDiv)
    document.querySelector("#search_result").style.display = "none"

    var show = document.querySelector("#show")
    show.addEventListener("click" , function(){
        var a = document.querySelector(".recipe_Details").classList.toggle("show")
        if(a){
            show.innerText = "show less"
        }else{
            show.innerText = "show more"
        }
    })

}

//all item data
function appendFood(foods , location){
    location.innerHTML = ""
    console.log(foods)
    foods.map((food)=>{
        var div = document.createElement("div")

        var imgdiv = document.createElement("div")
        imgdiv.innerHTML = `<img src=${food.strMealThumb}>`


        var title = document.createElement("h2")
        title.innerText = food.strMeal

        var area = document.createElement("p")
        area.innerHTML = `<span>Area : ${food.strArea}</span><span>Category :${food.strCategory}</span>`

       

        var more = document.createElement("a")
        more.innerText = "Know more"
        more.href = food.strSource

        div.append(imgdiv , title , area , more)
        location.append(div)
    })
}
export {getData , appendData ,appendItem , appendFood};