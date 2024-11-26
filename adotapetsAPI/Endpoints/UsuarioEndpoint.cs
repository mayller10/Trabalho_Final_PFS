using System;
using adotapetsAPI.Infra;
using adotapetsAPI.Models;
using Microsoft.AspNetCore.Identity;

namespace adotapetsAPI.Endpoints;

public static class UsuarioEndpoints
{
    public static void AdicionarUsuariosEndpoints(this WebApplication app)
    {
        var group = app.MapGroup("/usuarios");

        group.MapGet("", Get);
        group.MapGet("/{id}", GetById).RequireAuthorization("AdminOuCliente");
        group.MapPost("/cliente", Post);
        group.MapPost("/adm", PostAdm).RequireAuthorization("Admin");
        group.MapPut("/{id}", Put).RequireAuthorization("AdminOuCliente");
        group.MapDelete("/{id}", Delete).RequireAuthorization("AdminOuCliente");
    }

    private static IResult Get(AdocaoContext db)
    {
        return TypedResults.Ok(db.Usuarios.ToList());
    }

    private static IResult GetById(long id, AdocaoContext db)
    {
        var obj = db.Usuarios.Find(id);

        if(obj == null)
            return TypedResults.NotFound();

        
        return TypedResults.Ok(obj);
    }

    private static IResult Post(Usuario obj, AdocaoContext db, IPasswordHasher<Usuario> hasher)
    {
        obj.Role = "Cliente";
        obj.HashSenha = hasher.HashPassword(obj, obj.HashSenha);
        db.Usuarios.Add(obj);
        db.SaveChanges();
        
        return TypedResults.Created("", obj);
    }

    private static IResult PostAdm(Usuario obj, AdocaoContext db, IPasswordHasher<Usuario> hasher)
    {
        obj.Role = "Admin";
        obj.HashSenha = hasher.HashPassword(obj, obj.HashSenha);
        db.Usuarios.Add(obj);
        db.SaveChanges();
        
        return TypedResults.Created("", obj);
    }

    private static IResult Put(long id, Usuario objNovo, AdocaoContext db)
    {
        if(id != objNovo.Id)
            return TypedResults.BadRequest();

        var obj = db.Usuarios.Find(id);

        if(obj == null)
            return TypedResults.NotFound();

        db.Usuarios.Update(obj);
        db.SaveChanges();

        return TypedResults.NoContent();
    }

    private static IResult Delete(long id, AdocaoContext db)
    {
        var obj = db.Usuarios.Find(id);

        if(obj == null)
            return TypedResults.NotFound();

        db.Usuarios.Remove(obj);
        db.SaveChanges();

        return TypedResults.NoContent();
    }
}
