using System.Web;
using System.Web.Mvc;

namespace D11_MVC5_EF6_Security
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
