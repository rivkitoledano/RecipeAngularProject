namespace recipeServer.Entities
{
    public class User
    {
        public static int Count { get; set; }
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public User()
        {
        }
    }
}
