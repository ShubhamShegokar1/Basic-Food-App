function display(p)
{
  
    let h1 =document.createElement("h1");
    h1.innerHTML="Details of "+p;
    document.body.appendChild(h1)

    let newClass =document.createElement("div");
    document.body.appendChild(newClass)
    newClass.className="newclass"

     for(var i=0;i<6;i++)
     {
         if(p===data.meals[i].strMeal)
         {
            let name= document.createElement("p")
            name.innerText="Name : "+data.meals[i].strMeal;
            newClass.appendChild(name)     

            let category=document.createElement("p")
            category.innerHTML="Catergory :"+data.meals[0].strCategory
            newClass.appendChild(category)
          
            let area=document.createElement("p")
            area.innerHTML="Area :"+data.meals[0].strArea
            newClass.appendChild(area)

            let inst=document.createElement("p")
            inst.innerHTML="Price : 260 ₹ "
            newClass.appendChild(inst)
            break;
         }
     }
   
}

