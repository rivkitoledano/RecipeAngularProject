using Microsoft.AspNetCore.Mvc;
using recipeServer.Entities;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace recipeServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipeController : ControllerBase
    {
        static List<Recipe> recipes = new List<Recipe>
        {
             new Recipe
             {
                    Id = Recipe.Count,
                    Name = "Spaghetti Carbonara",
                    CategoryId = 1,
                    PreparationTime = 30,
                    DifficultyLevel = 3,
                    DateAdded = DateTime.Now,
                    Ingredients = new List<string> { "Spaghetti", "Eggs", "Bacon", "Parmesan cheese", "Black pepper" },
                    Instructions = new List<string> { "Boil spaghetti", "Fry bacon", "Mix eggs and cheese", "Combine all ingredients" },
                    UserId = 1,
                    RoutingImage = "../../../../assets/images/spa.jpg",
                    RoutingImageExtend = "../../../../assets/images/spageti.jpg"

             },
              
                new Recipe
              {
                    Id = Recipe.Count,
                    Name = "Crunch tofu salad in an excellent Asian sauce",
                    CategoryId = 3,
                    PreparationTime = 30,
                    DifficultyLevel = 3,
                    DateAdded = DateTime.Now,
                    Ingredients = new List<string> {
                       "Tofu with a hard texture, cut into cubes",
                       "Cornflour",
                        "red pepper sliced ​​into thin strips",
                        "yellow pepper, sliced ​​into thin strips",
                        "Bok choi, thinly sliced,",
                        "Bean sprouts (or any type of sprouts you like)",
                        "thinly sliced ​​Chinese cabbage",
                        "thinly sliced ​​purple onion",
                        "oil for frying"
                    },
                    Instructions = new List<string> {
                       "Mix all the sauce ingredients in a bowl, whisk well and set aside.",
                       "Roll the tofu cubes in cornflour, until they are coated on all sides.",
                       "Heat oil in a pan, over medium heat, fry the tofu for about 5 minutes, until it turns golden on all sides.",
                       "Take out and set aside.",
                            "To the same pan, add red pepper, yellow pepper, bok choy, sprouts and Chinese cabbage. Fry on high heat for a minute and then pour in the sauce.",
                         "Take out the sautéed vegetables, transfer to a serving bowl, add the crispy tofu, garnish with red onion and serve."
                    },
                    UserId = 1,
                    RoutingImage = "../../../../assets/images/salad.jpg",
                    RoutingImageExtend = "../../../../assets/images/salat.jpg"

               },
                new Recipe
              {
                    Id = Recipe.Count,
                    Name = "Salmon with Crumble Feta and Cherry Tomatoes",
                    CategoryId = 1, // Assign your desired CategoryId here
                    PreparationTime = 60, // Assign your desired PreparationTime here
                    DifficultyLevel = 2, // Assign your desired DifficultyLevel here
                    DateAdded = DateTime.Now, // Assign the current date and time here
                   Ingredients = new List<string>
                   {
                      "1 package (250 grams) crumbled sheep feta cheese",
                      "100 grams butter",
                      "6 pieces of salmon fillet",
                      "3 cups baby broccoli florets",
                      "2 cups cherry tomatoes",
                      "5 tablespoons olive oil",
                      "1 teaspoon coarse salt",
                      "3 tablespoons honey",
                      "1 teaspoon ground black pepper",
                      "Juice of one lemon",
                      "2 teaspoons minced garlic",
                      "1 teaspoon salt",
                      "2 tablespoons mustard seeds",
                      "2 cups golden bread crumbs",
                      "1 tablespoon dried oregano",
                      "3 tablespoons fresh thyme"
                    },


                     Instructions = new List<string>
                      {
                     "Prepare the marinade by mixing honey, lemon juice, 2 tablespoons olive oil, minced garlic, mustard, black pepper, and 1/2 teaspoon salt in a bowl.",
                     "Coat the salmon fillets with the marinade and place them in the center of a lined baking dish.",
                     "Blanch the broccoli in boiling water for 10 minutes, then transfer to cold water. Drain and mix with cherry tomatoes, add 3 tablespoons of olive oil and 1 teaspoon of coarse salt, and mix well.",
                     "Arrange the broccoli and cherry tomatoes around the salmon fillets in the baking dish.",
                     "Prepare the crumble by melting butter in a pan until foamy. Add breadcrumbs, minced garlic, 1/2 teaspoon of salt, oregano, and thyme. Stir well and remove from heat.",
                     "Bake the salmon and vegetables in a preheated oven at 200°C (392°F) for 25 minutes.",
                     "After baking, sprinkle the crumble and crumbled feta cheese over the salmon fillets and serve."
                     },
                     UserId = 1,
                     RoutingImage = "../../../../assets/images/salmon.jpg",
                     RoutingImageExtend="../../../../assets/images/salm.jpg",
                },
                new Recipe    {
                    Id = Recipe.Count,
                     Name = "Perfect Crispy Schnitzel Tips",
                     CategoryId = 1,
                     PreparationTime = 20,
                     DifficultyLevel = 1,
                     DateAdded = DateTime.Now,
                     Ingredients = new List<string>
                     {
                         "500g schnitzel",
                         "For the egg mixture:",
                         "- 2 large eggs",
                         "- 1 tablespoon yellow mustard",
                         "- 1 tablespoon ketchup",
                         "- 1 tablespoon mayonnaise",
                         "- 0.5 teaspoon salt",
                         "For the flour mixture:",
                         "- 1 cup all-purpose flour",
                         "- 1 cup cornmeal",
                         "- 0.5 teaspoon sweet paprika",
                         "For the breadcrumbs mixture:",
                         "- 1 cup fine breadcrumbs",
                         "- 1 teaspoon chicken soup powder",
                         "- 1 teaspoon salt",
                         "- 0.5 teaspoon sweet paprika"
                     },
                     Instructions = new List<string>
                     {
                           "1. Mix the eggs with mustard, ketchup, mayonnaise, and salt.",
                           "2. Prepare the flour and cornmeal mixture in a wide bowl, and separately prepare the breadcrumbs mixture. Coat the schnitzel well with the flour mixture, dip in the beaten eggs, and coat well with breadcrumbs.",
                           "3. Heat deep oil to 170-180 degrees Celsius. Fry the schnitzels for a few minutes on each side until golden brown. Add a carrot slice to the oil from time to time to reduce frying damage. Replace the slice with a fresh one every few minutes.",
                           "4. Place the schnitzels on a wire rack to drain and cool. Do not place them on paper towels. Do not stack the schnitzels on top of each other."

                     },
                     UserId = 1,
                     RoutingImage = "../../../../assets/images/sniz.jpg" ,RoutingImageExtend="../../../../assets/images/snizel.jpg"},
              
                new Recipe {
                    Id = Recipe.Count,
        Name = "Tortilla with Ground Beef and Tahini",
            CategoryId = 2, // Assign your desired CategoryId here
            PreparationTime = 15, // Assign your desired PreparationTime here
            DifficultyLevel = 2, // Assign your desired DifficultyLevel here
            DateAdded = DateTime.Now, // Assign the current date and time here
            Ingredients = new List<string>
            {
                // Add your list of ingredients here
                "2 tablespoons canola oil",
                "1 onion, sliced into strips",
                "200 grams ground beef",
                "Fine salt",
                "Ground black pepper",
                "Tortilla",
                "2 eggs",
                "Fine salt",
                "Ground black pepper",
                "Canola oil for frying the tortilla",
                "1 medium tortilla",
                "1 tablespoon chopped salad",
                "3 slices fried or grilled eggplants",
                "A handful of olive rings"
            },
             Instructions = new List<string>
            {
                // Add your list of instructions here
                "Prepare the filling: Heat oil in a pan and fry the onion until golden. Add the meat, season, mix, and continue to fry for about 7 minutes, stirring, until the meat is ready. Set aside.",
                "Prepare the tortilla: In a bowl, beat the egg, add salt and pepper, and mix well.",
                "Heat a little oil in a pan, pour the seasoned egg and fry over medium heat.",
                "Spread chopped salad in the center of the tortilla and place it with the spread side down on the tahini. Press with a spatula and turn the tortilla along with the tahini to the other side. Fry for another minute until golden.",
                "Sprinkle the top (away from you) of the tortilla with the meat filling and place eggplants and olives on top. Fold the part close to the filling over the meat and transfer the tortilla to a plate.",
                "Cut into 3 pieces and serve."
            },
                UserId = 1, // Assign your desired UserId here
                RoutingImage = "../../../../assets/images/tort.jpg",
                RoutingImageExtend=   "../../../../assets/images/tortia.jpg",     },
                new Recipe{
                    Id = Recipe.Count,
            Name = "Dry-aged Entrecote on a Griddle Pan",
            CategoryId = 1,
            DifficultyLevel = 2,
            DateAdded = new DateTime(2018, 3, 13), // Assign the publication date here
            Ingredients = new List<string>
            {
                "1 kg dry-aged entrecote beef",
                "5 tablespoons olive oil",
                "Coarse salt",
                "Coarse pepper"
            },
            Instructions = new List<string>
            {
                "Start by letting the meat sit at room temperature for about 1 to 1.5 hours until it reaches room temperature.",
                "Heat a griddle pan until very hot, then generously add the olive oil.",
                "Once the meat has reached room temperature, season it with salt and pepper on both sides, then add it to the hot griddle pan for about 3 minutes on each side for a medium-rare level of doneness.",
                "Of course, if you prefer a different level of doneness, adjust the cooking time accordingly.",
                "Once done, you can deglaze the pan with some excellent dry red wine and turn it into a sauce to serve over the meat."
            },
UserId = 1, // Assign your desired UserId here
            RoutingImage = "../../../../assets/images/Entrecote.jpg",
RoutingImageExtend="../../../../assets/images/entr.jpg"        }
    
        };
       static int  count=recipes.Count()+1;




    // GET: api/<RecipeController>
    [HttpGet]
        public IEnumerable<Recipe> Get()
        {
            return recipes;
        }

        // GET api/<RecipeController>/5
        [HttpGet("{id}")]
        public Recipe Get(int id)
        {
            var recipe = recipes.Find(r => r.Id == id);
            return recipe;
        }

        // POST api/<RecipeController>
        [HttpPost]
        public void Post([FromBody] Recipe value)
        {
            value.Id = count;
            value.DateAdded = DateTime.Now;
            recipes.Add(value);
        }

        // PUT api/<RecipeController>/5
        [HttpPut("{id}")]
     public IActionResult Put(int id, [FromBody] Recipe recipeToUpdate)
    {
      var recipe = recipes.Find(u => u.Id == id);
      if (recipe == null)
      {
        return NotFound();
      }
            recipe.Name = recipeToUpdate.Name;
            recipe.DifficultyLevel = recipeToUpdate.DifficultyLevel;
            recipe.RoutingImage = recipeToUpdate.RoutingImage;
            recipe.UserId = recipeToUpdate.UserId;
            recipe.CategoryId = recipeToUpdate.CategoryId;
            recipe.PreparationTime = recipeToUpdate.PreparationTime;
            recipe.Instructions = recipeToUpdate.Instructions;
            recipe.Ingredients = recipe.Ingredients;
            return NoContent();
    }

        // DELETE api/<RecipeController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var recipe = recipes.Find(r => r.Id == id);
            if (recipe != null)
            {
                recipes.Remove(recipe);
            }
        }
    }
}
