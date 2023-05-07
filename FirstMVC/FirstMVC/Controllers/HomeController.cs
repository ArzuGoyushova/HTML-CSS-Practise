using FirstMVC.Models;
using FirstMVC.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace FirstMVC.Controllers
{
    public class HomeController : Controller
    {
        //public string Index(int id)
        //{
        //    return $"{id}";
        //}
        //public IActionResult Index(int id)
        //{
        //    return Content($"{id}");
        //    //view,file,json da
        //}
        //public IActionResult Index()
        //{
        //    return File("~/image/img.jpg", "image/jpg");
        //}

        public IActionResult Index()
        {
            Student stu = new Student();
            stu.Id = 1;
            stu.Name = "name1";
            stu.Surname = "surname1";

            Student stu2 = new Student();
            stu2.Id = 2;
            stu2.Name = "name2";
            stu2.Surname = "surname2";

            List<Student> students = new List<Student>();
            students.Add(stu);
            students.Add(stu2);

            Group studentGroup = new Group();
            studentGroup.Id = 1;
            studentGroup.Name = "p515";

            HomeVM homevm = new HomeVM()
            {
                Students = students,
                Group = studentGroup
            };

            return View(homevm);
        }
        public IActionResult About()
        {
            return View();
        }
    }
}
