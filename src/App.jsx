import { useState } from 'react'
import './App.css'
import marked from 'marked'

marked.setOptions ({
  breaks: true
})

const renderer = new marked.Renderer();
const placeholder = `# This is a Markdown Previewer

## This is a subheading

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can make text **bold**
Or you can make a list
- like this
  - or this.

Even make a block quote like this:
> This is a Block quote

You can also embed an image like this:
![sunset](https://i.ibb.co/tP57KZ3/sandmoon.jpg)

[View a Markdown Cheatsheet here.](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)`;


function App() {
  const [text, setText] = useState(placeholder)

  return (
    <div className="App">

      <div className="text-center px-4">
        <h1 className="heading">Markdown Previewer</h1>
        <h4>Enter your Markdown text here:</h4>
        <textarea 
          className="textarea"
          name="markdown" 
          id="editor" 
          rows="10" 
          value={text}
          onChange={(e)=> setText(e.target.value)}
        ></textarea>
        <h4 className="text-preview">Here's the Markdown Preview:</h4>
        <Preview markdown={text}/>
      </div>
      
    </div>
  )
}

function Preview ({ markdown }) {

  return (
      <div
      dangerouslySetInnerHTML={{
          __html: marked(markdown, { renderer: renderer }), 
      }}
      id="preview"
      ></div>
  );
}

export default App
