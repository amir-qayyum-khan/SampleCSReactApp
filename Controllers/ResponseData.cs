using System;
using System.Collections.Generic;

namespace reactapp.Controllers {
    public class ResponseData {

        public Int32 Count { get; set; }
        public string Word { get; set; }
        public HashSet<string> Companies { get; set; }
    }
}
