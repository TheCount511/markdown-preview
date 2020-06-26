    const Editor = (props) => {

        return ( <
            div className = "editorPane"
            class = "editorPane" >
            <div className='title'><p>Markdown Preview App</p></div> <
            textarea id = "editor"
            class = "editor"
            value = { props.input } onChange = { props.handleChange } type = "text" / > < /div>
        );
    }

    marked.setOptions({
        breaks: true,
    });

    // INSERTS target="_blank" INTO HREF TAGS (required for codepen links)
    const renderer = new marked.Renderer();
    renderer.link = function(href, title, text) {
        return `<a target="_blank" href="${href}">${text}` + '</a>';
    }
    renderer.code = function(code, language) {
        return '<pre><code class=language-' + language + '>' + code + '</code></pre>';
    }


    const Preview = (props) => {
        return (
            <div className='previewPaneWrapper' class='previewPaneWrapper'>
        <div class="previewPaneHead">
            <p>Preview</p>
        </div>
    <div id='preview' dangerouslySetInnerHTML={{__html: marked(props.input, { renderer: renderer })}} /> </div>
        );
    }


    class App extends Component {
        constructor(props) {
            super(props)
            this.state = {
                markdown: placeholder
            };

            this.handleChange = this.handleChange.bind(this)
        }


        handleChange(event) {
            this.setState({
                markdown: event.target.value
            })
        }

        render() {
            return (
                <div>
            <Editor handleChange={this.handleChange} input={this.state.markdown}/>
            <Preview input={this.state.markdown}/>
            </div>
            );
        }
    }




    let placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<inline style>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`

    ReactDOM.render(<App/>, document.getElementById('root'))