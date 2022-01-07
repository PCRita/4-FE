using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(D11_MVC5_EF6_Security.Startup))]
namespace D11_MVC5_EF6_Security
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
