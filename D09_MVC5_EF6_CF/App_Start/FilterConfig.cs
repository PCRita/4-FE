using System.Web;
using System.Web.Mvc;

namespace E_MVC5_EF6_CF
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
