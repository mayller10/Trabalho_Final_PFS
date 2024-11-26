using System;
using adotapetsAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace adotapetsAPI.Infra;

public class AdocaoContext : DbContext
{
    public DbSet<Pet> Pet {get; set;}
    public DbSet<Adotado> Adotado {get; set;}
    public DbSet<Usuario> Usuarios {get; set;}

    public AdocaoContext()
    {
        caminho = @$"{AppDomain.CurrentDomain.BaseDirectory}\adocao.db";
    }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
    {
        options.UseSqlite($"Data Source={caminho}");
    }

    private string caminho;
}
