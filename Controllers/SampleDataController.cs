using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers; 
using Microsoft.AspNetCore.Mvc;

namespace reactapp.Controllers {
    [Route("api/[controller]")]
    public class SampleDataController : Controller {

        private const string URL = "http://profiler.markinson.com.au/api/Customer";

        private IEnumerable<CustomerResponseData> customerApiCall() {
            HttpClient client = new HttpClient{
                BaseAddress = new Uri(URL) 
            };
            // Add an Accept header for JSON format.
            client.DefaultRequestHeaders.Accept.Add(
                new MediaTypeWithQualityHeaderValue("application/json")
            );
            // List data response.
            HttpResponseMessage response = client.GetAsync("").Result;  // Blocking call! Program will wait here until a response is received or a timeout occurs.
            var results = response.IsSuccessStatusCode ? response.Content.ReadAsAsync<IEnumerable<CustomerResponseData>>().Result : null;

            //Dispose once all HttpClient calls are complete.
            client.Dispose();
            return results;
        }

        [HttpGet("[action]")]
        public IEnumerable<ResponseData> ProcessWords()
        {
            var apiResponse = this.customerApiCall();
            List<ResponseData> response = new List<ResponseData>();

            foreach (var data in apiResponse) {
                String company = data.CompanyName;
                if (!String.IsNullOrEmpty(company)) {
                    string[] words = company.Split(' '); 
                    foreach (string word in words) {
                        // pick words with length greater the 2 and are not common
                        if (word.Length > 2 && !CommonWordsDetector.Instance.isCommonWord(word)) {
                            var responseData = response.Find(
                                _data => _data != null && _data.Word == word
                            );

                            // if data is present then update it or else create
                            if (responseData != null) {
                                responseData.Count += 1;
                                responseData.Companies.Add(company);
                            } else {
                                responseData = new ResponseData
                                {
                                    Count = 1,
                                    Word = word,
                                    Companies = new HashSet<string>()
                                };
                                responseData.Companies.Add(company);
                                response.Add(responseData);
                            }
                        }
                    }
                }
            }
            return response.OrderByDescending(
                obj => obj.Count
            ).ThenByDescending(
                obj => obj.Word
            ).ToList().Take(5);
        }
    }
}
