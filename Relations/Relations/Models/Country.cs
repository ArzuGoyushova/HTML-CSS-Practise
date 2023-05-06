using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Relations.Models
{
    public class Country
    {
        public int Id { get; }
        public string Name { get; set; }
        public double Population { get; set; }
        public List<City> Cities { get; set; }
    }
}
