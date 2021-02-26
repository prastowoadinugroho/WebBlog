import React, { useState } from 'react';
import { TextField, Button, Typography, Paper} from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './style';

const Form = () => {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFiles: ''
    })
    const classes = useStyles();

    const handleSubmit = () => {

    }

    const clear = () => {

    }

    return (
        <Paper className={classes.paper}>
            <form
                autoComplete="off"
                noValidate
                className={`${classes.root} ${classes.form}`}
                onSubmit={handleSubmit}
            >
                <Typography variant="h6" className={classes.heading} >Creating a Memory</Typography>
                <TextField 
                    name="creator" 
                    variant="outlined"
                    size="small" 
                    label="Creator" 
                    fullWidth
                    value={postData.creator}
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value})}
                />
                <TextField 
                    name="title" 
                    variant="outlined"
                    size="small" 
                    label="Title" 
                    fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value})}
                />
                <TextField 
                    name="message" 
                    variant="outlined"
                    size="small" 
                    label="Message" 
                    fullWidth
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value})}
                />
                <TextField 
                    name="tags" 
                    variant="outlined"
                    size="small" 
                    label="Tags" 
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value})}
                />
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setPostData({ ...postData, selectedFiles: base64})}
                    />    
                </div>
                <Button
                    className={classes.buttonSubmit}
                    variant="contained"
                    color= "primary"
                    size= "small"
                    type="submit"
                    fullWidth
                >
                Submit
                </Button>    
                <Button
                    variant="contained"
                    color= "secondary"
                    size= "small"
                    fullWidth
                    onClick={clear}
                >
                Clear
                </Button>    
            </form>
        </Paper>
    )
}

export default Form;
