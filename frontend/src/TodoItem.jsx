import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import { Grid, createTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function TodoItem({ item, updateTask, undoTask, deleteTask }) {
    let color = "yellow";
    let style = {
        wordWrap: "break-word",
    };

    let sx = {
    }
    if (item.status) {
        color = "green";
        style["textDecorationLine"] = "line-through";
        sx = {
            backgroundColor: "aquamarine"
        }
    }


    return (
        <Card key={item._id} sx={sx} fluid>
            <CardContent>
                <Typography gutterBottom variant='h5' component="div" style={style}
                    sx={(theme) => {
                        if (item.status) return ({ backgroundColor: theme.palette.background.done })
                    }}>
                    {item.task}
                </Typography>
            </CardContent>
            <Grid container justifyContent="flex-end">
                <Button
                    startIcon={<CheckCircleOutlineOutlinedIcon />}
                    sx={{ color: 'green' }}
                    onClick={updateTask}>
                    Done
                </Button>

                <Button
                    startIcon={<ReplayOutlinedIcon />}
                    sx={{ color: 'blue' }}
                    onClick={undoTask}>
                    Undo
                </Button>

                <Button
                    startIcon={<DeleteOutlineOutlinedIcon />}
                    sx={{ color: 'red' }}
                    onClick={deleteTask}>
                    Delete
                </Button>
            </Grid>
        </Card >
    );
}