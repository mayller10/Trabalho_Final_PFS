using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using adotapetsAPI.Infra;
using adotapetsAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace adotapetsAPI.Endpoints
{
    public static class PetEndpoint
    {
        public static void AdicionarpetEndpoints(this WebApplication app)
        {
            app.MapGet("/pet", Get).RequireAuthorization();
            app.MapGet("/pet/{id}", GetById).RequireAuthorization();
            app.MapPost("/pet", Post).RequireAuthorization("Admin");
            app.MapPut("/pet/{id}", Put).RequireAuthorization("AdminOuCliente");
            app.MapDelete("/pet/{id}", Delete).RequireAuthorization("Admin");
        }

        private static IResult Get( [FromServices] AdocaoContext db)
        {
            return TypedResults.Ok(db.Pet.ToList());
        }

        private static IResult GetById(long id, [FromServices] AdocaoContext db)
        {
            var obj = db.Pet.Find(id);

            if(obj == null)
                return TypedResults.NotFound();

            
            return TypedResults.Ok(obj);
        }

        private static IResult Post(Pet obj, [FromServices] AdocaoContext db)
        {
            db.Pet.Add(obj);
            db.SaveChanges();
            
            return TypedResults.Created("", obj);
        }

        private static IResult Put(long id, Pet objNovo, [FromServices] AdocaoContext db)
        {
            if(id != objNovo.Id)
                return TypedResults.BadRequest();

            var obj = db.Pet.Find(id);

            if(obj == null)
                return TypedResults.NotFound();

            obj.Nome = objNovo.Nome;
            obj.Raca = objNovo.Raca;
            obj.Sexo = objNovo.Sexo;
            obj.URL = objNovo.URL;
            obj.Adotado = objNovo.Adotado;
                        
            db.Pet.Update(obj);
            db.SaveChanges();

            return TypedResults.NoContent();
        }

        private static IResult Delete(long id, [FromServices] AdocaoContext db)
        {
            var obj = db.Pet.Find(id);

            if(obj == null)
                return TypedResults.NotFound();

            db.Pet.Remove(obj);
            db.SaveChanges();

            return TypedResults.NoContent();
        }           
    }
}
