import React from 'react';
import'../styles/styles.css'
import marked from 'marked'

marked.setOptions({
  breaks: true,
});

// INSERTS target="_blank" INTO HREF TAGS (required for codepen links)
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
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

export default Preview;