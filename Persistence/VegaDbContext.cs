using Microsoft.EntityFrameworkCore;
using vega_mosh_asp_angular.Models;

namespace vega_mosh_asp_angular.Persistence
{
    public class VegaDbContext : DbContext
    {
        public VegaDbContext(DbContextOptions<VegaDbContext> options) : base(options)
        {
            
        }
        public DbSet<Make> Makes { get; set; }
        public DbSet<Feature> Features { get; set; }
        
    }
}