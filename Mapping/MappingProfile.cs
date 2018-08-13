using AutoMapper;
using vega_mosh_asp_angular.Controllers.Resources;
using vega_mosh_asp_angular.Models;

namespace vega_mosh_asp_angular.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Make, MakeResource>();
            CreateMap<Model, ModelResource>();
        }
    }
}