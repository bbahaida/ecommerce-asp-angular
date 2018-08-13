using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace vega_mosh_asp_angular.Models
{
    public class Make{
        public int Id { get; set; }
        public string Name { get; set; }

        public ICollection<Model> Models { get; set; }

        public Make()
        {
            this.Models = new Collection<Model>();
        }
        
    }
}