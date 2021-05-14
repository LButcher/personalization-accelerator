import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Icon from '@material-ui/core/Icon'


export default function GoalForm(parentUtil) {
  const [name,setName] = React.useState('')
  const [description,setDescription] = React.useState('')

  const handleClose = () =>{
    setName('')
    setDescription('')
    parentUtil.handleClose();
  }
  
  const submitForm = (name,description) =>{
    const today = new Date()
    var date = today.getMonth()+'-'+today.getDate()+'-'+today.getFullYear()
    parentUtil.addGoal(name,description,date)
    parentUtil.handleClose();
    setName('')
    setDescription('')
  }

  return (
    <div style={{display:'flex'}}>
        <Button variant="outlined" color="primary" size="medium" onClick={()=>parentUtil.handleClickOpen(parentUtil.id)}><Icon color="primary" style={{}}>add</Icon><b>Add Goal</b></Button>
      <Dialog open={parentUtil.open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add New Goal</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            id="name"
            label="Name"
            type="name"
            fullWidth
            margin="normal"
            variant="outlined"
            required
            value={name}
            onChange={e=>setName(e.target.value)}
          />
          <TextField
            autoFocus
            id="description"
            label="description"
            type="description"
            margin="normal"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            required
            value={description}
            onChange={e=>setDescription(e.target.value)}

          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={()=>submitForm(name,description)} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}