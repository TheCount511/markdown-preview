import React from 'react'
import '../styles/styles.css'

        	const Editor=(props)=>{
        	
        	        	return (
        	        	<div className ="editorPane"class ="editorPane">
        	            	<div className='title'><p>HTML Markdown Preview App</p></div>
                               {/* <Toolbar/>*/}
        	            	<textarea id ="editor"class ="editor" value={props.input} onChange={props.handleChange} type="text"/>        	            </div>
        	        		);
        	 }  


export default Editor;