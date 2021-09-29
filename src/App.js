import React,{ Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import axios from 'axios';
class App extends Component{
  state={
    contents:[],
    post:``
  };
  onButtonSubmit=(Event)=>{
    Event.preventDefault();
    console.log(this.state.post);
    axios.defaults.xsrfHeaderName="X-CSRFToken";
    axios.post('http://localhost:8000/post/',
    {content:this.state.post},
    {headers:{'Authorization':'Token 1c345d6053df8ecbec3c35deeec44e38c61aac24'}
  })
  . then(response=>{
    console.log(response);
    this.setState({
      contents:response.data
    })
  });
  }
  createMarkup=(markup)=>{
    return{__html:markup}
  }
  render(){
    const ckeditorList=this.state.contents.map(content=>{
      return(
        <div key={content.id}>
          <div dangerouslySetInnerHTML={this,this.createMarkup(content.content)}></div>
          <hr/>
        </div>
      )
    })
    return (
      <div className="App">
          {ckeditorList}
          <h2>Hello from CKeditor</h2>

          <CKEditor
              editor={ ClassicEditor }
              onChange={ ( event, editor ) => {
                  this.setState({post: editor.getData()});
              }}
          />
          <button onClick={this.onButtonSubmit}>Submit</button>
      </div>
  );
  }
}
export default App;