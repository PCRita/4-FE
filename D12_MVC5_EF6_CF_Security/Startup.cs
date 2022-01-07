using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(E_MVC5_EF6_CF.Startup))]
namespace E_MVC5_EF6_CF
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
