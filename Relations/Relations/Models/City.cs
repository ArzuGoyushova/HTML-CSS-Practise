using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Relations.Models
{
    public class City
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Population { get; set; }
        public double Area { get; set; }
        public int CountryId { get; set; }
        public Country Country { get; set; } //navigation
    }
}
