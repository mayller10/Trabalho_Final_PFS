using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace adotapetsAPI.Migrations
{
    /// <inheritdoc />
    public partial class adicionandocampourl : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "URL",
                table: "Pet",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "URL",
                table: "Pet");
        }
    }
}
