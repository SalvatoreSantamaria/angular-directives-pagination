import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentPage = 0;


  images = [
    { title: 'Fall',
      url: 'https://images.unsplash.com/photo-1467649165350-bdae46d9779b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFsbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    { title: 'Winter',
    url: 'https://images.unsplash.com/photo-1489674267075-cee793167910?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8d2ludGVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    { title: 'Spring',
    url: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8c3ByaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    { title: 'Summer',
    url: 'https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8c3VtbWVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    { title: 'Fall',
    url: 'https://images.unsplash.com/photo-1467649165350-bdae46d9779b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFsbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    { title: 'Winter',
    url: 'https://images.unsplash.com/photo-1489674267075-cee793167910?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8d2ludGVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    { title: 'Spring',
    url: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8c3ByaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    { title: 'Summer',
    url: 'https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8c3VtbWVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    { title: 'Fall',
    url: 'https://images.unsplash.com/photo-1467649165350-bdae46d9779b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFsbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    { title: 'Winter',
    url: 'https://images.unsplash.com/photo-1489674267075-cee793167910?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8d2ludGVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    { title: 'Spring',
    url: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8c3ByaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    { title: 'Summer',
    url: 'https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8c3VtbWVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ]

  checkWindowIndex(index: number) {
    // show window of 5 elements 
    return Math.abs(this.currentPage - index) < 5
  }

}
