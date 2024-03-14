using Microsoft.AspNetCore.Mvc;
using recipeServer.Entities;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace recipeServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        static List<Category> categories = new List<Category>
            {
                new Category { Id = 1, Name = "Main Course", RoutingIcon = "dinner_dining" },
                new Category { Id = 2, Name = "Appetizer", RoutingIcon = "kebab_dining" },
                new Category { Id = 3, Name = "Salad", RoutingIcon = "flatware" },
                new Category { Id = 4, Name = "Soup", RoutingIcon = "soup_kitchen" },
                new Category { Id = 5, Name = "Fish", RoutingIcon = "set_meal" },
                new Category { Id = 7, Name = "Beverage", RoutingIcon = "emoji_food_beverage" }

            };
        // GET: api/<CategoryController>
        [HttpGet]
        public IEnumerable<Category> Get() 
        {
            return categories;
        }

        // GET api/<CategoryController>/5
        [HttpGet("{id}")]
        public Category Get(int id)
        {
            var category=categories.Find(c => c.Id == id);
            return category;
        }

        // POST api/<CategoryController>
        [HttpPost]
        public void Post([FromBody] Category value)
        {
            categories.Add(value);
        }

        // PUT api/<CategoryController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Category value)
        {
            var category = categories.Find(c => c.Id == id);
            category = value;
        }

        // DELETE api/<CategoryController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var category = categories.Find(c => c.Id == id);
            categories.Remove(category);

        }
    }
}
