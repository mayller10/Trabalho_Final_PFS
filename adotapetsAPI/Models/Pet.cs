using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace adotapetsAPI.Models
{
    public class Pet
    {
        public long Id { get; set; }
        public string Nome { get; set; } = string.Empty;
        public string Raca { get; set; } = null!;
        public char Sexo { get; set; }        
        public string URL { get; set; } = string.Empty;

    }
    
}