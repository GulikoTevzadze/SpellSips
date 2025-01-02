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
      "Rum": 50,
      "Lime Juice": 30,
      "Mint Leaves": 10,
      "Soda Water": 100,
      "Sugar": 10,
    },
  },
  {
    title: "Margarita",
    description: "A citrusy cocktail with tequila, lime, and a salted rim.",
    img: margarita,
    bgColor: "#FFD700",
    ingredients: {
      "Tequila": 50,
      "Lime Juice": 30,
      "Triple Sec": 20,
      "Salt": 2,
    },
  },
  {
    title: "Cosmopolitan",
    description: "An elegant cocktail with cranberry juice, lime, and vodka.",
    img: cosmopolitan,
    bgColor: "#FF6F61",
    ingredients: {
      "Vodka": 40,
      "Triple Sec": 20,
      "Cranberry Juice": 30,
      "Lime Juice": 10,
    },
  },
  {
    title: "Pina Colada",
    description: "A sweet cocktail with pineapple juice, coconut milk, and rum.",
    img: pinaColada,
    bgColor: "#F5E1A4",
    ingredients: {
      "Rum": 50,
      "Pineapple Juice": 90,
      "Coconut Milk": 60,
      "Sugar": 10,
    },
  },
  {
    title: "Blue Lagoon",
    description: "A vibrant blue cocktail with blue curaçao liqueur, vodka, and lemonade.",
    img: blueLagoonfrom,
    bgColor: "#87CEFA",
    ingredients: {
      "Vodka": 40,
      "Blue Curacao": 30,
      "Lemonade": 100,
    },
  },
  {
    title: "Bloody Mary",
    description: "A spicy cocktail with tomato juice, vodka, and seasonings.",
    img: bloodyMary,
    bgColor: "#D9534F",
    ingredients: {
      "Vodka": 50,
      "TomatoJuice": 120,
      "LemonJuice": 10,
      "Worcestershire Sauce": 5,
      "Tabasco": 2,
    },
  },
  {
    title: "Old Fashioned",
    description: "A classic cocktail with bourbon, sugar, bitters, and orange.",
    img: oldFashioned,
    bgColor: "#D2691E",
    ingredients: {
      "Bourbon": 60,
      "Sugar": 5,
      "Bitters": 3,
      "Orange Peel": 1,
    },
  },
  {
    title: "Tequila Sunrise",
    description: "A vibrant cocktail with a gradient from orange to red made with tequila.",
    img: tequilaSunrise,
    bgColor: "#FFA07A",
    ingredients: {
      "Tequila": 50,
      "Orange Juice": 120,
      "Grenadine": 10,
    },
  },

  {
    title: "Mai Tai",
    description: "A tropical cocktail with rum, juices, and almond syrup.",
    img: maiTai,
    bgColor: "#FFB347",
    ingredients: {
      "Rum": 50,
      "Lime Juice": 20,
      "OrangeJ uice": 30,
      "AlmondSyrup": 15,
    },
  },
  {
    title: "Espresso Martini",
    description: "A coffee-flavored cocktail with vodka, coffee liqueur, and espresso.",
    img: espressoMartini,
    bgColor: "#4B3621",
    ingredients: {
      "Vodka": 40,
      "Coffee Liqueur": 20,
      "Espresso": 30,
    },
  },
]