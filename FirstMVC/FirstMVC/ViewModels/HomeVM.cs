using FirstMVC.Models;
using System.Collections.Generic;

namespace FirstMVC.ViewModels
{
    public class HomeVM
    {
        public List<Student> Students { get; set; }
        public Group Group { get; set; }
    }
}
