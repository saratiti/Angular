using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Text;

namespace Tahaluf.Career.core.Common
{
    public interface IDbContext
    {
        
            DbConnection Connection { get; }
       
    }
}
