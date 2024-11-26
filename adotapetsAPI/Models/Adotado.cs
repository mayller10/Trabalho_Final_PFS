using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace adotapetsAPI.Models
{
    public class Adotado
    {
    public long Id { get; set; }
    public Pet Pet { get; set; } = null!;
    public Usuario Usuario { get; set; } = null!;
    }
}