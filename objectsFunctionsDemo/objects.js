let myRoom = {
    furniture: ["desk", "chair", "computer"],
    lightsOn: true,
    paintColor: "teal",
    couchColor: "gold",
    artCollection: {
        paintings : ["blue flowers by Gabriel", "butterflies and stars by Alyse Firely"],
        sculptures: ["ceramic dinosaur you made when you were 8"]
    },
    //another valid way to declare toggleLights() would be 
    // toggleLights : function(){}

    toggleLights(){
        if(this.lightsOn){
            this.lightsOn = false
        }
        else this.lightsOn = true
        return this.lightsOn
    },

    buyFurniture : function(newFurniture){
        this.furniture.push(newFurniture)
        return `Congratulations, you got a new ${newFurniture}! Now where are you going to put it...`
    }
}

// console.log(myRoom.toggleLights())


module.exports = {
    myRoom
}