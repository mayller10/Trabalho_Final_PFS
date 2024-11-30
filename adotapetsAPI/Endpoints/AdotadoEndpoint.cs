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
        app.MapGet("/adocao", Get).RequireAuthorization();
        app.MapGet("/adocao/{id}", GetById).RequireAuthorization();
        app.MapPost("/adocao", Post).RequireAuthorization();
        app.MapPut("/adocao/{id}", Put).RequireAuthorization();
        app.MapDelete("/adocao/{id}", Delete).RequireAuthorization();
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
