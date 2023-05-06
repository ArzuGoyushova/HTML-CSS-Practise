using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Relations.Models
{
    public class Contact
    {
        [Key,ForeignKey(nameof(Student))] //Contactin id-ni Student id-den asili edir. hem foreign keydi, hem primary
        public int Id { get; set; }
        public string Address { get; set; }
        public string PhoneNumber { get; set; }
    }
}
