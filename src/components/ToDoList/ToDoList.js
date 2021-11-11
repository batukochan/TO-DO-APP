import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Checkbox, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { toggle, del } from '../../redux/_reducers/slices/todoSlice';
// import BasicTooltip from './BasicTooltip';
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';

import './ToDoList.css'
let filtered = []
export default function ToDoList() {


    const dispatch = useDispatch()

    const items = useSelector((state) => state.todo.items)
    const activeFilter = useSelector((state) => state.todo.activeFilter)
    filtered = items;
    if(activeFilter != 'all'){
        filtered = items.filter(todo=> activeFilter === "active" ? todo.completed === false  : todo.completed === true)
    }
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
    }));
    return (
        <div className='todolist'>
            <Grid container spacing={4} >
                {filtered.map(item => <Grid item xs>
                    <Item>
                        <Card key={item.id} sx={{ maxWidth: 250 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={item.image}
                                    alt={item.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">

                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>

                                <FormGroup>
                                    <FormControlLabel control={<Checkbox checked={item.completed} />} onChange={() => dispatch(toggle({ id: item.id }))} label={item.completed ? "Done" : "To Do"} />
                                </FormGroup>
                                <Tooltip title="Delete">
                                    <Button onClick={()=>dispatch(del(item.id))}>
                                        <DeleteIcon />
                                    </Button>
                                </Tooltip>

                            </CardActions>
                        </Card>
                    </Item>
                </Grid>)}

            </Grid>
        </div>

    );
}