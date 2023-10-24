using H2R.Domain;
using H2R.Domain.DTO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Diagnostics;

namespace H2R.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class H2RController : ControllerBase
    {
        private readonly string connectionString;
        public H2RController(IConfiguration configuration)
        {
            connectionString = configuration.GetConnectionString("SqlServerDb") ?? "";
        }

        [HttpPost("TestCandidate")]
        public ActionResponse TestCandidateData(TestDTO testDTO)
        {
            try
            {
                using (var connection = new SqlConnection(connectionString))
                {
                    connection.Open();

                    string insertQuery = "INSERT INTO Candidate (FirstName,MiddleName,LastName,DBO) VALUES (@V1,@V2,@V3,@V4)";
                    using (var command = new SqlCommand(insertQuery, connection))
                    {

                        // Add parameters
                        command.Parameters.AddWithValue("@V1", testDTO.FirstName);
                        command.Parameters.AddWithValue("@V2", testDTO.MiddleName);
                        command.Parameters.AddWithValue("@V3", testDTO.LastName);
                        command.Parameters.AddWithValue("@V4", testDTO.DBO);

                        command.ExecuteNonQuery();
                    }
                }
            }
            catch (Exception ex)
            {
                Debug.WriteLine("Error: " + ex.Message);
            }

            return new ActionResponse()
            {
                Data = testDTO
            };
        }


        [HttpPost("SaveCandidate")]
        public ActionResponse SaveCandidateData(CandidateDTO candidateDTO)
        {
            return new ActionResponse()
            {
                Data = candidateDTO
            };
        }

    }
}