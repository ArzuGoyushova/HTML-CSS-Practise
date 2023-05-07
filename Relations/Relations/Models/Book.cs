using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Relations.Models
{
    public class Book
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<BookGenre> BookGenre { get; set; }

        public Book()
        {
            BookGenre = new List<BookGenre>();
        }
    }
}
