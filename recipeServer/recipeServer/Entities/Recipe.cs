namespace recipeServer.Entities
{
    public class Recipe
    {
        public static int Count { get; set; }

        public int Id { get; set; }
        public string Name { get; set; }
        public int CategoryId { get; set; }
        public int PreparationTime { get; set; }
        private int difficultyLevel;

        public int DifficultyLevel
        {
            get { return difficultyLevel; }
            set 
            {
                if(value>0&&value<6)
                    difficultyLevel = value; 
            }
        }
        public DateTime DateAdded { get; set; }
        public List<String> Ingredients { get; set; }
        public List<String> Instructions { get; set; }
        public int UserId { get; set; }
        public string RoutingImage { get; set; }
        public string RoutingImageExtend { get; set; } = "../../../../assets/images/background.jpg";

        public Recipe()
        {
                Id = Count++;
        }
    }
}
