import margarita from "../assets/MargaritaCocktail.png"
import mojito from "../assets/MojitoCocktail.png"
import cosmopolitan from "../assets/cosmopolitan.png"
import pinaColada from "../assets/PinaColadaCocktail.png"
import blueLagoonfrom from "../assets/blue-lagoon.png"
import bloodyMary from "../assets/BloodyMaryCocktail.svg"
import maiTai from "../assets/MaiTaiCocktail.svg"
import tequilaSunrise from "../assets/TequilaSunrise.png"
import oldFashioned from "../assets/oldFashioned.png"
import espressoMartini from "../assets/EspressoMartini.png"
export const cocktails = [

    {
      title: "Mojito",
      description: "A classic cocktail with mint, lime, and soda. Refreshing and light.",
      img: mojito,
      bgColor: "#A4E3A2",
      ingredients: {
        rum: 50,
        limeJuice: 30,
        mintLeaves: 10,
        sodaWater: 100,
        sugar: 10,
      },
    },
    {
      title: "Margarita",
      description: "A citrusy cocktail with tequila, lime, and a salted rim.",
      img: margarita,
      bgColor: "#FFD700",
      ingredients: {
        tequila: 50,
        limeJuice: 30,
        tripleSec: 20,
        salt: 2,
      },
    },
    {
      title: "Cosmopolitan",
      description: "An elegant cocktail with cranberry juice, lime, and vodka.",
      img: cosmopolitan,
      bgColor: "#FF6F61",
      ingredients: {
        vodka: 40,
        tripleSec: 20,
        cranberryJuice: 30,
        limeJuice: 10,
      },
    },
    {
      title: "Pina Colada",
      description: "A sweet cocktail with pineapple juice, coconut milk, and rum.",
      img: pinaColada,
      bgColor: "#F5E1A4",
      ingredients: {
        rum: 50,
        pineappleJuice: 90,
        coconutMilk: 60,
        sugar: 10,
      },
    },
    {
      title: "Blue Lagoon",
      description: "A vibrant blue cocktail with blue curaçao liqueur, vodka, and lemonade.",
      img: blueLagoonfrom,
      bgColor: "#87CEFA",
      ingredients: {
        vodka: 40,
        blueCuracao: 30,
        lemonade: 100,
      },
    },
    {
      title: "Bloody Mary",
      description: "A spicy cocktail with tomato juice, vodka, and seasonings.",
      img: bloodyMary,
      bgColor: "#D9534F",
      ingredients: {
        vodka: 50,
        tomatoJuice: 120,
        lemonJuice: 10,
        worcestershireSauce: 5,
        tabasco: 2,
      },
    },
    {
      title: "Old Fashioned",
      description: "A classic cocktail with bourbon, sugar, bitters, and orange.",
      img: oldFashioned,
      bgColor: "#D2691E",
      ingredients: {
        bourbon: 60,
        sugar: 5,
        bitters: 3,
        orangePeel: 1,
      },
    },
    {
      title: "Tequila Sunrise",
      description: "A vibrant cocktail with a gradient from orange to red made with tequila.",
      img: tequilaSunrise,
      bgColor: "#FFA07A",
      ingredients: {
        tequila: 50,
        orangeJuice: 120,
        grenadine: 10,
      },
    },
   
    {
      title: "Mai Tai",
      description: "A tropical cocktail with rum, juices, and almond syrup.",
      img: maiTai,
      bgColor: "#FFB347",
      ingredients: {
        rum: 50,
        limeJuice: 20,
        orangeJuice: 30,
        almondSyrup: 15,
      },
    },
    {
      title: "Espresso Martini",
      description: "A coffee-flavored cocktail with vodka, coffee liqueur, and espresso.",
      img: espressoMartini,
      bgColor: "#4B3621",
      ingredients: {
        vodka: 40,
        coffeeLiqueur: 20,
        espresso: 30,
      },
    },
  ]