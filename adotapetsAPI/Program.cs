using adotapetsAPI;
using adotapetsAPI.Endpoints;
using adotapetsAPI.Infra;
using adotapetsAPI.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.AdicionarpetEndpoints();
app.AdicionaradocaoEndpoints();
// app.AdicionarLoginEndpoints();
app.AdicionarUsuariosEndpoints();

app.Run();

