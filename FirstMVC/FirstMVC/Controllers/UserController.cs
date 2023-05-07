using Microsoft.AspNetCore.Mvc;

namespace FirstMVC.Controllers
{
    public class UserController : Controller
    {
        public IActionResult Index()
        {
            return Json(new {name="aci", age=28});
        }
    }
}
