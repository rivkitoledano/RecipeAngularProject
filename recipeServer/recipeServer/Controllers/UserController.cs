using Microsoft.AspNetCore.Mvc;
using recipeServer.Entities;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace recipeServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
       static List<User> users = new List<User>
            {
                new User
                {
                    Id = 1,
                    Name = "John Doe",
                    Address = "123 Main Street",
                    Email = "john.doe@example.com",
                    Password = "password123"
                },
                new User
                {
                    Id = 2,
                    Name = "Jane Smith",
                    Address = "456 Elm Street",
                    Email = "jane.smith@example.com",
                    Password = "smith456"
                },
                new User
                {
                    Id = 3,
                    Name = "Alice Johnson",
                    Address = "789 Oak Street",
                    Email = "alice.johnson@example.com",
                    Password = "alice789"
                },
                new User
                {
                    Id = 4,
                    Name = "Bob Brown",
                    Address = "101 Maple Street",
                    Email = "bob.brown@example.com",
                    Password = "brown101"
                },
                new User
                {
                    Id = 5,
                    Name = "Emily Davis",
                    Address = "202 Pine Street",
                    Email = "emily.davis@example.com",
                    Password = "davis202"
                },
                new User
                {
                    Id = 6,
                    Name = "Michael Wilson",
                    Address = "303 Cedar Street",
                    Email = "michael.wilson@example.com",
                    Password = "wilson303"
                },
                new User
                {
                    Id = 7,
                    Name = "Sophia Martinez",
                    Address = "404 Birch Street",
                    Email = "sophia.martinez@example.com",
                    Password = "martinez404"
                },
                new User
                {
                    Id =8,
                    Name = "James Taylor",
                    Address = "505 Fir Street",
                    Email = "james.taylor@example.com",
                    Password = "taylor505"
                }
        };
        static int count = users.Count()+1;

        // GET: api/<UserController>
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return users;
        }

        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            var user = users.Find(r => r.Id == id);
            if (user == null)
            {
                return NotFound(); // מחזיר תגובת 404 Not Found אם המשתמש לא נמצא
            }
            return Ok(user); // מחזיר את המשתמש אם הוא נמצא        }
          }
            // POST api/<UserController>
            [HttpPost]
        public void Post([FromBody] User user)
        {
            user.Id = count++;
            users.Add(user);
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] User value)
        {
            var user = users.Find(u => u.Id == id);
            user=value;
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var user = users.Find(u => u.Id == id);
          users.Remove(user);
        }
    }
}
