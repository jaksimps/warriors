var wrap = document.body.querySelector(".wrap");
var warriors = [
  {
    name:"Bob",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Jerry",
    damage:1,
    health:12,
    warrior:true
  },
  {
    name:"Mavis",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Morty",
    damage:4,
    health:10,
    warrior:true
  },
  {
    name:"Shorty",
    damage:10,
    health:3,
    warrior:false
  },
  {
    name:"Porty",
    damage:1,
    health:14,
    warrior:true
  },{
    name:"Perry",
    damage:2,
    health:9,
    warrior:true
  },
  {
    name:"Larry",
    damage:2,
    health:17,
    warrior:false
  }
]

for(var i = 0; i<warriors.length;i++){
   var ele = document.createElement("div");
   var nameEle = document.createElement("h1");
   var damageEle = document.createElement("h3");
   var healthEle = document.createElement("h3");
  
  nameEle.innerHTML = warriors[i].name;
  damageEle.innerHTML = warriors[i].damage;
  healthEle.innerHTML = warriors[i].health;
  
   ele.appendChild(nameEle);
    ele.appendChild(damageEle);
   ele.appendChild(healthEle);
  if(warriors[i].health >=10){
    if(warriors[i].damage >=2){
      if(warriors[i].warrior === true){
        if(warriors[i].name.indexOf("a")>-1){
          ele.style.color = "red";
          wrap.appendChild(ele);
        }else{
          wrap.appendChild(ele);
        }
      }
    }
  }
  
}

// for(var i = 0; i < list.length; i++){
//   var ele = document.createElement("h1");
//   var nameEle = document.createElement("h1");
//   var playersEle = document.createElement("h3");
//   nameEle.innerHTML = list[i].name;
//   playersEle.innerHTML = "players: " +list[i].players;
//   ele.appendChild(nameEle);
//   ele.appendChild(playersEle);
//   if(list[i].output === 1080){
//     ele.style.color = "blue";
//   }else{ele.style.color = "red";}
//   wrap.appendChild(ele);
// }