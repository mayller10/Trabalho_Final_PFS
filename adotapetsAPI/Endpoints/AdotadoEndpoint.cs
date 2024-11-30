using System;
using adotapetsAPI.Infra;
using adotapetsAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;


namespace adotapetsAPI.Endpoints;

public static class AdotadoEndpoints
{
    public static void AdicionaradocaoEndpoints(this WebApplication app)
    {
        app.MapGet("/adocao", Get).RequireAuthorization("Admin");
        app.MapGet("/adocao/{id}", GetById).RequireAuthorization("AdminOuCliente");
        app.MapGet("/adocao/usuario/{id}", GetByUsuario).RequireAuthorization("Cliente");
        app.MapPost("/adocao", Post).RequireAuthorization("Cliente");
        app.MapPut("/adocao/{id}", Put).RequireAuthorization("AdminOuCliente");
        app.MapDelete("/adocao/{id}", Delete).RequireAuthorization("AdminOuCliente");
    }

    private static IResult Get([FromServices] AdocaoContext db)
    {

        return TypedResults.Ok(db.Adotado
            .Include(r => r.Pet)
            .Include(r => r.Usuario)
            .ToList());
    }

    private static IResult GetById(long id, [FromServices] AdocaoContext db)
    {
        var obj = db.Adotado
            .Include(r => r.Pet)
            .Include(r => r.Usuario)
            .FirstOrDefault(r => r.Id == id);

        if(obj == null)
            return TypedResults.NotFound();

        return TypedResults.Ok(obj);
    }

    private static IResult GetByUsuario(long id, [FromServices] AdocaoContext db)
    {
        var obj = db.Adotado
            .Include(r => r.Pet)
            .Include(r => r.Usuario)
            .Where(r => r.Usuario.Id == id);

        if(obj == null)
            return TypedResults.NotFound();

        return TypedResults.Ok(obj);
    }

    private static IResult Post(Adotado obj, [FromServices] AdocaoContext db)
    {
        var TemPet = db.Pet.Find(obj.Pet.Id);
        var TemUsuario = db.Usuarios.Find(obj.Usuario.Id);

        if (TemPet == null)
            return TypedResults.BadRequest();

        obj.Pet = TemPet;
        obj.Usuario = TemUsuario;
        db.Adotado.Add(obj);
        db.SaveChanges();
        
        return TypedResults.Created("", obj);
    }

    private static IResult Put(long id, Adotado objNovo, [FromServices] AdocaoContext db)
    {
        if(id != objNovo.Id)
            return TypedResults.BadRequest();

        var obj = db.Adotado
            .Include(r => r.Pet)
            .Include(r => r.Usuario)
            .FirstOrDefault(r => r.Id == id);

        if(obj == null)
            return TypedResults.NotFound();

        obj.Pet= objNovo.Pet;
        obj.Usuario= objNovo.Usuario;
        
        db.Adotado.Update(obj);
        db.SaveChanges();

        return TypedResults.NoContent();
    }

    private static IResult Delete(long id, [FromServices] AdocaoContext db)
    {
        var obj = db.Adotado.Find(id);

        if(obj == null)
            return TypedResults.NotFound();

        db.Adotado.Remove(obj);
        db.SaveChanges();

        return TypedResults.NoContent();
    }
}
