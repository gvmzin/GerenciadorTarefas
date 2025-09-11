// GerenciadorTarefas/Controllers/TarefasController.cs
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GerenciadorTarefas.Data;
using GerenciadorTarefas.Models;

[Route("api/[controller]")]
[ApiController]
public class TarefasController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly IConfiguration _configuration;

    public TarefasController(AppDbContext context, IConfiguration configuration)
    {
        _context = context;
        _configuration = configuration;
    }

    // GET: api/Tarefas
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Tarefa>>> GetTarefas()
    {
        return await _context.Tarefas.OrderByDescending(t => t.DataCriacao).ToListAsync();
    }

    // GET: api/Tarefas/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Tarefa>> GetTarefa(int id)
    {
        var tarefa = await _context.Tarefas.FindAsync(id);

        if (tarefa == null)
        {
            return NotFound();
        }

        return tarefa;
    }

    // POST: api/Tarefas
    [HttpPost]
    public async Task<ActionResult<Tarefa>> PostTarefa(Tarefa tarefa)
    {
        tarefa.DataCriacao = DateTime.UtcNow; // Garante a data no servidor
        _context.Tarefas.Add(tarefa);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetTarefa), new { id = tarefa.Id }, tarefa);
    }

    // PUT: api/Tarefas/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutTarefa(int id, Tarefa tarefa)
    {
        if (id != tarefa.Id)
        {
            return BadRequest();
        }

        _context.Entry(tarefa).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!TarefaExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

        return NoContent();
    }

    // DELETE: api/Tarefas/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteTarefa(int id)
    {
        var tarefa = await _context.Tarefas.FindAsync(id);
        if (tarefa == null)
        {
            return NotFound();
        }

        _context.Tarefas.Remove(tarefa);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool TarefaExists(int id)
    {
        return _context.Tarefas.Any(e => e.Id == id);
    }

    [HttpGet("debug-environment")]
    public IActionResult DebugEnvironment()
    {
        var variables = System.Environment.GetEnvironmentVariables();
        var result = new System.Text.StringBuilder();
        result.AppendLine("--- VARIÁVEIS DE AMBIENTE DETECTADAS PELO .NET ---");

        foreach (System.Collections.DictionaryEntry variable in variables)
        {
            result.AppendLine($"CHAVE: '{variable.Key}' | VALOR: '{variable.Value}'");
        }

        result.AppendLine("\n--- TESTE ESPECÍFICO DA LEITURA DA CONNECTION STRING ---");
        var connectionString = _configuration.GetConnectionString("DefaultConnection");

        if (string.IsNullOrEmpty(connectionString))
        {
            result.AppendLine("RESULTADO: GetConnectionString(\"DefaultConnection\") RETORNOU VAZIO OU NULO.");
        }
        else
        {
            result.AppendLine($"RESULTADO: GetConnectionString(\"DefaultConnection\") retornou: '{connectionString}'");
        }

        // Retorna o texto puro para ser fácil de ler no navegador
        return Content(result.ToString(), "text/plain");
    }
}