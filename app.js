// declaring variables
//let is used for declaring constants ONLY

let/var myName : String = "Sam" // : String is optional

let/var myNumber : Int = 2

let/var myGPA : Float = 3.5 // decimals

let/var amIHungry : Bool = true // true false

console.log = println()



// operators 
// unable to add different types of variables together

var firstName : String = "Summer"

var burgerCalories : Int = 1000

println(firstName + "\(burgerCalories)") // when placed in "\", variable is converted to string


// for loops
// no .length property is swift

var ages = [24, 20, 25, 17, 31, 60]

for pajama in ages { // pajama refers to an individual element in ages array (could be any word)
	if (pajama >= 21) {
		println("Have a good time!")
	}
}




// 1...20 loops 1 through 20, including 20
// 1..20 loops 1 through 20, NOT including 20
var sum = 0

for apple in 1...20 {
	sum = sum + apple
}
println(sum)




















